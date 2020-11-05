// @ts-ignore
import parseColor from "color-parse";
// @ts-ignore
import colorSpace from "color-space";
// @ts-ignore
import css from "css";
import { mount } from "enzyme";
import * as fs from "fs";
import * as React from "react";

import { DarkTheme, LightTheme } from "../src";

type Level = "fg" | "bg";

interface Rule {
  match: RegExp;
  build: (matches: RegExpMatchArray) => {
    key: string;
    extends?: string;
    set: Level;
  };
}

interface Mapping<T> {
  [key: string]: T;
}

interface ColorPair {
  fg: string;
  bg: string;
}

type ColorPairs = Mapping<Partial<ColorPair>>;

interface Contrast {
  fg: string;
  bg: string;
  contrast: number;
}

const GLOBALS_FILE = "packages/styles/global-variables.css";
const ISNT_WCAG_AAA = ({ contrast }: Contrast) => contrast < 7;

// Rules to build foreground/background pairs from CSS properties
const RULES: Rule[] = [
  {
    // fg: --theme-...-fg(-...)
    // bg: --theme-...-bg(-...)
    // nodes with pseudoclasses inherit missing values from those without
    match: /^--theme-(.*?)-([fb]g)(-(.*)|)$/,
    build: ([_full, name, level, _suffix, pseudo]) =>
      !pseudo
        ? { key: name, set: level as Level }
        : { key: `${name}:${pseudo}`, extends: name, set: level as Level },
  },
  {
    // fg: --cm-...
    // bg: --cm-background
    match: /^--cm-([^-]*?)$/,
    build: ([_full, name]) =>
      (name === "background")
        ? { key: "code (background)", set: "bg" }
        : { key: `code (${name})`, extends: "code (background)", set: "fg" },
  }
];

function contrastOf(a: number, b: number): number {
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
}

function luminosityOf(value: string): number {
  const color = parseColor(value);
  const rgb = colorSpace[color.space].rgb(color.values);
  const rgbS = rgb
    .map((x: number) => x / 255)
    .map((x: number) =>
      x <= 0.03928
        ? x / 12.92
        : Math.pow((x + 0.055) / 1.055, 2.4));

  return 0.2126 * rgbS[0] + 0.7152 * rgbS[1] + 0.0722 * rgbS[2];
}

function resolveVars(value: string, lookup: (key: string) => string): string {
  const match = value.match(/^var\(\s*(.*?)\s*\)$/);

  return match
    ? resolveVars(lookup(match[1]), lookup)
    : value;
}

function buildColorPairs(keys: string[], rules: Rule[]): ColorPairs {
  const index: ColorPairs = {};

  keys.forEach(key =>
    rules.forEach(indexer => {
      const matches = key.match(indexer.match);

      if (matches) {
        const record = indexer.build(matches);

        index[record.key] = index[record.key] || {};
        index[record.key][record.set] = `var(${key})`;

        if (record.extends) {
          index[record.extends] = index[record.extends] || {};
          Object.setPrototypeOf(index[record.key], index[record.extends]);
        }
      }
    })
  );

  return index;
}

function parseSingleRootSelector(style: string): Mapping<string> {
  const ast = css.parse(style).stylesheet;

  expect(ast.parsingErrors).toEqual([]);
  expect(ast.rules.length).toEqual(1);
  expect(ast.rules[0].selectors).toEqual([":root"]);

  ast.rules[0].declarations.forEach((decl: any) => {
    expect(decl.type).toEqual("declaration");
  });

  const declarations: Mapping<string> = {};

  ast.rules[0].declarations.forEach((decl: any) => {
    declarations[decl.property] = decl.value;
  });

  return declarations;
}

function contrastsInTheme(element: JSX.Element): Contrast[] {
  const globalCSS = fs.readFileSync(GLOBALS_FILE).toString();
  const themeCSS = (mount(element).state() as any).globalStyle.rules[0];

  const globals = parseSingleRootSelector(globalCSS);
  const theme = parseSingleRootSelector(themeCSS);
  const lookup = (value: string) => theme[value] || globals[value];

  const pairs = buildColorPairs(Object.keys(theme), RULES);

  return Object
    .values(pairs)
    .filter(({ fg }) => fg !== undefined) // Assume not used for text
    .map(({ fg, bg }) => ({ fg: fg!, bg: bg || "white" })) // Assume default
    .map(({ fg, bg }): Contrast => ({
      fg, bg,
      contrast: contrastOf(
        luminosityOf(resolveVars(fg, lookup)),
        luminosityOf(resolveVars(bg, lookup)),
      ),
    }));
}

describe("LightTheme", () => {
  test.skip("contrast meets WCAG AAA", () => {
    const failing = contrastsInTheme(<LightTheme/>).filter(ISNT_WCAG_AAA);
    expect(failing).toEqual([]);
  });
});

describe("DarkTheme", () => {
  test.skip("contrast meets WCAG AAA", () => {
    const failing = contrastsInTheme(<DarkTheme/>).filter(ISNT_WCAG_AAA);
    expect(failing).toEqual([]);
  });
});
