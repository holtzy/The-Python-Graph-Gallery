import * as React from "react";
import { IActionProps, ILinkProps } from "../../common/props";
export interface IBreadcrumbProps extends IActionProps, ILinkProps {
    /** Whether this breadcrumb is the current breadcrumb. */
    current?: boolean;
}
export declare const Breadcrumb: React.FunctionComponent<IBreadcrumbProps>;
