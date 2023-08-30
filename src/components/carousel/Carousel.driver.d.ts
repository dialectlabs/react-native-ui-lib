import { CarouselProps } from './types';
import { ComponentDriver } from '../../testkit';
export declare class CarouselDriver extends ComponentDriver<CarouselProps> {
    getContentOffset: () => Promise<any>;
    scroll: (delta: number) => Promise<void>;
}
