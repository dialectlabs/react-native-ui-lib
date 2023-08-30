import { RefObject } from 'react';
import { PickerProps } from '../types';
interface UsePickerSelectionProps extends Pick<PickerProps, 'migrate' | 'value' | 'onChange' | 'getItemValue' | 'topBarProps' | 'mode'> {
    pickerExpandableRef: RefObject<any>;
    setSearchValue: (searchValue: string) => void;
}
declare const usePickerSelection: (props: UsePickerSelectionProps) => {
    multiDraftValue: any;
    onDoneSelecting: any;
    toggleItemSelection: any;
    cancelSelect: any;
};
export default usePickerSelection;
