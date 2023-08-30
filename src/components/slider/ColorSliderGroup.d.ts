import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { GradientSliderTypes } from './GradientSlider';
type SliderOnValueChange = (value: string) => void;
export type ColorSliderGroupProps = {
    /**
     * The gradient color
     */
    initialColor: string;
    /**
     * Callback for onValueChange returns the new hex color
     */
    onValueChange?: SliderOnValueChange;
    /**
     * Group container style
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Sliders style
     */
    sliderContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Show the sliders labels (defaults are: Hue, Lightness, Saturation)
     */
    showLabels?: boolean;
    /**
     * In case you would like to change the default labels (translations etc.), you can provide
     * this prop with a map to the relevant labels ({hue: ..., lightness: ..., saturation: ...}).
     */
    labels?: {
        [key in GradientSliderTypes]: string;
    };
    /**
     * The labels style
     */
    labelsStyle?: StyleProp<TextStyle>;
    /**
     * If true the component will have accessibility features enabled
     */
    accessible?: boolean;
    /**
     * Whether to use the new Slider implementation using Reanimated
     */
    migrate?: boolean;
};
declare const _default: any;
export default _default;
