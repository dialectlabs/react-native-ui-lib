import { PickerProps } from './types';
import { ComponentDriver } from '../../testkit';
export declare class PickerDriver extends ComponentDriver<PickerProps> {
    getPickerOverlay: () => Promise<any>;
    getPickerOverlayProps: () => Promise<PickerProps>;
}
