import ListGroupItem from './ListGroupItem';
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
export interface ListGroupProps extends BsPrefixProps {
    variant?: 'flush';
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl';
    activeKey?: unknown;
    defaultActiveKey?: unknown;
    onSelect?: SelectCallback;
}
declare type ListGroup = BsPrefixRefForwardingComponent<'div', ListGroupProps> & {
    Item: typeof ListGroupItem;
};
declare const ListGroup: ListGroup;
export default ListGroup;
