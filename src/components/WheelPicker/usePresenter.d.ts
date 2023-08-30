import { ItemProps } from './Item';
export type ItemValueTypes = ItemProps | number | string;
type PropTypes = {
    initialValue?: ItemValueTypes;
    children?: JSX.Element | JSX.Element[];
    items?: ItemProps[];
    itemHeight: number;
    preferredNumVisibleRows: number;
};
type RowItem = {
    value: string | number;
    index: number;
};
interface Presenter {
    items: ItemProps[];
    index: number;
    height: number;
    getRowItemAtOffset: (offset: number) => RowItem;
}
declare const usePresenter: ({ initialValue, children, items: propItems, itemHeight, preferredNumVisibleRows }: PropTypes) => Presenter;
export default usePresenter;
