import * as React from "react";

import styled from "styled-components";
import { Outputs } from "./outputs";
/**
 * Description
 */

interface PagersProps {
  children?: React.ReactNode;
  hidden?: boolean;
}

export const Pagers = styled(Outputs)`
  background-color: var(--theme-pager-bg, #fafafa);
`;

Pagers.displayName = "Pagers";

export default Pagers;
