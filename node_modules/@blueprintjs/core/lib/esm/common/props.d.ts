import * as React from "react";
import { IconName } from "@blueprintjs/icons";
import { Intent } from "./intent";
import { IRef } from "./refs";
export declare const DISPLAYNAME_PREFIX = "Blueprint3";
/**
 * Alias for all valid HTML props for `<div>` element.
 * Does not include React's `ref` or `key`.
 */
export declare type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
/**
 * Alias for all valid HTML props for `<input>` element.
 * Does not include React's `ref` or `key`.
 */
export declare type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
/**
 * Alias for a `JSX.Element` or a value that renders nothing.
 *
 * In React, `boolean`, `null`, and `undefined` do not produce any output.
 */
export declare type MaybeElement = JSX.Element | false | null | undefined;
/**
 * A shared base interface for all Blueprint component props.
 */
export interface IProps {
    /** A space-delimited list of class names to pass along to a child element. */
    className?: string;
}
export interface IIntentProps {
    /** Visual intent color to apply to element. */
    intent?: Intent;
}
/**
 * Interface for a clickable action, such as a button or menu item.
 * These props can be spready directly to a `<Button>` or `<MenuItem>` element.
 */
export interface IActionProps extends IIntentProps, IProps {
    /** Whether this action is non-interactive. */
    disabled?: boolean;
    /** Name of a Blueprint UI icon (or an icon element) to render before the text. */
    icon?: IconName | MaybeElement;
    /** Click event handler. */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /** Action text. Can be any single React renderable. */
    text?: React.ReactNode;
}
/** Interface for a link, with support for customizing target window. */
export interface ILinkProps {
    /** Link URL. */
    href?: string;
    /** Link target attribute. Use `"_blank"` to open in a new window. */
    target?: string;
}
/** Interface for a controlled input. */
export interface IControlledProps {
    /** Initial value of the input, for uncontrolled usage. */
    defaultValue?: string;
    /** Change event handler. Use `event.target.value` for new value. */
    onChange?: React.FormEventHandler<HTMLElement>;
    /** Form value of the input, for controlled usage. */
    value?: string;
}
export interface IElementRefProps<E extends HTMLElement> {
    /** A ref handler or a ref object that receives the native HTML element rendered by this component. */
    elementRef?: IRef<E>;
}
/**
 * An interface for an option in a list, such as in a `<select>` or `RadioGroup`.
 * These props can be spread directly to an `<option>` or `<Radio>` element.
 */
export interface IOptionProps extends IProps {
    /** Whether this option is non-interactive. */
    disabled?: boolean;
    /** Label text for this option. If omitted, `value` is used as the label. */
    label?: string;
    /** Value of this option. */
    value: string | number;
}
/**
 * Typically applied to HTMLElements to filter out disallowed props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the denylist (only appropriate for HTMLElements).
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default denylist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and denylist together.
 */
export declare function removeNonHTMLProps(props: {
    [key: string]: any;
}, invalidProps?: string[], shouldMerge?: boolean): {
    [key: string]: any;
};
