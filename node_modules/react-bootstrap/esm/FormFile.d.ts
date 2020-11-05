import React from 'react';
import FormFileInput from './FormFileInput';
import FormFileLabel from './FormFileLabel';
import { BsCustomPrefixProps, BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface FormFileProps extends BsPrefixPropsWithChildren, BsCustomPrefixProps, Pick<React.HTMLAttributes<HTMLElement>, 'style'> {
    inputAs?: React.ElementType;
    id?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    custom?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    feedback?: React.ReactNode;
    feedbackTooltip?: boolean;
    lang?: string;
    'data-browse'?: any;
}
declare type FormFile = BsPrefixRefForwardingComponent<'input', FormFileProps> & {
    Input: typeof FormFileInput;
    Label: typeof FormFileLabel;
};
declare const FormFile: FormFile;
export default FormFile;
