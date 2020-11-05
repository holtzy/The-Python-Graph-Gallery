import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
declare type RowColWidth = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
declare type RowColumns = RowColWidth | {
    cols?: RowColWidth;
};
export interface RowProps extends BsPrefixPropsWithChildren {
    noGutters?: boolean;
    xs?: RowColumns;
    sm?: RowColumns;
    md?: RowColumns;
    lg?: RowColumns;
    xl?: RowColumns;
}
declare type Row = BsPrefixRefForwardingComponent<'div', RowProps>;
declare const Row: Row;
export default Row;
