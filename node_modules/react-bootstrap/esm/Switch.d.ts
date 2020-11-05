import FormCheck, { FormCheckProps } from './FormCheck';
import { BsPrefixRefForwardingComponent } from './helpers';
declare type SwitchProps = Omit<FormCheckProps, 'type'>;
declare type Switch = BsPrefixRefForwardingComponent<FormCheck, SwitchProps> & {
    Input: typeof FormCheck.Input;
    Label: typeof FormCheck.Label;
};
declare const Switch: Switch;
export default Switch;
