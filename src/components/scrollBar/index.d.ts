import React from 'react';
import { FlatListProps, ImageSourcePropType } from 'react-native';
export interface ScrollBarProps extends FlatListProps<any> {
    /**
     * Whether to use a FlatList. NOTE: you must pass 'data' and 'renderItem' props as well
     */
    useList?: boolean;
    /**
     * The element to use as a container, instead of a View
     */
    containerView?: React.ComponentClass;
    /**
     * The props to pass the container
     */
    containerProps?: object;
    /**
     * The component's height
     */
    height?: number;
    /**
     * The gradient's height, defaults to the component's height
     */
    gradientHeight?: number;
    /**
     * The gradient's width
     */
    gradientWidth?: number;
    /**
     * The gradient's margins for the edge
     */
    gradientMargins?: number;
    /**
     * The gradient's tint color
     */
    gradientColor?: string;
    /**
     * The gradient's image, instead of the default image.
     * NOTE: pass an image for the right-hand side and it will be flipped to match the left-hand side
     */
    gradientImage?: ImageSourcePropType;
    /**
     * The index to currently focus on
     */
    focusIndex?: number;
}
declare const _default: any;
export default _default;
