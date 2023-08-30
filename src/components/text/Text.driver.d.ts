import { TextProps } from './index';
import { ComponentDriver } from '../../testkit';
export declare class TextDriver extends ComponentDriver<TextProps> {
    getTextContent: () => Promise<any>;
    isPressable: () => Promise<boolean | null>;
}
