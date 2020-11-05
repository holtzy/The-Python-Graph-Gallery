import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface CardImgProps extends BsPrefixProps {
    variant?: 'top' | 'bottom' | null;
}
declare type CardImg = BsPrefixRefForwardingComponent<'img', CardImgProps>;
declare const CardImg: CardImg;
export default CardImg;
