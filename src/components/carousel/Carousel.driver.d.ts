import { CarouselProps } from './types';
import { ComponentDriver } from '../../testkit';
export declare class CarouselDriver extends ComponentDriver<CarouselProps> {
    getContentOffset: () => Promise<import("react-native").PointProp | undefined>;
    scroll: (delta: number) => Promise<void>;
}
