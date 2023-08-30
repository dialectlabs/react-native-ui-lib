import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ViewProps } from '../view';
import { ButtonProps } from '../button';
export type StackAggregatorProps = ViewProps & {
    /**
      * The initial state of the stack
      */
    collapsed?: boolean;
    /**
     * Component Children
     */
    children: JSX.Element | JSX.Element[];
    /**
     * The container style
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * The content container style
     */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /**
     * The items border radius
     */
    itemBorderRadius?: number;
    /**
     * Props passed to the 'show less' button
     */
    buttonProps?: ButtonProps;
    /**
     * A callback for item press
     */
    onItemPress?: (index: number) => void;
    /**
     * A callback for collapse state will change (value is future collapsed state)
     */
    onCollapseWillChange?: (changed: boolean) => void;
    /**
     * A callback for collapse state change (value is collapsed state)
     */
    onCollapseChanged?: (changed: boolean) => void;
    /**
     * A setting that disables the cards' onPress
     */
    disablePresses?: boolean;
};
declare const _default: React.ComponentClass<StackAggregatorProps, any>;
export default _default;
