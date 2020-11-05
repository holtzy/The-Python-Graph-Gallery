import { ColProps } from './Col';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
interface FormLabelBaseProps extends BsPrefixPropsWithChildren {
    htmlFor?: string;
    srOnly?: boolean;
}
export interface FormLabelOwnProps extends FormLabelBaseProps {
    column?: false;
}
export interface FormLabelWithColProps extends FormLabelBaseProps, ColProps {
    column: true | 'sm' | 'lg';
}
export declare type FormLabelProps = FormLabelWithColProps | FormLabelOwnProps;
declare type FormLabel = BsPrefixRefForwardingComponent<'label', FormLabelProps>;
declare const FormLabel: FormLabel;
export default FormLabel;
