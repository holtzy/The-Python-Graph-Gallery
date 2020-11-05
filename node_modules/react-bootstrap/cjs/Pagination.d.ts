import PageItem, { Ellipsis, First, Last, Next, Prev } from './PageItem';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface PaginationProps extends BsPrefixPropsWithChildren {
    size?: 'sm' | 'lg';
}
declare type Pagination = BsPrefixRefForwardingComponent<'ul', PaginationProps> & {
    First: typeof First;
    Prev: typeof Prev;
    Ellipsis: typeof Ellipsis;
    Item: typeof PageItem;
    Next: typeof Next;
    Last: typeof Last;
};
/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
declare const Pagination: Pagination;
export default Pagination;
