import { UseDropdownMenuOptions } from 'react-overlays/DropdownMenu';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
export interface DropdownMenuProps extends BsPrefixPropsWithChildren {
    show?: boolean;
    renderOnMount?: boolean;
    flip?: boolean;
    alignRight?: boolean;
    onSelect?: SelectCallback;
    rootCloseEvent?: 'click' | 'mousedown';
    popperConfig?: UseDropdownMenuOptions['popperConfig'];
}
declare type DropdownMenu = BsPrefixRefForwardingComponent<'div', DropdownMenuProps>;
declare const DropdownMenu: DropdownMenu;
export default DropdownMenu;
