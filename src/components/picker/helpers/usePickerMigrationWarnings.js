import _isPlainObject from "lodash/isPlainObject";
import { useEffect } from 'react';
import { LogService } from "../../../services";
import { PickerModes } from "../types";

// @ts-expect-error TODO: Remove this whole file when migration is completed

const usePickerMigrationWarnings = props => {
  const {
    value,
    mode,
    useNativePicker
  } = props;
  useEffect(() => {
    if (mode === PickerModes.SINGLE && Array.isArray(value)) {
      LogService.warn('Picker in SINGLE mode cannot accept an array for value');
    }
    if (mode === PickerModes.MULTI && !Array.isArray(value)) {
      LogService.warn('Picker in MULTI mode must accept an array for value');
    }
    if (_isPlainObject(value)) {
      LogService.warn('UILib Picker will stop supporting passing object as value in the next major version. Please use either string or a number as value');
    }
    if (useNativePicker) {
      LogService.warn(`UILib Picker will stop supporting the 'useNativePicker' prop soon, please pass instead the 'useWheelPicker' prop and handle relevant TextField migration if required to`);
    }
  }, []);
};
export default usePickerMigrationWarnings;