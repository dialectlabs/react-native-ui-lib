import { ComponentProps } from '../../testkit/new/Component.driver';
import { SortableListItemProps } from './types';
export declare const SortableListItemDriver: (props: ComponentProps) => {
    dragUp: (indices: number) => Promise<void>;
    dragDown: (indices: number) => Promise<void>;
    drag: (distanceOrEvent: number | import("../../testkit/new/useDraggable.driver").DragEvent | import("../../testkit/new/useDraggable.driver").DragEvent[]) => void;
    getElement: () => ReactTestInstance;
    exists: () => boolean;
    getProps: () => SortableListItemProps;
};
