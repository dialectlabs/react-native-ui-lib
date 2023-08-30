import { SwitchProps } from './index';
import { ComponentDriver } from '../../testkit';
export declare class SwitchDriver extends ComponentDriver<SwitchProps> {
    getAccessibilityValue: () => Promise<boolean>;
    isDisabled: () => Promise<boolean>;
    isChecked: () => Promise<boolean>;
    getColor: () => Promise<any>;
}
