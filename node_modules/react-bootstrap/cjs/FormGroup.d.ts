import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface FormGroupProps extends BsPrefixPropsWithChildren {
    controlId?: string;
}
declare type FormGroup = BsPrefixRefForwardingComponent<'div', FormGroupProps>;
declare const FormGroup: FormGroup;
export default FormGroup;
