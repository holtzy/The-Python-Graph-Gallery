import React from 'react';
import FormCheck from './FormCheck';
import FormFile from './FormFile';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormText from './FormText';
import Switch from './Switch';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
declare const FormRow: BsPrefixRefForwardingComponent<"div", unknown>;
export interface FormProps extends React.HTMLAttributes<HTMLFormElement>, BsPrefixProps {
    inline?: boolean;
    validated?: boolean;
}
declare type Form = BsPrefixRefForwardingComponent<'form', FormProps> & {
    Row: typeof FormRow;
    Group: typeof FormGroup;
    Control: typeof FormControl;
    Check: typeof FormCheck;
    File: typeof FormFile;
    Switch: typeof Switch;
    Label: typeof FormLabel;
    Text: typeof FormText;
};
declare const FormImpl: Form;
export default FormImpl;
