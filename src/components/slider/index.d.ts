import React, { PureComponent, ReactElement } from 'react';
import { Animated, StyleProp, ViewStyle, PanResponderGestureState, GestureResponderEvent, LayoutChangeEvent, AccessibilityActionEvent, AccessibilityRole, View as RNView } from 'react-native';
import { ThumbProps } from './Thumb';
export type SliderOnValueChange = (value: number) => void;
export type SliderOnRangeChange = (values: {
    min: number;
    max: number;
}) => void;
export type SliderProps = Omit<ThumbProps, 'ref'> & {
    /**
     * Initial value
     */
    value?: number;
    /**
     * Track minimum value
     */
    minimumValue?: number;
    /**
     * Track maximum value
     */
    maximumValue?: number;
    /**
     * Initial minimum value (when useRange is true)
     */
    initialMinimumValue?: number;
    /**
     * Initial maximum value (when useRange is true)
     */
    initialMaximumValue?: number;
    /**
     * Step value of the slider. The value should be between 0 and (maximumValue - minimumValue)
     */
    step?: number;
    /**
     * The color used for the track from minimum value to current value
     */
    minimumTrackTintColor?: string;
    /**
     * The track color
     */
    maximumTrackTintColor?: string;
    /**
     * Custom render instead of rendering the track
     */
    renderTrack?: () => ReactElement | ReactElement[];
    /**
     * Callback for onValueChange
     */
    onValueChange?: SliderOnValueChange;
    /**
     * Callback that notifies about slider seeking is started
     */
    onSeekStart?: () => void;
    /**
     * Callback that notifies about slider seeking is finished
     */
    onSeekEnd?: () => void;
    /**
     * Callback that notifies when the reset function was invoked
     */
    onReset?: () => void;
    /**
     * The container style
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * The track style
     */
    trackStyle?: StyleProp<ViewStyle>;
    /**
     * If true the Slider will be disabled and will appear in disabled color
     */
    disabled?: boolean;
    /**
     * If true the Slider will display a second thumb for the min value
     */
    useRange?: boolean;
    /**
     * If true the min and max thumbs will not overlap
     */
    useGap?: boolean;
    /**
     * Callback for onRangeChange. Returns values object with the min and max values
     */
    onRangeChange?: SliderOnRangeChange;
    /**
     * If true the Slider will stay in LTR mode even if the app is on RTL mode
     */
    disableRTL?: boolean;
    /**
     * If true the component will have accessibility features enabled
     */
    accessible?: boolean;
    /**
     * The slider's test identifier
     */
    testID?: string;
} & typeof defaultProps;
interface State {
    containerSize: Measurements;
    trackSize: Measurements;
    thumbSize: Measurements;
    thumbActiveAnimation: Animated.Value;
    measureCompleted: boolean;
}
type Measurements = {
    width: number;
    height: number;
};
type MeasuredVariableName = 'containerSize' | 'trackSize' | 'thumbSize';
declare const defaultProps: {
    value: number;
    minimumValue: number;
    maximumValue: number;
    step: number;
    thumbHitSlop: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    useGap: boolean;
};
/**
 * @description: A Slider component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SliderScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Slider/Slider.gif?raw=true
 */
export default class Slider extends PureComponent<SliderProps, State> {
    static displayName: string;
    static defaultProps: {
        value: number;
        minimumValue: number;
        maximumValue: number;
        step: number;
        thumbHitSlop: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        useGap: boolean;
    };
    private thumb;
    private minThumb;
    private activeThumbRef;
    private panResponder;
    private minTrack;
    private _minTrackStyles;
    private _x;
    private _x_min;
    private lastDx;
    private initialValue;
    private minInitialValue;
    private lastValue;
    private lastMinValue;
    private _thumbStyles;
    private _minThumbStyles;
    private initialThumbSize;
    private containerSize;
    private trackSize;
    private thumbSize;
    private dimensionsChangeListener;
    private didMount;
    constructor(props: SliderProps);
    reset(): void;
    getInitialValue(): number;
    checkProps(props: SliderProps): void;
    getAccessibilityProps(): {
        accessibilityLabel: string;
        accessible: boolean;
        accessibilityRole: AccessibilityRole;
        accessibilityStates: string[];
        accessibilityActions: {
            name: string;
            label: string;
        }[];
    };
    componentDidUpdate(prevProps: SliderProps, prevState: State): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleMoveShouldSetPanResponder: () => boolean;
    handlePanResponderGrant: () => void;
    handlePanResponderMove: (_e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    handlePanResponderEnd: () => void;
    setActiveThumb: (ref: React.RefObject<RNView>) => void;
    get_x(): number;
    set_x(x: number): void;
    update(dx: number): void;
    bounceToStep(): void;
    updateValue(x: number): void;
    moveTo(x: number): void;
    moveMinTo(x: number): void;
    updateTrackStepAndStyle: ({ nativeEvent }: GestureResponderEvent) => void;
    /** Values */
    get disableRTL(): boolean | undefined;
    shouldForceLTR: boolean | undefined;
    isDefaultThumbActive: () => boolean;
    getRoundedValue(value: number): number;
    getValueInRange(value: number): number;
    getXForValue(value: number): number;
    getValueForX(x: number): number;
    getRange(): number;
    onOrientationChanged: () => void;
    onRangeChange: (value: number) => void;
    onValueChange: (value: number) => void;
    onSeekStart(): void;
    onSeekEnd(): void;
    onContainerLayout: (nativeEvent: LayoutChangeEvent) => void;
    onTrackLayout: (nativeEvent: LayoutChangeEvent) => void;
    onThumbLayout: (nativeEvent: LayoutChangeEvent) => void;
    handleTrackPress: (event: GestureResponderEvent) => void;
    handleMeasure: (name: MeasuredVariableName, { nativeEvent }: LayoutChangeEvent) => void;
    onAccessibilityAction: (event: AccessibilityActionEvent) => void;
    onMinTouchStart: () => void;
    onTouchStart: () => void;
    getThumbProps: () => {
        disabled: boolean | undefined;
        thumbTintColor: string | undefined;
        thumbStyle: ViewStyle | undefined;
        activeThumbStyle: ViewStyle | undefined;
        disableActiveStyling: boolean | undefined;
        thumbHitSlop: import("react-native").Insets & {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        onLayout: (nativeEvent: LayoutChangeEvent) => void;
    };
    renderMinThumb: () => JSX.Element;
    renderThumb: () => JSX.Element;
    renderTrack(): JSX.Element;
    renderRangeThumb(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
