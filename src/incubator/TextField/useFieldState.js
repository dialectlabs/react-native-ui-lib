import _isEmpty from "lodash/isEmpty";
import _isUndefined from "lodash/isUndefined";
import { useCallback, useState, useEffect, useMemo } from 'react';
import * as Presenter from "./Presenter";
import { useDidUpdate } from "../../hooks";
import { Constants } from "../../commons/new";
export default function useFieldState({
  validate,
  validationMessage,
  validateOnBlur,
  validateOnChange,
  validateOnStart,
  onChangeValidity,
  ...props
}) {
  const propsValue = props.value ?? props.defaultValue;
  const [value, setValue] = useState(propsValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(undefined);
  const [failingValidatorIndex, setFailingValidatorIndex] = useState(undefined);
  useEffect(() => {
    if (Constants.isWeb && !props.value && props.defaultValue && props.defaultValue !== value) {
      setValue(props.defaultValue);
      if (validateOnStart) {
        validateField(props.defaultValue);
      }
    }

    /* On purpose listen only to props.defaultValue change */
    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [props.defaultValue, validateOnStart]);
  useEffect(() => {
    if (validateOnStart) {
      validateField();
    }
  }, []);
  useEffect(() => {
    if (propsValue !== value) {
      setValue(propsValue);
      if (validateOnChange) {
        validateField(propsValue);
      }
    }
    /* On purpose listen only to propsValue change */
    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [propsValue, validateOnChange]);
  useDidUpdate(() => {
    if (!_isUndefined(isValid)) {
      onChangeValidity?.(isValid);
    }
  }, [isValid]);
  const checkValidity = useCallback((valueToValidate = value) => {
    const [_isValid] = Presenter.validate(valueToValidate, validate);
    return _isValid;
  }, [value, validate]);
  const validateField = useCallback((valueToValidate = value) => {
    const [_isValid, _failingValidatorIndex] = Presenter.validate(valueToValidate, validate);
    setIsValid(_isValid);
    setFailingValidatorIndex(_failingValidatorIndex);
    return _isValid;
  }, [value, validate]);
  const onFocus = useCallback((...args) => {
    setIsFocused(true);
    //@ts-expect-error
    props.onFocus?.(...args);
  }, [props.onFocus]);
  const onBlur = useCallback((...args) => {
    setIsFocused(false);
    //@ts-expect-error
    props.onBlur?.(...args);
    if (validateOnBlur) {
      validateField();
    }
  }, [props.onBlur, validateOnBlur, validateField]);
  const onChangeText = useCallback(text => {
    setValue(text);
    props.onChangeText?.(text);
    if (validateOnChange) {
      validateField(text);
    }
  }, [props.onChangeText, validateOnChange, validateField]);
  const fieldState = useMemo(() => {
    return {
      value,
      hasValue: !_isEmpty(value),
      isValid: validationMessage && !validate ? false : isValid ?? true,
      isFocused,
      failingValidatorIndex
    };
  }, [value, isFocused, isValid, failingValidatorIndex, validationMessage, validate]);
  return {
    onFocus,
    onBlur,
    onChangeText,
    fieldState,
    validateField,
    checkValidity
  };
}