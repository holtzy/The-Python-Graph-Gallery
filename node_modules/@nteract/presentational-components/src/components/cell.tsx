import * as React from "react";

import styled, { StyledComponent } from "styled-components";

import { Prompt } from "./prompt";

interface CellProps {
  /**
   * Indicates if a cell is selected
   */
  isSelected?: boolean;
  /**
   * Indicates if hovering over a cell
   */
  _hovered?: boolean;
  /**
   * Style children when a cell is selected or hovered over
   */
  children?: React.ReactNode;
}

const shadowLevels = {
  FLAT: "none",
  HOVERED: `var(
    --theme-cell-shadow-hover,
    1px 1px 3px rgba(0, 0, 0, 0.12),
    -1px -1px 3px rgba(0, 0, 0, 0.12)
  )`,
  SELECTED: `var(
    --theme-cell-shadow-focus,
    3px 3px 9px rgba(0, 0, 0, 0.12),
    -3px -3px 9px rgba(0, 0, 0, 0.12)
  )`
};

function cellShadowLevel(props: CellProps): string {
  if (props.isSelected) {
    return shadowLevels.SELECTED;
  }
  if (props._hovered) {
    return shadowLevels.HOVERED;
  }

  return shadowLevels.FLAT;
}

export const Cell = styled.div.attrs<CellProps>(props => ({
  className: props.isSelected ? "selected" : "",
  style: {
    boxShadow: cellShadowLevel(props)
  }
}))`
  & {
    position: relative;
    background: var(--theme-cell-bg, white);
    transition: all 0.1s ease-in-out;
  }

  /* The box shadow for hovered should only apply when not already selected */
  &:hover:not(.selected) {
    box-shadow: ${shadowLevels.HOVERED};
  }

  /*
  Our cells conditionally style the prompt contained within based on if the cell is
  selected or hovered. To do this with styled-components we use their method of
  referring to other components:

  https://www.styled-components.com/docs/advanced#referring-to-other-components

  */
  & ${Prompt} {
    /* We change nothing when the cell is not selected, focused, or hovered */
  }
  &.selected ${Prompt} {
    background-color: var(--theme-cell-prompt-bg-focus, hsl(0, 0%, 90%));
    color: var(--theme-cell-prompt-fg-focus, hsl(0, 0%, 51%));
  }

  &:hover:not(.selected) ${Prompt}, &:active:not(.selected) ${Prompt} {
    background-color: var(--theme-cell-prompt-bg-hover, hsl(0, 0%, 94%));
    color: var(--theme-cell-prompt-fg-hover, hsl(0, 0%, 15%));
  }

  &:focus ${Prompt} {
    background-color: var(--theme-cell-prompt-bg-focus, hsl(0, 0%, 90%));
    color: var(--theme-cell-prompt-fg-focus, hsl(0, 0%, 51%));
  }
  @media print{
    /* make sure all cells look the same in print regarless of focus */
    & ${Prompt}, &.selected ${Prompt}, &:focus ${Prompt}, &:hover:not(.selected) ${Prompt} {
      background-color: var(--theme-cell-prompt-bg, white);
      color: var(--theme-cell-prompt-fg, black);
    }
  }
` as StyledComponent<"div", any, CellProps, never>;

Cell.displayName = "Cell";

Cell.defaultProps = {
  isSelected: false,
  _hovered: false,
  children: null
};

export default Cell;
