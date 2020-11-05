import React, { FC, HTMLAttributes } from "react";
import classnames from "classnames";
import { DirectoryListItem, getSidebarItemsFromData } from "./sidebar-item";
import { Resizable } from "re-resizable";
export interface Props extends HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  subItems?: DirectoryListItem[];
  children?: React.ReactNode;
}

export const Sidebar: FC<Props> = ({ isVisible, subItems, children }) => (
  <Resizable
    className={classnames("sidebar", { "sidebar-visible": isVisible })}
    defaultSize={{ width: 200, height: "100vh" }}
  >
    <nav>
      <ul className="sidebar-item-group sidebar-item-group-expanded">
        {subItems && getSidebarItemsFromData(subItems, true, 0)}
        {children}
      </ul>
    </nav>
  </Resizable>
);
