import { HintProps } from './index';
import { ComponentDriver } from '../../testkit';
export declare class HintDriver extends ComponentDriver<HintProps> {
    getHintContent: () => Promise<any>;
    getHintModal: () => Promise<any>;
}
