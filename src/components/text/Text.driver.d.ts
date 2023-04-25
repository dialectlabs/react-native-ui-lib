import { ComponentDriver } from '../../testkit';
export declare class TextDriver extends ComponentDriver {
    getTextContent: () => Promise<any>;
    isPressable: () => Promise<boolean | null>;
}
