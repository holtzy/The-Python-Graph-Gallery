import * as React from "react";

import styled from "styled-components";

interface PromptProps {
  /**
   * Typically used to show what execution count the user is on. When working at
   * the `IPython` or `jupyter console` for example, it's the number between the
   * `[ ]`:
   *
   * ```
   * In [1]: 2 + 2
   * Out[1]: 4
   *
   * In [2]: "woohoo"
   * Out[2]: 'woohoo'
   * ```
   *
   */
  counter?: number | null;
  /**
   * Show that execution is currently happening related to this prompt
   */
  running?: boolean;
  /**
   * Show that execution is queued up
   */
  queued?: boolean;
  /**
   * Create a prompt without the `[]`. Used with markdown cells.
   */
  blank?: boolean;

  className?: string;
}

/**
 * Generate what text goes inside the prompt based on the props to the prompt
 */
function promptText(props: PromptProps): string {
  if (props.running) {
    return "[*]";
  }
  if (props.queued) {
    return "[…]";
  }
  if (typeof props.counter === "number") {
    return `[${props.counter}]`;
  }
  if (props.blank) {
    return "";
  }
  return "[ ]";
}

const BarePrompt = (props: PromptProps) => {
  return <div className={props.className}>{promptText(props)}</div>;
};

export const Prompt = styled(BarePrompt)`
  font-family: monospace;
  font-size: 12px;
  line-height: 22px;
  /* For creating a buffer area for <Prompt blank /> */
  min-height: 22px;

  padding: 9px 0;

  text-align: center;

  color: var(--theme-cell-prompt-fg, black);
  background-color: var(--theme-cell-prompt-bg, #fafafa);
`;

Prompt.defaultProps = {
  counter: null,
  running: false,
  queued: false,
  blank: false,
};
Prompt.displayName = "Prompt";

export const PromptBuffer = styled(Prompt)``;
PromptBuffer.defaultProps = {
  blank: true,
};

export default Prompt;
