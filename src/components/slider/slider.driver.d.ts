import { SliderProps } from './index';
import { ComponentDriver } from '../../testkit';
export declare class SliderDriver extends ComponentDriver<SliderProps> {
    isDisabled: () => Promise<boolean>;
}
