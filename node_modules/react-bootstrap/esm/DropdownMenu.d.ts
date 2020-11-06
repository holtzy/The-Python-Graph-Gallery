import PropTypes from 'prop-types';
import { UseDropdownMenuOptions } from 'react-overlays/DropdownMenu';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
export declare type AlignDirection = 'left' | 'right';
export declare type ResponsiveAlignProp = {
    sm: AlignDirection;
} | {
    md: AlignDirection;
} | {
    lg: AlignDirection;
} | {
    xl: AlignDirection;
};
export declare type AlignType = AlignDirection | ResponsiveAlignProp;
export interface DropdownMenuProps extends BsPrefixPropsWithChildren {
    show?: boolean;
    renderOnMount?: boolean;
    flip?: boolean;
    align?: AlignType;
    alignRight?: boolean;
    onSelect?: SelectCallback;
    rootCloseEvent?: 'click' | 'mousedown';
    popperConfig?: UseDropdownMenuOptions['popperConfig'];
}
declare type DropdownMenu = BsPrefixRefForwardingComponent<'div', DropdownMenuProps>;
export declare const alignPropType: PropTypes.Requireable<string | PropTypes.InferProps<{
    sm: PropTypes.Requireable<string>;
}> | PropTypes.InferProps<{
    md: PropTypes.Requireable<string>;
}> | PropTypes.InferProps<{
    lg: PropTypes.Requireable<string>;
}> | PropTypes.InferProps<{
    xl: PropTypes.Requireable<string>;
}>>;
declare const DropdownMenu: DropdownMenu;
export default DropdownMenu;
