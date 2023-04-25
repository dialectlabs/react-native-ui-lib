import { ComponentDriver } from '../../testkit';
export declare class HintDriver extends ComponentDriver {
    getHintContent: () => Promise<any>;
    getHintModal: () => Promise<any>;
}
