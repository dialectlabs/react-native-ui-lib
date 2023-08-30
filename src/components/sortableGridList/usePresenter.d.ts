import { ItemsOrder } from './types';
export declare const WINDOW_WIDTH: number;
export declare const DEFAULT_NO_OF_COLUMNS = 3;
export declare const getItemSize: (numOfColumns: number, viewWidth: number) => number;
export declare const animationConfig: {
    easing: (value: number) => number;
    duration: number;
};
declare const usePresenter: (numOfColumns: number, itemSpacing: number) => {
    updateItemLayout: (layout: {
        width: number;
        height: number;
    }) => void;
    getTranslationByOrderChange: (newOrder: number, oldOrder: number) => {
        x: number;
        y: number;
    };
    getOrderByPosition: (positionX: number, positionY: number) => number;
    getItemOrderById: (itemsOrder: ItemsOrder, itemId: string) => number;
    getIdByItemOrder: (itemsOrder: ItemsOrder, orderIndex: number) => string;
};
export default usePresenter;
