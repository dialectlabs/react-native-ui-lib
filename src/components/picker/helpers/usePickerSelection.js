import _xor from "lodash/xor";
import _xorBy from "lodash/xorBy";
import { useCallback, useState, useEffect } from 'react';
import { PickerModes } from "../types";
const usePickerSelection = props => {
  const {
    migrate,
    value,
    onChange,
    topBarProps,
    pickerExpandableRef,
    getItemValue,
    setSearchValue,
    mode
  } = props;
  const [multiDraftValue, setMultiDraftValue] = useState(value);
  const [multiFinalValue, setMultiFinalValue] = useState(value);
  useEffect(() => {
    if (mode === PickerModes.MULTI && multiFinalValue !== value) {
      setMultiDraftValue(value);
      setMultiFinalValue(value);
    }
  }, [value]);
  const onDoneSelecting = useCallback(item => {
    setSearchValue('');
    setMultiFinalValue(item);
    pickerExpandableRef.current?.closeExpandable?.();
    onChange?.(item);
  }, [onChange]);
  const toggleItemSelection = useCallback(item => {
    let newValue;
    const itemAsArray = [item];
    if (!migrate) {
      newValue = _xorBy(multiDraftValue, itemAsArray, getItemValue || 'value');
    } else {
      newValue = _xor(multiDraftValue, itemAsArray);
    }
    setMultiDraftValue(newValue);
  }, [multiDraftValue, getItemValue]);
  const cancelSelect = useCallback(() => {
    setSearchValue('');
    setMultiDraftValue(multiFinalValue);
    pickerExpandableRef.current?.closeExpandable?.();
    topBarProps?.onCancel?.();
  }, [multiFinalValue, topBarProps]);
  return {
    multiDraftValue,
    onDoneSelecting,
    toggleItemSelection,
    cancelSelect
  };
};
export default usePickerSelection;