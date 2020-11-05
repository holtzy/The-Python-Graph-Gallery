import React, { HTMLAttributes, ReactNode, ReactNodeArray } from "react";
import { Commands } from "../icons";
import { KeyTag } from "./key-tag";

export interface Props
  extends HTMLAttributes<HTMLDivElement & HTMLInputElement> {
  shortCut: string[];
  children: ReactNode | ReactNodeArray;
  isVisible?: boolean;
  onClose: () => void;
  onChangeFilter: (value: string) => void;
}

interface State {
  selectedItemIndex: number;
}

export class CommandPalette extends React.PureComponent<Props, State> {
  state: State = {
    selectedItemIndex: 0,
  };

  items: React.RefObject<HTMLDivElement> = React.createRef();

  handleKeys = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      this.setState((previous) => {
        const { children } = this.props;
        const childLength = Array.isArray(children) ? children.length : 1;
        const nextIndex =
          previous.selectedItemIndex + 1 > childLength
            ? 1
            : previous.selectedItemIndex + 1;

        return { selectedItemIndex: nextIndex };
      });
    }

    if (event.key === "ArrowUp") {
      this.setState((previous) => {
        const { children } = this.props;
        const childLength = Array.isArray(children) ? children.length : 1;
        const nextIndex =
          previous.selectedItemIndex - 1 === 0
            ? childLength
            : previous.selectedItemIndex - 1;

        return { selectedItemIndex: nextIndex };
      });
    }
  };

  componentDidMount() {
    const element: any = document.querySelector(".command-palette input");
    addEventListener("keydown", this.handleKeys);
    element.focus();
  }

  componentWillUnmount() {
    removeEventListener("keydown", this.handleKeys);
  }

  handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChangeFilter(e.target.value);
  };

  handleInputFocus = () => {
    this.setState({ selectedItemIndex: 0 });
  };

  componentDidUpdate() {
    if (this.state.selectedItemIndex !== 0) {
      const item: any =
        this.items.current &&
        this.items.current.querySelector(
          `button:nth-child(${this.state.selectedItemIndex})`
        );

      if (item) {
        item.focus();
      }
    }
  }

  render() {
    const { isVisible, onClose, shortCut, children } = this.props;

    const mainClassName = isVisible
      ? "command-palette visible"
      : "command-palette";
    return (
      <React.Fragment>
        <div
          className="command-palette-overlay"
          onClick={onClose}
          role="button"
          aria-label="Close command palette"
        />
        <div className={mainClassName} tabIndex={-1}>
          <div className="command-palette-row">
            <span className="command-palette-heading">
              <Commands muted />
              nteract Command
            </span>
            <KeyTag>
              Hide Menu Bar
              {shortCut.map((shortcutKey) => (
                <KeyTag mini key={shortcutKey}>
                  {shortcutKey}
                </KeyTag>
              ))}
            </KeyTag>
          </div>
          <div className="command-palette-input-row">
            <label htmlFor="commandFilter">Filter commands</label>
            <input
              onFocus={this.handleInputFocus}
              onChange={this.handleChangeFilter}
              type="text"
              name="commandFilter"
              id="commandFilter"
              placeholder="Filter commands"
            />
          </div>
          <div className="items" ref={this.items}>
            {children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
