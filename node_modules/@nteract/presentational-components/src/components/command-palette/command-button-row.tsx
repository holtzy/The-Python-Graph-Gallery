import React, { HTMLAttributes, FC } from "react";
import { KeyTag } from "./key-tag";

interface CommandButtonRowProps extends HTMLAttributes<HTMLButtonElement> {
  shortCut: string[];
}

export const CommandButtonRow: FC<CommandButtonRowProps> = ({
  children,
  shortCut,
  ...props
}) => {
  return (
    <button type="button" {...props} className="command-palette-row">
      <span className="command-name">{children}</span>
      <span>
        {shortCut &&
          shortCut.map((shortcut) => (
            <KeyTag mini key={shortcut}>
              {shortcut}
            </KeyTag>
          ))}
      </span>
    </button>
  );
};
