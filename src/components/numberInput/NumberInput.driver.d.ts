import { NumberInputProps } from './index';
import { ComponentDriver, ComponentDriverArgs } from '../../testkit/Component.driver';
export declare class NumberInputDriver extends ComponentDriver<NumberInputProps> {
    private readonly maskedInputDriver;
    private readonly visualTextFieldDriver;
    constructor(componentDriverArgs: ComponentDriverArgs);
    changeText: (text: string) => Promise<void>;
    getText: () => Promise<string | undefined>;
}
