/// <reference types="react" />
import { AbstractPureComponent2, HTMLDivProps, IIntentProps, Intent, IProps, MaybeElement } from "../../common";
import { IconName } from "../icon/icon";
/** This component also supports the full range of HTML `<div>` props. */
export interface ICalloutProps extends IIntentProps, IProps, HTMLDivProps {
    /**
     * Name of a Blueprint UI icon (or an icon element) to render on the left side.
     *
     * If this prop is omitted or `undefined`, the `intent` prop will determine a default icon.
     * If this prop is explicitly `null`, no icon will be displayed (regardless of `intent`).
     */
    icon?: IconName | MaybeElement;
    /**
     * Visual intent color to apply to background, title, and icon.
     *
     * Defining this prop also applies a default icon, if the `icon` prop is omitted.
     */
    intent?: Intent;
    /**
     * String content of optional title element.
     *
     * Due to a conflict with the HTML prop types, to provide JSX content simply
     * pass `<H4>JSX title content</H4>` as first `children` element instead of
     * using this prop (note uppercase tag name to use the Blueprint Heading
     * component).
     */
    title?: string;
}
export declare class Callout extends AbstractPureComponent2<ICalloutProps> {
    static displayName: string;
    render(): JSX.Element;
    private getIconName;
}
