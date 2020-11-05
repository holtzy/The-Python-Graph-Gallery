import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
declare type FormCheckInputType = 'checkbox' | 'radio';
export interface FormCheckInputProps extends BsPrefixProps {
    id?: string;
    bsCustomPrefix?: string;
    type?: FormCheckInputType;
    isStatic?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
}
declare type FormCheckInput = BsPrefixRefForwardingComponent<'input', FormCheckInputProps>;
declare const FormCheckInput: FormCheckInput;
export default FormCheckInput;
