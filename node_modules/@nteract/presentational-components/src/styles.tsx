import { createGlobalStyle } from "styled-components";

const DarkTheme = createGlobalStyle`
:root {
  --theme-app-bg: #2b2b2b;
  --theme-app-fg: var(--nt-color-alabaster-lightest);
  --theme-app-border: var(--nt-color-alabaster-light);

  --theme-primary-bg: var(--nt-color-midnight);
  --theme-primary-bg-hover: var(--nt-color-midnight);
  --theme-primary-bg-focus: var(--nt-color-midnight-light);

  --theme-primary-fg: var(--nt-color-alabaster-light);
  --theme-primary-fg-hover: var(--nt-color-alabaster-lighter);
  --theme-primary-fg-focus: var(--theme-app-fg);

  --theme-secondary-bg: var(--theme-primary-bg);
  --theme-secondary-bg-hover: var(--theme-primary-bg-hover);
  --theme-secondary-bg-focus: var(--theme-primary-bg-focus);

  --theme-secondary-fg: var(--nt-color-alabaster-light);
  --theme-secondary-fg-hover: var(--nt-color-alabaster-lighter);
  --theme-secondary-fg-focus: var(--theme-primary-fg);

  --theme-primary-shadow-hover:
    1px  1px 3px rgba(255, 255, 255, 0.12),
    -1px -1px 3px rgba(255, 255, 255, 0.12);
  --theme-primary-shadow-focus:
    3px  3px 9px rgba(255, 255, 255, 0.12),
    -3px -3px 9px rgba(255, 255, 255, 0.12);

  --theme-title-bar-bg: var(--nt-color-midnight-darkest);

  --theme-menu-bg: var(--theme-primary-bg);
  --theme-menu-bg-hover: var(--theme-primary-bg-hover);
  --theme-menu-bg-focus: var(--theme-primary-bg-focus);
  --theme-menu-shadow: var(--theme-primary-shadow-hover);

  --theme-menu-fg: var(--theme-app-fg);
  --theme-menu-fg-hover: var(--theme-app-fg);
  --theme-menu-fg-focus: var(--theme-app-fg);

  --theme-cell-bg: #111;
  --theme-cell-border: #444;
  --theme-cell-gutter: #222;
  --theme-cell-gutter-color: #999;
  --theme-cell-shadow-hover: var(--theme-primary-shadow-hover);
  --theme-cell-shadow-focus: var(--theme-primary-shadow-focus);

  --theme-cell-prompt-bg: var(--theme-primary-bg);
  --theme-cell-prompt-bg-hover: var(--theme-primary-bg);
  --theme-cell-prompt-bg-focus: var(--theme-primary-bg);

  --theme-cell-prompt-fg: var(--theme-primary-fg);
  --theme-cell-prompt-fg-hover: var(--theme-primary-fg-hover);
  --theme-cell-prompt-fg-focus: var(--theme-primary-fg-focus);

  --theme-cell-toolbar-bg: var(--theme-primary-bg);
  --theme-cell-toolbar-bg-hover: var(--theme-primary-bg-hover);
  --theme-cell-toolbar-bg-focus: var(--theme-primary-bg-focus);

  --theme-cell-toolbar-fg: var(--theme-secondary-fg);
  --theme-cell-toolbar-fg-hover: var(--theme-secondary-fg-hover);
  --theme-cell-toolbar-fg-focus: var(--theme-secondary-fg-focus);

  --theme-cell-menu-bg: var(--theme-primary-bg);
  --theme-cell-menu-bg-hover: var(--theme-primary-bg-hover);
  --theme-cell-menu-bg-focus: var(--theme-primary-bg-focus);

  --theme-cell-menu-fg: var(--theme-primary-fg);
  --theme-cell-menu-fg-hover: var(--theme-primary-fg-hover);
  --theme-cell-menu-fg-focus: var(--theme-primary-fg-focus);

  --theme-cell-input-bg: var(--theme-secondary-bg);
  --theme-cell-input-fg: var(--theme-app-fg);

  --theme-cell-output-bg: var(--theme-app-bg);
  --theme-cell-output-fg: var(--theme-primary-fg);

  --theme-cell-creator-bg: var(--theme-app-bg);

  --theme-cell-creator-fg: var(--theme-secondary-fg);
  --theme-cell-creator-fg-hover: var(--theme-secondary-fg-hover);
  --theme-cell-creator-fg-focus: var(--theme-secondary-fg-focus);
  
  --theme-error-fg: hsl(0, 100%, 95%);
  --theme-error-bg: hsl(0, 100%, 30%);

  --theme-pager-bg: #111;

  --cm-background: #111;
  --cm-color: #ecf0f1;

  --cm-gutter-bg: #777;

  --cm-comment: #aaa;
  --cm-keyword: hsl(204deg, 70%, 60%);
  --cm-string: #f1c40f;
  --cm-builtin: hsl(168deg, 76%, 45%);
  --cm-special: #1abc9c;
  --cm-variable: #ecf0f1;
  --cm-number: #2ecc71;
  --cm-meta: #95a5a6;
  --cm-link: #2ecc71;
  --cm-operator: #ecf0f1;
  --cm-def: #ecf0f1;

  --cm-activeline-bg: #e8f2ff;
  --cm-matchingbracket-outline: grey;
  --cm-matchingbracket-color: white;

  --cm-hint-color: var(--theme-app-fg);
  --cm-hint-color-active: var(--cm-color);
  --cm-hint-bg: var(--theme-app-bg);
  --cm-hint-bg-active: #111;

  --status-bar: #111;
  --theme-toolbar-background: #4E4E4E;
  --theme-toolbar-color: #FAFAFA;
  --theme-sidebar-background: #3A3A3A;
  --theme-sidebar-color: #FAFAFA;
  --theme-cell-menu-background: #2F2F2F;
}
`;

const LightTheme = createGlobalStyle`
:root {
  --theme-app-bg: white;
  --theme-app-fg: var(--nt-color-midnight);
  --theme-app-border: var(--nt-color-grey-light);

  --theme-primary-bg: var(--nt-color-grey-lightest);
  --theme-primary-bg-hover: var(--nt-color-grey-lighter);
  --theme-primary-bg-focus: var(--nt-color-grey-light);

  --theme-primary-fg: var(--nt-color-midnight-light);
  --theme-primary-fg-hover: var(--nt-color-midnight);
  --theme-primary-fg-focus: var(--theme-app-fg);

  --theme-secondary-bg: var(--theme-primary-bg);
  --theme-secondary-bg-hover: var(--theme-primary-bg-hover);
  --theme-secondary-bg-focus: var(--theme-primary-bg-focus);

  --theme-secondary-fg: var(--nt-color-midnight-lighter);
  --theme-secondary-fg-hover: var(--nt-color-midnight-light);
  --theme-secondary-fg-focus: var(--theme-primary-fg);

  --theme-primary-shadow-hover: 1px  1px 3px rgba(0, 0, 0, 0.12),
    -1px -1px 3px rgba(0, 0, 0, 0.12);
  --theme-primary-shadow-focus: 3px  3px 9px rgba(0, 0, 0, 0.12),
    -3px -3px 9px rgba(0, 0, 0, 0.12);

  --theme-title-bar-bg: var(--theme-primary-bg-hover);

  --theme-menu-bg: var(--theme-primary-bg);
  --theme-menu-bg-hover: var(--theme-primary-bg-hover);
  --theme-menu-bg-focus: var(--theme-primary-bg-focus);
  --theme-menu-shadow: var(--theme-primary-shadow-hover);

  --theme-menu-fg: var(--theme-app-fg);
  --theme-menu-fg-hover: var(--theme-app-fg);
  --theme-menu-fg-focus: var(--theme-app-fg);

  --theme-cell-bg: var(--theme-app-bg);
  --theme-cell-border: #e2e5e7;
  --theme-cell-gutter: var(--nt-color-grey-lighter);
  --theme-cell-gutter-color: unset;
  --theme-cell-shadow-hover: var(--theme-primary-shadow-hover);
  --theme-cell-shadow-focus: var(--theme-primary-shadow-focus);

  --theme-cell-prompt-bg: var(--theme-primary-bg);
  --theme-cell-prompt-bg-hover: var(--theme-primary-bg-hover);
  --theme-cell-prompt-bg-focus: var(--theme-primary-bg-focus);

  --theme-cell-prompt-fg: var(--theme-secondary-fg);
  --theme-cell-prompt-fg-hover: var(--theme-secondary-fg-hover);
  --theme-cell-prompt-fg-focus: var(--theme-secondary-fg-focus);

  --theme-cell-toolbar-bg: var(--theme-primary-bg);
  --theme-cell-toolbar-bg-hover: var(--theme-primary-bg-hover);
  --theme-cell-toolbar-bg-focus: var(--theme-primary-bg-focus);

  --theme-cell-toolbar-fg: var(--theme-secondary-fg);
  --theme-cell-toolbar-fg-hover: var(--theme-secondary-fg-hover);
  --theme-cell-toolbar-fg-focus: var(--theme-secondary-fg-focus);

  --theme-cell-menu-bg: var(--theme-primary-bg);
  --theme-cell-menu-bg-hover: var(--theme-primary-bg-hover);
  --theme-cell-menu-bg-focus: var(--theme-primary-bg-focus);

  --theme-cell-menu-fg: var(--theme-primary-fg);
  --theme-cell-menu-fg-hover: var(--theme-primary-fg-hover);
  --theme-cell-menu-fg-focus: var(--theme-primary-fg-focus);

  --theme-cell-input-bg: var(--theme-secondary-bg);
  --theme-cell-input-fg: var(--theme-app-fg);

  --theme-cell-output-bg: var(--theme-app-bg);
  --theme-cell-output-fg: var(--theme-primary-fg);

  --theme-cell-creator-bg: var(--theme-app-bg);

  --theme-cell-creator-fg: var(--theme-secondary-fg);
  --theme-cell-creator-fg-hover: var(--theme-secondary-fg-hover);
  --theme-cell-creator-fg-focus: var(--theme-secondary-fg-focus);

  --theme-error-fg: hsl(0, 100%, 30%);
  --theme-error-bg: hsl(0, 100%, 95%);
  
  --theme-pager-bg: #fafafa;

  --cm-background: #fff;
  --cm-color: black;

  --cm-gutter-bg: white;

  --cm-comment: hsl(30deg, 29%, 30%);
  --cm-keyword: blue;
  --cm-string: hsl(0deg, 67%, 35%);
  --cm-builtin: hsl(180deg, 100%, 18%);
  --cm-special: hsl(190deg, 100%, 20%);
  --cm-variable: black;
  --cm-number: hsl(120deg, 54%, 25%);
  --cm-meta: #555;
  --cm-link: hsl(120deg, 54%, 25%);
  --cm-operator: black;
  --cm-def: black;

  --cm-activeline-bg: #e8f2ff;
  --cm-matchingbracket-outline: grey;
  --cm-matchingbracket-color: black;

  --cm-hint-color: var(--cm-color);
  --cm-hint-color-active: var(--cm-color);
  --cm-hint-bg: var(--theme-app-bg);
  --cm-hint-bg-active: #abd1ff;

  --status-bar: #eeedee;
  --theme-toolbar-background: #fff;
  --theme-toolbar-color: #757f88;
  --theme-sidebar-background: #e2e5e7;
  --theme-sidebar-color: #333;
  --theme-cell-menu-background: #29313a;
}
`;

export { DarkTheme, LightTheme };
