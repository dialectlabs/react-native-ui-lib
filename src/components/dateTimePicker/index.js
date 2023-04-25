import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { DateTimePickerPackage as RNDateTimePicker, MomentPackage as moment } from "../../optionalDependencies";
import { useDidUpdate } from "../../hooks";
import { Colors } from "../../style";
import Assets from "../../assets";
import { Constants, asBaseComponent } from "../../commons/new";
import TextField from "../textField/TextFieldMigrator";
import View from "../view";
import Button from "../button";
import ExpandableOverlay from "../../incubator/expandableOverlay";
const MODES = {
  DATE: 'date',
  TIME: 'time'
};
/*eslint-disable*/
/**
 * @description: Date and Time Picker Component that wraps RNDateTimePicker for date and time modes.
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/DateTimePickerScreen.tsx
 * @important: DateTimePicker uses a native library. You MUST add and link the native library to both iOS and Android projects.
 * @extends: TextField, react-native-community/datetimepicker
 * @extendsLink: https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/DateTimePicker/DateTimePicker_iOS.gif?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/DateTimePicker/DateTimePicker_Android.gif?raw=true
 */
/*eslint-enable*/
function DateTimePicker(props) {
  const {
    value: propsValue,
    renderInput,
    editable,
    mode = MODES.DATE,
    dateFormat,
    timeFormat,
    dateFormatter,
    timeFormatter,
    minimumDate,
    maximumDate,
    locale,
    is24Hour,
    minuteInterval,
    timeZoneOffsetInMinutes,
    themeVariant = Colors.getScheme(),
    onChange,
    dialogProps,
    headerStyle,
    // @ts-expect-error
    useCustomTheme,
    testID,
    migrateTextField = true,
    ...others
  } = props;
  const [value, setValue] = useState(propsValue);
  const chosenDate = useRef(propsValue);
  const expandable = useRef();
  useEffect(() => {
    if (!RNDateTimePicker) {
      console.error(`RNUILib DateTimePicker component requires installing "@react-native-community/datetimepicker" dependency`);
    }
  }, []);
  useEffect(() => {
    if (!moment && (dateFormat || timeFormat)) {
      console.error(`RNUILib DateTimePicker component with date/time format requires installing "moment" dependency`);
    }
  }, [dateFormat, timeFormat]);
  useDidUpdate(() => {
    setValue(propsValue);
  }, [propsValue]);
  const _dialogProps = useMemo(() => {
    return {
      width: '100%',
      height: null,
      bottom: true,
      centerH: true,
      containerStyle: styles.dialog,
      testID: `${testID}.dialog`,
      supportedOrientations: ['portrait', 'landscape', 'landscape-left', 'landscape-right'],
      ...dialogProps
    };
  }, [dialogProps, testID]);
  const getStringValue = () => {
    if (value) {
      switch (mode) {
        case MODES.DATE:
          return dateFormatter ? dateFormatter(value) : dateFormat && moment ? moment(value).format(dateFormat) : value.toLocaleDateString();
        case MODES.TIME:
          return timeFormatter ? timeFormatter(value) : timeFormat && moment ? moment(value).format(timeFormat) : value.toLocaleTimeString();
      }
    }
  };
  const toggleExpandableOverlay = useCallback(() => {
    expandable.current?.toggleExpandable?.();
  }, []);
  const onDonePressed = useCallback(() => {
    toggleExpandableOverlay();
    if (Constants.isIOS && !chosenDate.current) {
      // since handleChange() is not called on iOS when there is no actual change
      chosenDate.current = new Date();
    }
    onChange?.(chosenDate.current);
    setValue(chosenDate.current);
  }, [toggleExpandableOverlay, onChange]);
  const handleChange = useCallback((event = {}, date) => {
    // NOTE: will be called on Android even when there was no actual change
    if (event.type !== 'dismissed' && date !== undefined) {
      chosenDate.current = date;
      if (Constants.isAndroid) {
        onDonePressed();
      }
    } else if (event.type === 'dismissed' && Constants.isAndroid) {
      toggleExpandableOverlay();
    }
  }, [onDonePressed, toggleExpandableOverlay]);
  const renderHeader = () => {
    return <View row spread bg-$backgroundDefault paddingH-20 style={[styles.header, headerStyle]} testID={`${testID}.header`}>
        <Button link iconSource={Assets.icons.x} iconStyle={{
        tintColor: Colors.$iconDefault
      }} onPress={toggleExpandableOverlay} testID={`${testID}.cancel`} />
        <Button link iconSource={Assets.icons.check} useCustomTheme={useCustomTheme} onPress={onDonePressed} testID={`${testID}.done`} />
      </View>;
  };
  const renderDateTimePicker = useCallback(() => {
    if (!RNDateTimePicker) {
      return null;
    }
    return <RNDateTimePicker mode={mode} value={value || new Date()} onChange={handleChange} minimumDate={minimumDate} maximumDate={maximumDate} locale={locale} is24Hour={is24Hour} minuteInterval={minuteInterval} timeZoneOffsetInMinutes={timeZoneOffsetInMinutes} display={Constants.isIOS ? 'spinner' : undefined} themeVariant={themeVariant} testID={`${testID}.picker`} />;
  }, [mode, value, handleChange, minimumDate, maximumDate, locale, is24Hour, minuteInterval, timeZoneOffsetInMinutes, themeVariant]);
  const renderIOSExpandableOverlay = () => {
    return <>
        {renderHeader()}
        {renderDateTimePicker()}
      </>;
  };
  const renderAndroidDateTimePicker = useCallback(({
    visible
  }) => {
    if (visible) {
      return renderDateTimePicker();
    }
  }, [renderDateTimePicker]);
  return <>
      <ExpandableOverlay
    // @ts-expect-error
    ref={expandable} expandableContent={Constants.isIOS ? renderIOSExpandableOverlay() : undefined} useDialog dialogProps={_dialogProps} disabled={editable === false}
    // NOTE: Android picker comes with its own overlay built-in therefor we're not using ExpandableOverlay for it
    renderCustomOverlay={Constants.isAndroid ? renderAndroidDateTimePicker : undefined} testID={`${testID}.overlay`}>
        {renderInput ? renderInput({
        ...props,
        value: getStringValue()
      }) : <TextField {...others} migrate={migrateTextField} testID={testID} editable={editable}
      // @ts-expect-error should be remove after completing TextField migration
      expandable={!!others.renderExpandableInput} value={getStringValue()} />}
      </ExpandableOverlay>
    </>;
}
DateTimePicker.displayName = 'DateTimePicker';
export { DateTimePicker }; // For tests
export default asBaseComponent(DateTimePicker);
const styles = StyleSheet.create({
  header: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: Colors.$outlineDefault
  },
  dialog: {
    backgroundColor: Colors.$backgroundDefault,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  }
});