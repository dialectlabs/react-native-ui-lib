import tinycolor from 'tinycolor2';
import { StyleProp, ViewStyle } from 'react-native';
export declare enum GradientTypes {
    HUE = "hue",
    LIGHTNESS = "lightness",
    SATURATION = "saturation"
}
export interface GradientProps {
    color?: string | tinycolor.ColorFormats.HSLA;
    type?: GradientTypes;
    numberOfSteps: number;
    style?: StyleProp<ViewStyle>;
}
declare const Gradient: {
    (props: GradientProps): JSX.Element;
    types: typeof GradientTypes;
};
export default Gradient;
