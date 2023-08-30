import { SortableListProps, SortableListItemProps } from './types';
import { ComponentDriver } from '../../testkit/Component.driver';
/**
 * Please run clear after each test
 */
export declare class SortableListItemDriver<ItemT extends SortableListItemProps> extends ComponentDriver<SortableListProps<ItemT>> {
    dragUp: (indices: number) => Promise<void>;
    dragDown: (indices: number) => Promise<void>;
    private validateIndices;
}
