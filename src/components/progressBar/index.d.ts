import { PureComponent } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
/**
 * @description: Progress bar
 * @example:https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ProgressBarScreen.tsx
 */
interface Props {
    /**
     * The progress of the bar from 0 to 100
     */
    progress?: number;
    /**
     *  FullWidth Ui preset
     */
    fullWidth?: boolean;
    /**
     * Override container style
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Progress color
     */
    progressColor?: string;
    /**
     * Custom element to render on top of the animated progress
     */
    customElement?: JSX.Element;
    testID?: string;
}
export type ProgressBarProps = Props;
interface State {
    containerWidth?: number;
}
declare class ProgressBar extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: Partial<Props>;
    progressAnimation: Animated.Value;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    getContainerWidth: (event: LayoutChangeEvent) => void;
    animateProgress(toValue?: number): void;
    getAccessibilityProps(): any;
    getContainerStyle(): any;
    getProgressStyle(): any;
    renderCustomElement(): any;
    render(): any;
}
export { ProgressBar };
declare const _default: any;
export default _default;
