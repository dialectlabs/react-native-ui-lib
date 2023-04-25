import { ComponentDriver } from '../../testkit/Component.driver';
/**
 * Please run clear after each test
 */
export declare class SortableListItemDriver extends ComponentDriver {
    dragUp: (indices: number) => Promise<void>;
    dragDown: (indices: number) => Promise<void>;
    private validateIndices;
}
