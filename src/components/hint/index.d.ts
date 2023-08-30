import React, { ReactElement } from 'react';
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
declare enum HintPositions {
    TOP = "top",
    BOTTOM = "bottom"
}
interface HintTargetFrame {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
export interface HintProps {
    /**
     * Control the visibility of the hint
     */
    visible?: boolean;
    /**
     * The hint background color
     */
    color?: string;
    /**
     * The hint message
     */
    message?: string | ReactElement;
    /**
     * The hint message custom style
     */
    messageStyle?: StyleProp<TextStyle>;
    /**
     * Icon to show next to the hint's message
     */
    icon?: ImageSourcePropType;
    /**
     * The icon's style
     */
    iconStyle?: StyleProp<ImageStyle>;
    /**
     * The hint's position
     */
    position?: HintPositions;
    /**
     * Provide custom target position instead of wrapping a child
     */
    targetFrame?: HintTargetFrame;
    /**
     * Open the hint using a Modal component
     */
    useModal?: boolean;
    /**
     * Show side tips instead of the middle tip
     */
    useSideTip?: boolean;
    /**
     * The hint's border radius
     */
    borderRadius?: number;
    /**
     * Hint margins from screen edges
     */
    edgeMargins?: number;
    /**
     * Hint offset from target
     */
    offset?: number;
    /**
     * Callback for Hint press
     */
    onPress?: () => void;
    /**
     * Callback for the background press
     */
    onBackgroundPress?: (event: GestureResponderEvent) => void;
    /**
     * Color for background overlay (require onBackgroundPress)
     */
    backdropColor?: string;
    /**
     * The hint container width
     */
    containerWidth?: number;
    /**
     * Custom content element to render inside the hint container
     */
    customContent?: JSX.Element;
    /**
     * Remove all hint's paddings
     */
    removePaddings?: boolean;
    /**
     * Enable shadow (for hint with white background only)
     */
    enableShadow?: boolean;
    /**
     * The hint's test identifier
     */
    testID?: string;
    /**
     * Additional styling
     */
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
declare const _default: any;
export default _default;
