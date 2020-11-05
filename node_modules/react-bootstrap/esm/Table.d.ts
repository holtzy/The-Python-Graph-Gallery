import { BsPrefixAndClassNameOnlyProps, BsPrefixRefForwardingComponent } from './helpers';
export interface TableProps extends BsPrefixAndClassNameOnlyProps {
    striped?: boolean;
    bordered?: boolean;
    borderless?: boolean;
    hover?: boolean;
    size?: string;
    variant?: string;
    responsive?: boolean | string;
}
declare type Table = BsPrefixRefForwardingComponent<'table', TableProps>;
declare const Table: Table;
export default Table;
