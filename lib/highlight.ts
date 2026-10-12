import { createHighlighter, type Highlighter } from 'shiki';

// Syntax highlighting happens at build time: the html sent to the browser is already colored,
// no javascript needed.
let highlighterPromise: Promise<Highlighter> | null = null;

const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light'],
      langs: ['python', 'text', 'bash', 'json', 'html', 'css', 'javascript'],
    });
  }
  return highlighterPromise;
};

export async function highlightCode(code: string, lang = 'python'): Promise<string> {
  const highlighter = await getHighlighter();
  const language = highlighter.getLoadedLanguages().includes(lang) ? lang : 'text';
  return highlighter.codeToHtml(code, { lang: language, theme: 'github-light' });
}
