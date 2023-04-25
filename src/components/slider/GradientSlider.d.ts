import tinycolor from 'tinycolor2';
import React, { Component } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ForwardRefInjectedProps } from '../../commons/new';
import { SliderProps } from './index';
import { SliderContextProps } from './context/SliderContext';
type SliderOnValueChange = (value: string, alfa: number) => void;
export declare enum GradientSliderTypes {
    DEFAULT = "default",
    HUE = "hue",
    LIGHTNESS = "lightness",
    SATURATION = "saturation"
}
export type GradientSliderProps = Omit<SliderProps, 'onValueChange'> & {
    /**
     * The gradient color
     */
    color?: string;
    /**
     * The gradient type (default, hue, lightness, saturation)
     */
    type?: GradientSliderTypes;
    /**
     * The gradient steps
     */
    gradientSteps?: number;
    /**
     * Callback for onValueChange, returns the updated color
     */
    onValueChange?: SliderOnValueChange;
    /**
     * If true the component will have accessibility features enabled
     */
    accessible?: boolean;
    /**
     * The container style
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * If true the Slider will be disabled and will appear in disabled color
     */
    disabled?: boolean;
};
type GradientSliderComponentProps = {
    /**
     * Context of the slider group
     */
    sliderContext: SliderContextProps;
} & GradientSliderProps & typeof defaultProps;
type Props = GradientSliderComponentProps & ForwardRefInjectedProps;
interface GradientSliderState {
    color: tinycolor.ColorFormats.HSLA;
    initialColor: tinycolor.ColorFormats.HSLA;
    prevColor: string | undefined;
}
declare const defaultProps: {
    type: GradientSliderTypes;
    gradientSteps: number;
    color: string;
};
/**
 * @description: A Gradient Slider component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SliderScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/GradientSlider/GradientSlider.gif?raw=true
 */
declare class GradientSlider extends Component<Props, GradientSliderState> {
    static displayName: string;
    static defaultProps: {
        type: GradientSliderTypes;
        gradientSteps: number;
        color: string;
    };
    static types: typeof GradientSliderTypes;
    constructor(props: Props);
    static getDerivedStateFromProps(nextProps: Props, prevState: GradientSliderState): {
        color: tinycolor.ColorFormats.HSLA;
        prevColor: tinycolor.ColorFormats.HSLA;
    } | null;
    slider: React.RefObject<unknown>;
    reset: () => void;
    getColor(): tinycolor.ColorFormats.HSLA;
    getStepColor: (i: number) => string;
    renderDefaultGradient: () => JSX.Element;
    renderHueGradient: () => JSX.Element;
    renderLightnessGradient: () => JSX.Element;
    renderSaturationGradient: () => JSX.Element;
    onValueChange: (value: string, alpha: number) => void;
    updateColor(color: tinycolor.ColorFormats.HSLA): void;
    updateAlpha: (a: number) => void;
    updateHue: (h: number) => void;
    updateLightness: (l: number) => void;
    updateSaturation: (s: number) => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<{
    /**
     * Context of the slider group
     */
    sliderContext: SliderContextProps;
} & Omit<SliderProps, "onValueChange"> & {
    /**
     * The gradient color
     */
    color?: string | undefined;
    /**
     * The gradient type (default, hue, lightness, saturation)
     */
    type?: GradientSliderTypes | undefined;
    /**
     * The gradient steps
     */
    gradientSteps?: number | undefined;
    /**
     * Callback for onValueChange, returns the updated color
     */
    onValueChange?: SliderOnValueChange | undefined;
    /**
     * If true the component will have accessibility features enabled
     */
    accessible?: boolean | undefined;
    /**
     * The container style
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * If true the Slider will be disabled and will appear in disabled color
     */
    disabled?: boolean | undefined;
} & {
    type: GradientSliderTypes;
    gradientSteps: number;
    color: string;
} & ThemeComponent, any> & typeof GradientSlider;
export default _default;
