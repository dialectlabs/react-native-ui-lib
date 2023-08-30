import { TextFieldProps } from './types';
import { ComponentDriver, ComponentDriverArgs } from '../../testkit/Component.driver';
export declare class TextFieldDriver extends ComponentDriver<TextFieldProps> {
    private readonly labelDriver;
    private readonly validationMsgDriver;
    private readonly floatingPlaceholderDriver;
    private readonly charCounterDriver;
    constructor(componentDriverArgs: ComponentDriverArgs);
    getContent: () => Promise<any>;
    isDisabled: () => Promise<any>;
    changeText: (text: string) => Promise<void>;
    getText: () => Promise<any>;
    getPlaceholderContent: () => Promise<string | null | undefined>;
    isPlaceholderVisible: () => Promise<boolean | undefined>;
    getLabelElement: () => Promise<any>;
    isLabelExists: () => Promise<boolean>;
    getLabelContent: () => Promise<any>;
    getValidationMsgRootElement: () => Promise<any>;
    isValidationMsgExists: () => Promise<boolean>;
    getValidationMsgContent: () => Promise<any>;
    getCharCounterRootElement: () => Promise<any>;
    isCharCounterExists: () => Promise<boolean>;
    getCharCounterContent: () => Promise<any>;
}
