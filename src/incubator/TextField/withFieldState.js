import _isEmpty from "lodash/isEmpty";
import _isString from "lodash/isString";
import _isFunction from "lodash/isFunction";
// TODO: remove this file (was replaced with useFieldState hook)
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import validators from "./validators";
function withFieldState(WrappedComponent) {
  const WithFieldState = ({
    validate,
    validateOnBlur,
    validateOnChange,
    validateOnStart,
    ...props
  }) => {
    const [value, setValue] = useState(props.value);
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(true);
    useEffect(() => {
      if (validateOnStart) {
        validateField();
      }
    }, []);
    const validateField = useCallback((valueToValidate = value) => {
      let _isValid = true;
      if (_isFunction(validate)) {
        _isValid = validate(valueToValidate);
      } else if (_isString(validate)) {
        _isValid = validators[validate]?.(valueToValidate);
      }
      setIsValid(_isValid);
    }, [value]);
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
    }, [props.onChangeText, validateOnChange]);
    const fieldState = useMemo(() => {
      return {
        value,
        hasValue: !_isEmpty(value),
        isValid,
        isFocused
      };
    }, [value, isFocused, isValid]);
    return <WrappedComponent {...props} onFocus={onFocus} onBlur={onBlur} onChangeText={onChangeText} fieldState={fieldState} />;
  };
  hoistStatics(WithFieldState, WrappedComponent);
  WithFieldState.displayName = WrappedComponent.displayName;
  return WithFieldState;
}
export default withFieldState;