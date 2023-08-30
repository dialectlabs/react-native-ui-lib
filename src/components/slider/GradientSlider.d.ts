import { StyleProp, ViewStyle } from 'react-native';
import { SliderProps } from './index';
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
declare const _default: any;
export default _default;
