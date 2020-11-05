import React from 'react';
import Feedback from './Feedback';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
declare type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export interface FormControlProps extends BsPrefixProps {
    bsCustomPrefix?: string;
    htmlSize?: number;
    size?: 'sm' | 'lg';
    plaintext?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    value?: string | string[] | number;
    onChange?: React.ChangeEventHandler<FormControlElement>;
    custom?: boolean;
    type?: string;
    id?: string;
    isValid?: boolean;
    isInvalid?: boolean;
}
declare const _default: BsPrefixRefForwardingComponent<"input", FormControlProps> & {
    Feedback: Feedback;
};
export default _default;
