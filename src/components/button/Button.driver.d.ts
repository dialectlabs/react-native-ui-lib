import { ComponentDriver, ComponentDriverArgs } from '../../testkit/Component.driver';
/**
 * Please run clear after each test
 */
export declare class ButtonDriver extends ComponentDriver {
    private readonly labelDriver;
    private readonly iconDriver;
    constructor(componentDriverArgs: ComponentDriverArgs);
    isPressable: () => Promise<boolean | null>;
    getLabelRootElement: () => Promise<any>;
    isLabelExists: () => Promise<boolean>;
    getLabelContent: () => Promise<any>;
    getIconElement: () => Promise<any>;
    isIconExists: () => Promise<boolean>;
}
