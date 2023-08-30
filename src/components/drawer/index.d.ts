import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
interface DrawerItemProps {
    width?: number;
    background?: string;
    text?: string;
    icon?: number;
    onPress?: Function;
    keepOpen?: boolean;
    style?: ViewStyle;
    testID?: string;
    customElement?: ReactNode;
}
interface DrawerProps {
    /**
     * The drawer animation bounciness
     */
    bounciness?: number;
    /**
     * OnDragStart handler
     */
    onDragStart?: Function;
    /**
     * The bottom layer's items to appear when opened from the right
     */
    rightItems?: DrawerItemProps[];
    /**
     * The bottom layer's item to appear when opened from the left (a single item)
     */
    leftItem?: DrawerItemProps;
    /**
     * Set a different minimum width
     */
    itemsMinWidth?: number;
    /**
     * The color for the text and icon tint of the items
     */
    itemsTintColor?: string;
    /**
     * The items' icon size
     */
    itemsIconSize?: number;
    /**
     * The items' text style
     */
    itemsTextStyle?: TextStyle;
    /**
     * Perform the animation in natively
     */
    useNativeAnimations?: boolean;
    /**
     * Whether to allow a full left swipe
     */
    fullSwipeLeft?: boolean;
    /**
     * Threshold for a left full swipe (0-1)
     */
    fullLeftThreshold?: number;
    /**
     * Callback for left item full swipe
     */
    onFullSwipeLeft?: Function;
    /**
     * Callback for left item toggle swipe
     */
    onToggleSwipeLeft?: Function;
    /**
     * Callback for just before left item full swipe
     */
    onWillFullSwipeLeft?: Function;
    /**
     * Whether to allow a full right swipe
     */
    fullSwipeRight?: boolean;
    /**
     * Threshold for a right full swipe (0-1)
     */
    fullRightThreshold?: number;
    /**
     * Callback for right item full swipe
     */
    onFullSwipeRight?: Function;
    /**
     * Callback for just before right item full swipe
     */
    onWillFullSwipeRight?: Function;
    /**
     * Whether to disable the haptic
     */
    disableHaptic?: boolean;
    /**
     * Style
     */
    style?: ViewStyle;
    /**
     * Callback for open action
     */
    onSwipeableWillOpen?: Function;
    /**
     * Callback for close action
     */
    onSwipeableWillClose?: Function;
    /**
     * Custom value of any type to pass on to the component and receive back in the action callbacks
     */
    customValue?: any;
    /**
     * Used as testing identifier
     */
    testID?: string;
    children?: React.ReactNode;
}
export { DrawerProps, DrawerItemProps };
declare const _default: any;
export default _default;
