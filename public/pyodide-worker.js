// Web worker running Python in the browser with Pyodide.
// It is only loaded when a reader clicks "Run" on a code cell of a post.
//
// Message in:  { id, cells: string[] }  -> runs all the cells, in a fresh namespace
// Message out: { id, type: 'status', message }
//              { id, type: 'result', outputs, error, errorCell }
//   outputs: [{ type: 'image', data: base64png } | { type: 'text', data } | { type: 'html', data }]
//   Only the outputs of the LAST cell are returned: the previous cells are run to build the context.

const PYODIDE_VERSION = 'v314.0.7';
const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`;

// Import name -> pip package name, for packages that are not part of the Pyodide distribution
const PIP_NAMES = {
  sklearn: 'scikit-learn',
  PIL: 'pillow',
  highlight_text: 'highlight-text',
  matplotlib_venn: 'matplotlib-venn',
  great_tables: 'great-tables',
  faker: 'Faker',
  adjustText: 'adjustText',
};
// Imports that are part of another package or of the standard library
const SKIP_IMPORTS = new Set(['mpl_toolkits', 'google', 'IPython']);

let pyodideReady = null;
let currentId = null;
const installed = new Set();

const post = (msg) => self.postMessage({ id: currentId, ...msg });

async function init() {
  post({ type: 'status', message: 'Loading Python in your browser…' });
  const { loadPyodide } = await import(PYODIDE_URL + 'pyodide.mjs');
  const pyodide = await loadPyodide({ indexURL: PYODIDE_URL });
  post({ type: 'status', message: 'Loading matplotlib, pandas, numpy…' });
  await pyodide.loadPackage(['micropip', 'matplotlib', 'pandas', 'numpy', 'pyodide-http']);
  await pyodide.runPythonAsync(`
import os, sys, io, base64
os.environ["MPLBACKEND"] = "AGG"
import pyodide_http
pyodide_http.patch_all()
import matplotlib
matplotlib.use("AGG")
import matplotlib.pyplot as plt
plt.show = lambda *args, **kwargs: None

_pgg_outputs = []

def _pgg_capture_figures():
    for num in plt.get_fignums():
        fig = plt.figure(num)
        buf = io.BytesIO()
        fig.savefig(buf, format="png", bbox_inches="tight")
        _pgg_outputs.append(("image", base64.b64encode(buf.getvalue()).decode()))
    plt.close("all")

def _pgg_display(value):
    if value is None:
        return
    if hasattr(value, "_repr_html_"):
        try:
            html = value._repr_html_()
            if html:
                _pgg_outputs.append(("html", html))
                return
        except Exception:
            pass
    text = repr(value)
    # Python object reprs like <BarContainer object of 5 artists> are noise
    if not (text.startswith("<") and text.endswith(">")):
        _pgg_outputs.append(("text", text))
`);
  return pyodide;
}

async function installImports(pyodide, code) {
  const imports = pyodide.pyimport('pyodide.code').find_imports(code).toJs();
  const toLoad = [];
  for (const name of imports) {
    if (installed.has(name) || SKIP_IMPORTS.has(name)) continue;
    installed.add(name);
    toLoad.push(name);
  }
  if (!toLoad.length) return;
  post({ type: 'status', message: `Installing ${toLoad.join(', ')}…` });
  // Packages of the Pyodide distribution
  await pyodide.loadPackagesFromImports(code);
  // Other packages: install them from PyPI with micropip
  const micropip = pyodide.pyimport('micropip');
  for (const name of toLoad) {
    const available = pyodide.runPython(
      `import importlib.util; importlib.util.find_spec(${JSON.stringify(name)}) is not None`
    );
    if (available) continue;
    try {
      await micropip.install(PIP_NAMES[name] || name);
    } catch (e) {
      console.warn('Could not install', name, e);
    }
  }
  if (toLoad.includes('plotly')) {
    await pyodide.runPythonAsync(`
import plotly.io as pio
def _pgg_plotly_show(fig, *args, **kwargs):
    _pgg_outputs.append(("iframe", fig.to_html(include_plotlyjs="cdn", full_html=True)))
pio.show = _pgg_plotly_show
import plotly.basedatatypes
plotly.basedatatypes.BaseFigure.show = lambda self, *a, **k: _pgg_plotly_show(self)
`);
  }
}

self.onmessage = async (event) => {
  const { id, cells } = event.data;
  currentId = id;
  try {
    if (!pyodideReady) pyodideReady = init();
    const pyodide = await pyodideReady;

    await installImports(pyodide, cells.join('\n'));

    // Fresh namespace for each run
    const namespace = pyodide.globals.get('dict')();
    namespace.set('__name__', '__main__');
    const stdout = [];
    pyodide.setStdout({ batched: (s) => stdout.push(s) });

    post({ type: 'status', message: 'Running…' });
    for (let i = 0; i < cells.length; i++) {
      const isLast = i === cells.length - 1;
      pyodide.runPython('_pgg_outputs.clear()');
      stdout.length = 0;
      try {
        const value = await pyodide.runPythonAsync(cells[i], { globals: namespace });
        if (isLast) {
          if (stdout.length) pyodide.runPython('_pgg_outputs.append(("text", ' + JSON.stringify(stdout.join('\n')) + '))');
          pyodide.globals.get('_pgg_display')(value);
        }
        if (value && value.destroy) value.destroy();
        pyodide.runPython('_pgg_capture_figures()');
      } catch (err) {
        pyodide.runPython('import matplotlib.pyplot as plt; plt.close("all")');
        const message = String(err.message || err)
          .split('\n')
          .filter((l) => !l.includes('/lib/python3') && !l.includes('pyodide/_base.py'))
          .join('\n');
        post({ type: 'result', outputs: [], error: message, errorCell: i });
        return;
      }
    }
    const outputs = pyodide.globals
      .get('_pgg_outputs')
      .toJs()
      .map(([type, data]) => ({ type, data }));
    post({ type: 'result', outputs });
  } catch (err) {
    post({ type: 'result', outputs: [], error: String(err.message || err), errorCell: -1 });
  }
};
