import _isEmpty from "lodash/isEmpty";
import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDidUpdate, useThemeProps } from "../../hooks";
import TextField from "../../incubator/TextField";
import Text from "../text";
import { getInitialData, parseInput, generateOptions, NumberInputData } from "./Presenter";
export { NumberInputData };
function NumberInput(props, ref) {
  const themeProps = useThemeProps(props, 'NumberInput');
  const {
    onChangeNumber,
    initialNumber,
    fractionDigits = 2,
    // @ts-expect-error
    locale = 'en',
    containerStyle,
    leadingText,
    leadingTextStyle,
    trailingText,
    trailingTextStyle,
    placeholder,
    ...others
  } = themeProps;
  const [options, setOptions] = useState(generateOptions(locale, fractionDigits));
  const [data, setData] = useState();
  useDidUpdate(() => {
    setOptions(generateOptions(locale, fractionDigits));
  }, [locale, fractionDigits]);
  const handleInitialValueChange = () => {
    const newData = getInitialData(options, initialNumber);
    onChangeNumber(newData);
    setData(newData);
  };
  useEffect(() => {
    handleInitialValueChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialNumber]);
  const processInput = useCallback(text => {
    const newData = parseInput(text, options);
    onChangeNumber(newData);
    setData(newData);
  }, [onChangeNumber, options]);
  useDidUpdate(() => {
    if (data?.type === 'valid') {
      // 1. This will not work properly for changing locale
      // 2. This will not work properly for changing fractionDigits with only an initialNumber
      processInput(data.userInput);
    }
  }, [options]);
  const hasText = useMemo(() => {
    // Render (none or) both leading and trailing accessories together for flexness (especially when validation message is long)
    return !_isEmpty(leadingText) || !_isEmpty(trailingText);
  }, [leadingText, trailingText]);
  const leadingAccessory = useMemo(() => {
    if (hasText) {
      return <Text style={[styles.accessory, {
        textAlign: 'right'
      }, leadingTextStyle]}>{leadingText}</Text>;
    }
  }, [hasText, leadingText, leadingTextStyle]);
  const trailingAccessory = useMemo(() => {
    if (hasText) {
      return <Text style={[styles.accessory, trailingTextStyle]}>{trailingText}</Text>;
    }
  }, [hasText, trailingText, trailingTextStyle]);
  const _containerStyle = useMemo(() => {
    return [styles.containerStyle, containerStyle];
  }, [containerStyle]);
  const _onChangeText = useCallback(text => {
    processInput(text);
  }, [processInput]);
  const value = useMemo(() => {
    return data?.type === 'valid' || data?.type === 'error' ? data.userInput : '';
  }, [data]);
  const formatter = useCallback(() => {
    return data?.type === 'valid' ? data.formattedNumber : data?.type === 'error' ? data.userInput : '';
  }, [data]);

  // Fixing RN bug in Android (placeholder + trailingText) - https://github.com/facebook/react-native/issues/35611
  const _placeholder = useMemo(() => {
    return _isEmpty(value) ? placeholder : undefined;
  }, [placeholder, value]);
  return <TextField {...others} placeholder={_placeholder} value={value} onChangeText={_onChangeText} formatter={formatter} ref={ref} floatingPlaceholder={false} leadingAccessory={leadingAccessory} trailingAccessory={trailingAccessory} containerStyle={_containerStyle} keyboardType={'numeric'} />;
}
export default React.forwardRef(NumberInput);
const styles = StyleSheet.create({
  containerStyle: {
    overflow: 'hidden'
  },
  accessory: {
    flexGrow: 999
  }
});