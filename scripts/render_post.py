"""
Runs the python code cells of a blog post and updates its outputs.

This replaces "Run all" in Jupyter: write your post in content/posts/<slug>/index.md,
then run:

    python scripts/render_post.py <slug>

Each ```python cell is executed in order (like a notebook). Its outputs are written
right below it, in a :::output block:
  - every matplotlib figure -> output-<n>.png next to index.md
  - printed text            -> a ```text block
  - a dataframe as last expression -> output-<n>.html

Existing :::output blocks of the post are replaced.
"""

import ast
import contextlib
import io
import os
import re
import sys
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

plt.show = lambda *args, **kwargs: None

ROOT = Path(__file__).resolve().parent.parent
CELL_RE = re.compile(r"^```python\n(.*?)\n```\n*(?::::output\n.*?\n:::\n*)?", re.S | re.M)


def run_cell(code, namespace):
    """Run a cell, returning (stdout, value of the last expression)."""
    tree = ast.parse(code)
    last_expr = None
    if tree.body and isinstance(tree.body[-1], ast.Expr):
        last_expr = ast.Expression(tree.body.pop().value)
    stdout = io.StringIO()
    with contextlib.redirect_stdout(stdout):
        exec(compile(tree, "<cell>", "exec"), namespace)
        value = eval(compile(last_expr, "<cell>", "eval"), namespace) if last_expr else None
    return stdout.getvalue(), value


def main(slug):
    post_dir = ROOT / "content" / "posts" / slug
    md_file = post_dir / "index.md"
    md = md_file.read_text()

    # Remove previous outputs
    for f in post_dir.glob("output-*"):
        f.unlink()

    os.chdir(post_dir)  # so that relative paths (e.g. a csv next to the post) work
    namespace = {"__name__": "__main__"}
    counter = 0

    def replace(match):
        nonlocal counter
        code = match.group(1)
        outputs = []
        stdout, value = run_cell(code, namespace)
        if stdout.strip():
            outputs.append(f"```text\n{stdout.rstrip()}\n```")
        if value is not None:
            if hasattr(value, "_repr_html_") and value._repr_html_():
                counter += 1
                (post_dir / f"output-{counter}.html").write_text(value._repr_html_())
                outputs.append(f'::output-html{{src="./output-{counter}.html"}}')
            elif not repr(value).startswith("<"):
                outputs.append(f"```text\n{value!r}\n```")
        for num in plt.get_fignums():
            counter += 1
            plt.figure(num).savefig(post_dir / f"output-{counter}.png", bbox_inches="tight")
            outputs.append(f"![](./output-{counter}.png)")
        plt.close("all")

        block = f"```python\n{code}\n```\n\n"
        if outputs:
            block += ":::output\n" + "\n\n".join(outputs) + "\n:::\n\n"
        return block

    md = CELL_RE.sub(replace, md)
    md_file.write_text(md.rstrip() + "\n")
    print(f"{slug}: {counter} outputs written")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("Usage: python scripts/render_post.py <slug>")
    main(sys.argv[1])
