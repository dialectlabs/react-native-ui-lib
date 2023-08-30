import { PickerProps } from '../types';
interface UsePickerLabelProps extends Pick<PickerProps, 'value' | 'getLabel' | 'getItemLabel' | 'placeholder' | 'accessibilityLabel' | 'accessibilityHint'> {
    items: {
        value: string | number;
        label: string;
    }[] | null | undefined;
}
declare const usePickerLabel: (props: UsePickerLabelProps) => {
    getLabelsFromArray: any;
    getLabel: any;
    accessibilityInfo: any;
    label: any;
};
export default usePickerLabel;
