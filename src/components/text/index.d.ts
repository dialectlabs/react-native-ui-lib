import { PureComponent } from 'react';
import { TextProps as RNTextProps, TextStyle, Animated, StyleProp } from 'react-native';
import { BaseComponentInjectedProps, ForwardRefInjectedProps, MarginModifiers, TypographyModifiers, ColorsModifiers, FlexModifiers } from '../../commons/new';
import { RecorderProps } from '../../typings/recorderTypes';
export interface HighlightStringProps {
    /**
     * Substring to highlight
     */
    string: string;
    /**
     * Callback for when a highlighted substring is pressed
     */
    onPress?: () => void;
    /**
     * Custom highlight style for this specific highlighted substring. If not provided, the general `highlightStyle` prop style will be used
     */
    style?: TextStyle;
    testID?: string;
}
export type HighlightString = string | HighlightStringProps;
export type TextProps = RNTextProps & TypographyModifiers & ColorsModifiers & MarginModifiers & FlexModifiers & RecorderProps & {
    /**
     * color of the text
     */
    color?: string;
    /**
     * Whether to center the text (using textAlign)
     */
    center?: boolean;
    /**
     * Whether to change the text to uppercase
     */
    uppercase?: boolean;
    /**
     * Whether to add an underline
     */
    underline?: boolean;
    /**
     * Substring to highlight. Can be a simple string or a HighlightStringProps object, or an array of the above
     */
    highlightString?: HighlightString | HighlightString[];
    /**
     * Custom highlight style for highlight string
     */
    highlightStyle?: TextStyle;
    /**
     * Use Animated.Text as a container
     */
    animated?: boolean;
    textAlign?: string;
    style?: StyleProp<TextStyle | Animated.AnimatedProps<TextStyle>>;
};
export type TextPropTypes = TextProps;
type PropsTypes = BaseComponentInjectedProps & ForwardRefInjectedProps & TextProps;
/**
 * @description: A wrapper for Text component with extra functionality like modifiers support
 * @extends: Text
 * @extendsLink: https://reactnative.dev/docs/text
 * @modifiers: margins, color, typography
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/TextScreen.tsx
 * @image: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Text/Modifiers.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Text/Transformation.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Text/Highlights.png?raw=true
 */
declare class Text extends PureComponent<PropsTypes> {
    static displayName: string;
    private TextContainer;
    renderText(children: any): any;
    render(): any;
}
export { Text };
declare const _default: any;
export default _default;
