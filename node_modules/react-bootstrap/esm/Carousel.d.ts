import React from 'react';
import CarouselCaption from './CarouselCaption';
import CarouselItem from './CarouselItem';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface CarouselRef {
    element: HTMLElement;
    prev: (e?: React.SyntheticEvent) => void;
    next: (e?: React.SyntheticEvent) => void;
}
export interface CarouselProps extends BsPrefixPropsWithChildren, Pick<React.DOMAttributes<HTMLElement>, 'onKeyDown' | 'onMouseOver' | 'onMouseOut' | 'onTouchStart' | 'onTouchMove' | 'onTouchEnd'> {
    slide?: boolean;
    fade?: boolean;
    controls?: boolean;
    indicators?: boolean;
    activeIndex?: number;
    onSelect?: (eventKey: number, event: Record<string, unknown> | null) => void;
    defaultActiveIndex?: number;
    onSlide?: (eventKey: number, direction: 'left' | 'right') => void;
    onSlid?: (eventKey: number, direction: 'left' | 'right') => void;
    interval?: number | null;
    keyboard?: boolean;
    pause?: 'hover' | false;
    wrap?: boolean;
    touch?: boolean;
    prevIcon?: React.ReactNode;
    prevLabel?: React.ReactNode;
    nextIcon?: React.ReactNode;
    nextLabel?: React.ReactNode;
    ref?: React.Ref<CarouselRef>;
}
declare type Carousel = BsPrefixRefForwardingComponent<'div', CarouselProps> & {
    Caption: typeof CarouselCaption;
    Item: typeof CarouselItem;
};
declare const Carousel: Carousel;
export default Carousel;
