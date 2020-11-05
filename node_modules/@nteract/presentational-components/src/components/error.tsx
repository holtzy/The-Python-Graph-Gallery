import * as React from "react";

import styled from "styled-components";

interface ErrorProps {
  className?: string;
  error?: Error;
}

export const Error = (props: ErrorProps) =>
  props.error
    ?
      <p className={props.className}>
        <b>{props.error.name ?? "Error"}:</b> {props.error.message}
      </p>
    : null;

const StyledError = styled(Error)`
  background: var(--theme-error-bg);
  color: var(--theme-error-fg);
  border: 1px solid;
  padding: 0.5ex;
`;

export default StyledError;
