import React from 'react';
import { TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { TextProps } from '../../components/text';
import { WheelPickerAlign } from './types';
export interface ItemProps {
    label: string;
    value: string | number;
    align?: WheelPickerAlign;
    disableRTL?: boolean;
}
interface InternalProps extends ItemProps {
    index: number;
    offset: Animated.SharedValue<number>;
    itemHeight: number;
    activeColor?: string;
    inactiveColor?: string;
    style?: TextStyle;
    onSelect: (index: number) => void;
    centerH?: boolean;
    fakeLabel?: string;
    fakeLabelStyle?: TextStyle;
    fakeLabelProps?: TextProps;
    testID?: string;
}
declare const _default: React.ComponentClass<InternalProps, any>;
export default _default;
