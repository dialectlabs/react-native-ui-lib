import { PureComponent } from 'react';
import { Animated, LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
interface Props {
    /**
     * The identifier value of the ColorSwatch in a ColorSwatch palette.
     * Must be different than other ColorSwatches in the same group
     */
    value?: string;
    /**
     * The color of the ColorSwatch
     */
    color?: string;
    /**
     * Is the initial state is selected
     */
    selected?: boolean;
    /**
     * Is the initial state is unavailable
     */
    unavailable?: boolean;
    /**
     * Is first render should be animated
     */
    animated?: boolean;
    /**
     * onPress callback
     */
    onPress?: (value: string, options: object) => void;
    index?: number;
    style?: StyleProp<ViewStyle>;
    testID?: string;
    /**
     * Color swatch size
     */
    size?: number;
}
export type ColorSwatchProps = Props;
export declare const SWATCH_MARGIN = 12;
export declare const SWATCH_SIZE: number;
/**
 * @description: A color swatch component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ColorPickerScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ColorPalette/ColorPalette.gif?raw=true
 */
declare class ColorSwatch extends PureComponent<Props> {
    static displayName: string;
    state: {
        isSelected: Animated.Value;
        animatedOpacity: Animated.Value;
        animatedScale: Animated.Value;
    };
    styles: {
        container: {
            backgroundColor: string;
            borderWidth: number | undefined;
            borderColor: string;
            margin: number;
        };
        transparentImage: {
            width: number;
            height: number;
            borderWidth: number;
            borderRadius: number;
            borderColor: string;
            position: "absolute";
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        };
        unavailable: {
            height: string;
            width: number;
            transform: {
                rotate: string;
            }[];
            opacity: number;
        };
    };
    layout: {
        x: number;
        y: number;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    animateSwatch(newValue: number): void;
    animateCheckmark(newValue?: boolean): void;
    onPress: () => void;
    getTintColor(color?: string): string | undefined;
    getAccessibilityInfo(): {
        accessibilityLabel: any;
        accessibilityStates: string[];
    };
    getLayout(): {
        x: number;
        y: number;
    };
    onLayout: (event: LayoutChangeEvent) => void;
    renderContent(): JSX.Element;
    renderSwatch: () => JSX.Element;
    render(): JSX.Element;
}
export default ColorSwatch;
