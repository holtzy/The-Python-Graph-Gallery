import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface FormTextProps extends BsPrefixProps {
    muted?: boolean;
}
declare type FormText = BsPrefixRefForwardingComponent<'small', FormTextProps>;
declare const FormText: FormText;
export default FormText;
