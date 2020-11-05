import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
declare type NumberAttr = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
declare type ColOrder = 'first' | 'last' | NumberAttr;
declare type ColSize = boolean | 'auto' | NumberAttr;
declare type ColSpec = ColSize | {
    span?: ColSize;
    offset?: NumberAttr;
    order?: ColOrder;
};
export interface ColProps extends BsPrefixPropsWithChildren {
    xs?: ColSpec;
    sm?: ColSpec;
    md?: ColSpec;
    lg?: ColSpec;
    xl?: ColSpec;
}
declare const Col: BsPrefixRefForwardingComponent<'div', ColProps>;
export default Col;
