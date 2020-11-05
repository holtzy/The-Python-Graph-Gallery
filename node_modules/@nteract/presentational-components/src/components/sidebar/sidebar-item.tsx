import React, { HTMLAttributes } from "react";
import classnames from "classnames";

import { File, Folder, Chevron } from "../icons";

export type DirectoryListItem = {
  name: string;
  subItems?: DirectoryListItem[];
};

type Base = HTMLAttributes<HTMLLIElement> & DirectoryListItem;

export interface SidebarItemProps extends Base {
  onSelect?: () => void;
  defaultIsExpanded?: boolean;
  props?: HTMLAttributes<HTMLUListElement>;
  isOpen?: boolean;
  level: number;
}

export function getSidebarItemsFromData(
  data: DirectoryListItem[],
  isOpen?: boolean,
  level: number = 0
) {
  return data.map(({ name, subItems }) => (
    <SidebarItem
      key={name}
      level={level}
      defaultIsExpanded={isOpen}
      className={classnames("sidebar-item", {
        "sidebar-item-file": !subItems,
      })}
      name={name}
      subItems={subItems}
    />
  ));
}

const openStates = {
  unset: undefined,
  open: true,
  closed: false,
};

interface ListWrapperProps extends HTMLAttributes<HTMLUListElement> {
  level?: number;
}

interface ListWrapperProps extends HTMLAttributes<HTMLUListElement> {
  level?: number;
}

class ListWrapper extends React.PureComponent<ListWrapperProps, any> {
  listEl?: React.RefObject<HTMLUListElement> = React.createRef();

  componentDidMount() {
    const { level } = this.props;
    if (this.listEl && this.listEl.current) {
      this.listEl.current.style.setProperty(
        "--padding",
        `${((level || 0) + 1) * 16}px`
      );
    }
  }

  render() {
    return (
      <ul ref={this.listEl} {...this.props}>
        {this.props.children}
      </ul>
    );
  }
}

interface SidebarItemState {
  isExpanded?: boolean;
}

export class SidebarItem extends React.PureComponent<
  SidebarItemProps,
  SidebarItemState
> {
  state: SidebarItemState = { isExpanded: openStates.unset };

  handleToggleExpanded = (e: React.MouseEvent) => {
    const { onSelect } = this.props;
    e.preventDefault();
    this.setState((previous) => ({ isExpanded: !previous.isExpanded }));

    if (onSelect) {
      onSelect();
    }
  };

  render() {
    const { subItems, name, defaultIsExpanded = false, level } = this.props;

    const isFolder = subItems !== undefined;
    const image = isFolder ? <Folder /> : <File />;
    const isOpen = this.state.isExpanded ?? defaultIsExpanded;

    const folderImage = isFolder && (
      <Chevron className={classnames("chevron", { rotate: !isOpen })} />
    );

    return (
      <li
        {...this.props}
        className={classnames("sidebar-item", {
          "sidebar-item-file": !subItems,
        })}
      >
        <button
          className="sidebar-item-button"
          onClick={this.handleToggleExpanded}
        >
          {folderImage}
          {image} {name}
        </button>
        {subItems && subItems.length > 0 && (
          <ListWrapper
            level={level}
            className={classnames("sidebar-item-group", {
              "sidebar-item-group-expanded":
                this.state.isExpanded ?? defaultIsExpanded,
            })}
          >
            {getSidebarItemsFromData(subItems, false, level + 1)}
          </ListWrapper>
        )}
      </li>
    );
  }
}
