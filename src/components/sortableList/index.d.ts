import { SortableListProps, SortableListItemProps } from './types';
export { SortableListProps, SortableListItemProps };
declare const SortableList: <ItemT extends SortableListItemProps>(props: SortableListProps<ItemT>) => JSX.Element;
export default SortableList;
