import { ComponentDriver } from '../../testkit';
export declare class CarouselDriver extends ComponentDriver {
    getContentOffset: () => Promise<any>;
    scroll: (delta: number) => Promise<void>;
}
