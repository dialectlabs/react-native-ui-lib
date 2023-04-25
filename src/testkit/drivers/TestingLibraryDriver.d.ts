import { DragData, UniDriver } from '../UniDriver';
import { ReactTestInstance } from 'react-test-renderer';
export declare class TestingLibraryDriver implements UniDriver {
    private readonly renderAPI;
    private readonly reactTestInstances;
    constructor(instance: ReactTestInstance[]);
    constructor(component: JSX.Element);
    selectorByTestId: (testId: string) => Promise<UniDriver>;
    selectorByText: (text: string) => Promise<UniDriver>;
    getByDisplayValue: (value: string) => Promise<UniDriver>;
    first: () => Promise<UniDriver>;
    at: (index: number) => Promise<UniDriver>;
    instance: () => Promise<any>;
    getInstanceProps: () => Promise<any>;
    press: () => void;
    drag: (data: DragData | DragData[]) => void;
    focus: () => void;
    blur: () => void;
    typeText: (text: string) => Promise<void>;
    scrollX: (deltaX: number) => Promise<void>;
    scrollY: (deltaY: number) => Promise<void>;
    private scroll;
    private validateExplicitInstance;
    private validateSingleInstance;
}
