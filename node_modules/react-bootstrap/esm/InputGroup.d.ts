/// <reference types="react" />
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
declare const InputGroupAppend: BsPrefixRefForwardingComponent<"div", unknown>;
declare const InputGroupPrepend: BsPrefixRefForwardingComponent<"div", unknown>;
declare const InputGroupText: BsPrefixRefForwardingComponent<"span", unknown>;
declare const InputGroupCheckbox: (props: any) => JSX.Element;
declare const InputGroupRadio: (props: any) => JSX.Element;
export interface InputGroupProps extends BsPrefixPropsWithChildren {
    size?: 'sm' | 'lg';
    hasValidation?: boolean;
}
declare type InputGroupExtras = {
    Append: typeof InputGroupAppend;
    Prepend: typeof InputGroupPrepend;
    Text: typeof InputGroupText;
    Checkbox: typeof InputGroupCheckbox;
    Radio: typeof InputGroupRadio;
};
declare type InputGroup = BsPrefixRefForwardingComponent<'div', InputGroupProps>;
/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
declare const InputGroup: InputGroup;
declare const InputGroupWithExtras: InputGroup & InputGroupExtras;
export default InputGroupWithExtras;
