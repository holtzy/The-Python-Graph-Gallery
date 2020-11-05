import * as React from "react";
import styled from "styled-components";

export const Cells = styled.div`
  & > * {
    margin: 20px 0;
  }

  & {
    font-family: "Source Sans Pro", Helvetica Neue, Helvetica, sans-serif;
    font-size: 16px;
    background-color: var(--theme-app-bg);
    color: var(--theme-app-fg);

    padding-bottom: 10px;
  }
`;

Cells.displayName = "Cells";

export default Cells;
