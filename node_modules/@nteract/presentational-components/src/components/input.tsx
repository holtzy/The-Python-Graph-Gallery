import * as React from "react";

import styled from "styled-components";
import { Prompt } from "./prompt";
import { Source } from "./source";

interface InputProps {
  children: React.ReactNode;
  /**
   * Whether or not to render the children.
   */
  hidden?: boolean;
  className?: string;
}

class BareInput extends React.Component<InputProps> {
  static defaultProps = {
    children: null,
    hidden: false
  };

  render() {
    if (this.props.hidden) {
      return null;
    }

    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

export const Input = styled(BareInput)`
  & {
    display: flex;
    flex-direction: row;
  }

  &.invisible {
    height: 34px;
  }

  & ${Prompt} {
    flex: 0 0 auto;
  }

  & ${Source} {
    flex: 1 1 auto;
    overflow: visible;
    background-color: var(--theme-cell-input-bg, #fafafa);
  }
`;

Input.displayName = "Input";

export default Input;
