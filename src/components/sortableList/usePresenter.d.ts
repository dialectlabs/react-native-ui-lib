export declare const animationConfig: {
    easing: (value: number) => number;
    duration: number;
};
type ItemsOrder = string[];
declare const usePresenter: () => {
    getTranslationByIndexChange: (newIndex: number, oldIndex: number, itemHeight: number) => number;
    getIndexByPosition: (positionY: number, itemHeight: number) => number;
    getItemIndexById: (itemsOrder: ItemsOrder, itemId: string) => number;
    getIdByItemIndex: (itemsOrder: ItemsOrder, orderIndex: number) => string;
};
export default usePresenter;
