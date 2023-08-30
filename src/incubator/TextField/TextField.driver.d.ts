/// <reference types="react" />
import { TextFieldProps } from './types';
import { ComponentDriver, ComponentDriverArgs } from '../../testkit/Component.driver';
export declare class TextFieldDriver extends ComponentDriver<TextFieldProps> {
    private readonly labelDriver;
    private readonly validationMsgDriver;
    private readonly floatingPlaceholderDriver;
    private readonly charCounterDriver;
    constructor(componentDriverArgs: ComponentDriverArgs);
    getContent: () => Promise<any>;
    isDisabled: () => Promise<boolean | null | undefined>;
    changeText: (text: string) => Promise<void>;
    getText: () => Promise<string | undefined>;
    getPlaceholderContent: () => Promise<string | null | undefined>;
    isPlaceholderVisible: () => Promise<boolean | undefined>;
    getLabelElement: () => Promise<any>;
    isLabelExists: () => Promise<boolean>;
    getLabelContent: () => Promise<import("react").ReactNode>;
    getValidationMsgRootElement: () => Promise<any>;
    isValidationMsgExists: () => Promise<boolean>;
    getValidationMsgContent: () => Promise<import("react").ReactNode>;
    getCharCounterRootElement: () => Promise<any>;
    isCharCounterExists: () => Promise<boolean>;
    getCharCounterContent: () => Promise<import("react").ReactNode>;
}
