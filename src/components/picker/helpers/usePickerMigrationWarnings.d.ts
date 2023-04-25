import { PickerProps } from '../types';
type UsePickerMigrationWarnings = Pick<PickerProps, 'value' | 'mode' | 'useNativePicker'>;
declare const usePickerMigrationWarnings: (props: UsePickerMigrationWarnings) => void;
export default usePickerMigrationWarnings;
