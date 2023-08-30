import React from 'react';
import { StyleProp, ViewStyle, ViewProps, ImageStyle, TextStyle, ImageSourcePropType } from 'react-native';
import { AvatarProps } from '../avatar';
import { BadgeProps } from '../badge';
import { TouchableOpacityProps } from '../touchableOpacity';
import { IconProps } from '../icon';
export type ChipProps = ViewProps & TouchableOpacityProps & {
    /**
     * Chip's size. Number or a width and height object.
     */
    size?: number | {
        width: number;
        height: number;
    };
    /**
     * On Chip press callback
     */
    onPress?: (props: any) => void;
    /**
     * Chip's background color
     */
    backgroundColor?: string;
    /**
     * The Chip borderRadius
     */
    borderRadius?: number;
    /**
     * Chip's container style
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Uses size as minWidth and minHeight - default is true
     */
    useSizeAsMinimum?: boolean;
    /**
     * Disables all internal elements default spacings. Helps reach a custom design
     */
    resetSpacings?: boolean;
    /**
   * Used as testing identifier
   */
    testID?: string;
    /**
     * Main Chip text
     */
    label?: string;
    /**
     * Label's style
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Badge props object
     */
    badgeProps?: BadgeProps;
    /**
     * Display badge as counter (no background)
     */
    useCounter?: boolean;
    /**
     * Avatar props object
     */
    avatarProps?: AvatarProps;
    /**
     * Additional icon props
     */
    iconProps?: Omit<IconProps, 'source'>;
    /**
     * Icon style
     */
    iconStyle?: StyleProp<ImageStyle>;
    /**
     * Left icon's source
     */
    iconSource?: ImageSourcePropType;
    /**
     * Right icon's source
     */
    rightIconSource?: ImageSourcePropType;
    /**
     * Left custom element
     */
    leftElement?: JSX.Element;
    /**
     * Right custom element
     */
    rightElement?: JSX.Element;
    /**
     * Adds a dismiss button and serves as its callback
     */
    onDismiss?: (props: any) => void;
    /**
     * Dismiss color
     */
    dismissColor?: string;
    /**
     * Dismiss asset
     */
    dismissIcon?: ImageSourcePropType;
    /**
     * Dismiss style
     */
    dismissIconStyle?: StyleProp<ImageStyle>;
    /**
     * Dismiss container style
     */
    dismissContainerStyle?: StyleProp<ImageStyle>;
};
declare const _default: React.ComponentClass<ChipProps, any>;
export default _default;
