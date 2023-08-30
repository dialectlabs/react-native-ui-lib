import { ComponentDriverResult } from './Component.driver';
export type DragEvent = {
    absoluteX?: number;
    absoluteY?: number;
    translationX?: number;
    translationY?: number;
    velocityX?: number;
    velocityY?: number;
    x?: number;
    y?: number;
};
export interface DraggableDriverResult<Props> extends ComponentDriverResult<Props> {
    drag: (distanceOrEvent: DragEvent | DragEvent[] | number) => void;
}
export declare const useDraggableDriver: <Props, DriverProps extends ComponentDriverResult<Props> = ComponentDriverResult<Props>>(driver: DriverProps) => DraggableDriverResult<Props> & DriverProps;
