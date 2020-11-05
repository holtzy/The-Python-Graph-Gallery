import { BsCustomPrefixProps, BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface FormFileLabelProps extends BsPrefixProps, BsCustomPrefixProps {
    htmlFor?: string;
}
declare type FormFileLabel = BsPrefixRefForwardingComponent<'label', FormFileLabelProps>;
declare const FormFileLabel: FormFileLabel;
export default FormFileLabel;
