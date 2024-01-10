import { BUNDLED_LANGUAGES, getHighlighter, renderToHtml } from 'shiki';

let highlighter;

export default async function highlight(code, lang = 'bash', theme = 'github-dark') {
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: [lang],
      theme,
    });
  }

  // Check for the loaded languages, and load the language if it's not loaded yet.
  if (!highlighter.getLoadedLanguages().includes(lang)) {
    // Check if the language is supported by Shiki
    const bundles = BUNDLED_LANGUAGES.filter(
      (bundle) =>
        // Languages are specified by their id, they can also have aliases (i. e. "js" and "javascript")
        bundle.id === lang || bundle.aliases?.includes(lang)
    );
    if (bundles.length > 0) {
      await highlighter.loadLanguage(lang);
    } else {
      // If the language is not supported, fallback to bash
      lang = 'bash';
    }
  }

  const tokens = highlighter.codeToThemedTokens(code, lang, theme, {
    includeExplanation: false,
  });

  const html = renderToHtml(tokens, { bg: 'transparent' });

  return html;
}
