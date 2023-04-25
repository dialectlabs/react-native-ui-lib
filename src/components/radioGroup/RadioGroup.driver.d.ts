import { ComponentDriver } from '../../testkit';
import { ComponentDriverArgs } from '../../testkit/Component.driver';
type RadioGroupDriverArgs = ComponentDriverArgs & {
    testIDs: {
        [key: string]: string;
    };
};
export declare class RadioGroupDriver extends ComponentDriver {
    private readonly radioButtonDrivers;
    constructor(radioGroupDriverArgs: RadioGroupDriverArgs);
    pressOn: (radioButtonTestId: string) => Promise<void>;
}
export {};
