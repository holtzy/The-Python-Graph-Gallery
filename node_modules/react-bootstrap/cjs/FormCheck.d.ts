import React from 'react';
import FormCheckInput from './FormCheckInput';
import FormCheckLabel from './FormCheckLabel';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export declare type FormCheckType = 'checkbox' | 'radio' | 'switch';
export interface FormCheckProps extends BsPrefixPropsWithChildren, React.InputHTMLAttributes<HTMLInputElement> {
    bsCustomPrefix?: string;
    inline?: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    custom?: boolean;
    type?: FormCheckType;
    isValid?: boolean;
    isInvalid?: boolean;
    feedbackTooltip?: boolean;
    feedback?: React.ReactNode;
}
declare type FormCheck = BsPrefixRefForwardingComponent<'input', FormCheckProps> & {
    Input: typeof FormCheckInput;
    Label: typeof FormCheckLabel;
};
declare const FormCheck: FormCheck;
export default FormCheck;
