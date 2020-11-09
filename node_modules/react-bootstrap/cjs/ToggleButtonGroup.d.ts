import { ButtonGroupProps } from './ButtonGroup';
import ToggleButton from './ToggleButton';
import { BsPrefixRefForwardingComponent } from './helpers';
export interface ToggleButtonRadioProps<T> extends Omit<ButtonGroupProps, 'toggle'> {
    type?: 'radio';
    name: string;
    value?: T;
    defaultValue?: T;
    onChange?: (value: T, event: any) => void;
}
export interface ToggleButtonCheckboxProps<T> extends Omit<ButtonGroupProps, 'toggle'> {
    type: 'checkbox';
    name?: string;
    value?: T[];
    defaultValue?: T[];
    onChange?: (value: T[]) => void;
}
export declare type ToggleButtonGroupProps<T> = ToggleButtonRadioProps<T> | ToggleButtonCheckboxProps<T>;
declare type ToggleButtonGroup<T> = BsPrefixRefForwardingComponent<'a', ToggleButtonGroupProps<T>> & {
    Button: typeof ToggleButton;
};
declare const ToggleButtonGroup: ToggleButtonGroup<any>;
export default ToggleButtonGroup;
