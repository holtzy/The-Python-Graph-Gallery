import React from 'react';
import { BsPrefixProps } from './helpers';
export interface FormCheckLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, BsPrefixProps {
    bsCustomPrefix?: string;
}
declare const FormCheckLabel: React.ForwardRefExoticComponent<FormCheckLabelProps & React.RefAttributes<HTMLLabelElement>>;
export default FormCheckLabel;
