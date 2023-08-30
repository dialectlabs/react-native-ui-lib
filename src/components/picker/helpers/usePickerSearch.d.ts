import { PickerProps } from '../types';
type UsePickerSearchProps = Pick<PickerProps, 'showSearch' | 'onSearchChange' | 'children' | 'getItemLabel'>;
declare const usePickerSearch: (props: UsePickerSearchProps) => {
    setSearchValue: any;
    onSearchChange: any;
    filteredChildren: any;
};
export default usePickerSearch;
