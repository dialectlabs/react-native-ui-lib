import { PureComponent } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface ColorInfo {
    index?: number;
    tintColor?: string;
    /**
     * The color result with 6 characters (#FFFFFF and never #FFF)
     */
    hexString: string;
}
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
    onPress?: (value: string, colorInfo: ColorInfo) => void;
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
        isSelected: any;
        animatedOpacity: any;
        animatedScale: any;
    };
    styles: any;
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
    renderContent(): any;
    renderSwatch: () => any;
    render(): any;
}
export default ColorSwatch;
