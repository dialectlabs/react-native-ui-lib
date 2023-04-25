import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BaseComponentInjectedProps } from '../../commons/new';
import { DialogProps } from '../dialog';
import type { TextFieldProps } from '../../incubator/TextField';
export type DateTimePickerProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
    /**
     * The type of picker to display ('date' or 'time')
     */
    mode?: 'date' | 'time';
    /**
     * The initial value to set the picker to. Defaults to device's date / time
     */
    value?: Date;
    /**
     * The onChange callback
     */
    onChange?: (date: Date) => void;
    /**
     * Should this input be editable or disabled
     */
    editable?: boolean;
    /**
     * The minimum date or time value to use
     */
    minimumDate?: Date;
    /**
     * The maximum date or time value to use
     */
    maximumDate?: Date;
    /**
     * The date format for the text display
     */
    dateFormat?: string;
    /**
     * A callback function to format date
     */
    dateFormatter?: (date: Date) => string;
    /**
     * The time format for the text display
     */
    timeFormat?: string;
    /**
     * A callback function to format time
     */
    timeFormatter?: (date: Date) => string;
    /**
     * Allows changing of the locale of the component (iOS only)
     */
    locale?: string;
    /**
     * Allows changing of the time picker to a 24 hour format (Android only)
     */
    is24Hour?: boolean;
    /**
     * The interval at which minutes can be selected. Possible values are: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 (iOS only)
     */
    minuteInterval?: number;
    /**
     * Allows changing of the timeZone of the date picker. By default it uses the device's time zone (iOS only)
     */
    timeZoneOffsetInMinutes?: number;
    /**
     * Props to pass the Dialog component
     */
    dialogProps?: DialogProps;
    /**
     * style to apply to the iOS dialog header
     */
    headerStyle?: StyleProp<ViewStyle>;
    /**
     * Render custom input
     */
    renderInput?: (props: Omit<DateTimePickerProps, 'value'> & {
        value?: string;
    }) => React.ReactElement;
    /**
     * Override system theme variant (dark or light mode) used by the date picker.
     */
    themeVariant?: 'light' | 'dark';
    /**
     * The component testID
     */
    testID?: string;
    /**
     * Should migrate to the new TextField implementation
     */
    migrateTextField?: boolean;
};
type DateTimePickerPropsInternal = DateTimePickerProps & BaseComponentInjectedProps;
/**
 * @description: Date and Time Picker Component that wraps RNDateTimePicker for date and time modes.
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/DateTimePickerScreen.tsx
 * @important: DateTimePicker uses a native library. You MUST add and link the native library to both iOS and Android projects.
 * @extends: TextField, react-native-community/datetimepicker
 * @extendsLink: https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/DateTimePicker/DateTimePicker_iOS.gif?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/DateTimePicker/DateTimePicker_Android.gif?raw=true
 */
declare function DateTimePicker(props: DateTimePickerPropsInternal): JSX.Element;
declare namespace DateTimePicker {
    var displayName: string;
}
export { DateTimePicker };
declare const _default: React.ComponentClass<Omit<TextFieldProps, "value" | "onChange"> & {
    /**
     * The type of picker to display ('date' or 'time')
     */
    mode?: "time" | "date" | undefined;
    /**
     * The initial value to set the picker to. Defaults to device's date / time
     */
    value?: Date | undefined;
    /**
     * The onChange callback
     */
    onChange?: ((date: Date) => void) | undefined;
    /**
     * Should this input be editable or disabled
     */
    editable?: boolean | undefined;
    /**
     * The minimum date or time value to use
     */
    minimumDate?: Date | undefined;
    /**
     * The maximum date or time value to use
     */
    maximumDate?: Date | undefined;
    /**
     * The date format for the text display
     */
    dateFormat?: string | undefined;
    /**
     * A callback function to format date
     */
    dateFormatter?: ((date: Date) => string) | undefined;
    /**
     * The time format for the text display
     */
    timeFormat?: string | undefined;
    /**
     * A callback function to format time
     */
    timeFormatter?: ((date: Date) => string) | undefined;
    /**
     * Allows changing of the locale of the component (iOS only)
     */
    locale?: string | undefined;
    /**
     * Allows changing of the time picker to a 24 hour format (Android only)
     */
    is24Hour?: boolean | undefined;
    /**
     * The interval at which minutes can be selected. Possible values are: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 (iOS only)
     */
    minuteInterval?: number | undefined;
    /**
     * Allows changing of the timeZone of the date picker. By default it uses the device's time zone (iOS only)
     */
    timeZoneOffsetInMinutes?: number | undefined;
    /**
     * Props to pass the Dialog component
     */
    dialogProps?: DialogProps | undefined;
    /**
     * style to apply to the iOS dialog header
     */
    headerStyle?: StyleProp<ViewStyle>;
    /**
     * Render custom input
     */
    renderInput?: ((props: Omit<DateTimePickerProps, "value"> & {
        value?: string | undefined;
    }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) | undefined;
    /**
     * Override system theme variant (dark or light mode) used by the date picker.
     */
    themeVariant?: "light" | "dark" | undefined;
    /**
     * The component testID
     */
    testID?: string | undefined;
    /**
     * Should migrate to the new TextField implementation
     */
    migrateTextField?: boolean | undefined;
} & ThemeComponent, any>;
export default _default;
