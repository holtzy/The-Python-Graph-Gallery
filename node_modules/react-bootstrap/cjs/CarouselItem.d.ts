import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface CarouselItemProps extends BsPrefixPropsWithChildren {
    interval?: number;
}
declare type CarouselItem = BsPrefixRefForwardingComponent<'div', CarouselItemProps>;
declare const CarouselItem: CarouselItem;
export default CarouselItem;
