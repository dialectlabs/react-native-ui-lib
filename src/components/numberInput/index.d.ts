import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextFieldProps } from '../../incubator/TextField';
import { NumberInputData } from './Presenter';
export { NumberInputData };
export type NumberInputProps = React.PropsWithRef<Omit<TextFieldProps, 'leadingAccessory' | 'trailingAccessory' | 'value' | 'onChangeText'> & ThemeComponent> & {
    /**
     * Callback that is called when the number value has changed (undefined in both if the user has deleted the number).
     */
    onChangeNumber: (data: NumberInputData) => void;
    /**
     * A valid number (in en locale, i.e. only digits and a decimal point).
     */
    initialNumber?: number;
    /**
     * Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    fractionDigits?: number;
    /**
     * The locale to show the number (default 'en')
     * IMPORTANT: this might not work, depending on your intl\RN version\hermes configuration
     */
    /**
     * A leading text
     */
    leadingText?: string;
    /**
     * The style of the leading text
     */
    leadingTextStyle?: StyleProp<ViewStyle>;
    /**
     * A trailing text
     */
    trailingText?: string;
    /**
     * The style of the trailing text
     */
    trailingTextStyle?: StyleProp<ViewStyle>;
};
declare const _default: React.ForwardRefExoticComponent<Omit<NumberInputProps, "ref"> & React.RefAttributes<TextFieldProps>>;
export default _default;
