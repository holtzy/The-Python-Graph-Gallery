import { BsCustomPrefixProps, BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface FormFileInputProps extends BsPrefixProps, BsCustomPrefixProps {
    id?: string;
    isValid?: boolean;
    isInvalid?: boolean;
    lang?: string;
}
declare type FormFileInput = BsPrefixRefForwardingComponent<'input', FormFileInputProps>;
declare const FormFileInput: FormFileInput;
export default FormFileInput;
