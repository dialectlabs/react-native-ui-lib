import { Component, RefObject } from 'react';
import { ScrollView } from 'react-native';
import { CarouselProps, CarouselState, PageControlPosition } from './types';
export { CarouselProps, PageControlPosition };
type DefaultProps = Partial<CarouselProps>;
/**
 * @description: Carousel for scrolling pages horizontally
 * @gif: https://user-images.githubusercontent.com/1780255/107120258-40b5bc80-6895-11eb-9596-8065d3a940ff.gif, https://user-images.githubusercontent.com/1780255/107120257-3eebf900-6895-11eb-9800-402e9e0dc692.gif
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CarouselScreen.tsx
 * @extends: ScrollView
 * @extendsLink: https://reactnative.dev/docs/scrollview
 * @notes: This is a screen width Component
 */
declare class Carousel extends Component<CarouselProps, CarouselState> {
    static displayName: string;
    static defaultProps: DefaultProps;
    static pageControlPositions: typeof PageControlPosition;
    carousel: RefObject<ScrollView>;
    autoplayTimer?: ReturnType<typeof setTimeout>;
    orientationChange?: boolean;
    skippedInitialScroll?: boolean;
    isAutoScrolled: boolean;
    private dimensionsChangeListener;
    constructor(props: CarouselProps);
    static getDerivedStateFromProps(nextProps: CarouselProps, prevState: CarouselState): {
        pageWidth: number;
        initialOffset: {
            x: number;
            y: number;
        };
        prevProps: CarouselProps;
    } | {
        prevProps: CarouselProps;
        pageWidth?: undefined;
        initialOffset?: undefined;
    } | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: CarouselProps): void;
    onOrientationChanged: () => void;
    getItemSpacings(props: CarouselProps): number;
    getContainerMarginHorizontal: () => number;
    getContainerPaddingVertical: () => number;
    updateOffset: (animated?: boolean) => void;
    startAutoPlay(): void;
    stopAutoPlay(): void;
    resetAutoPlay(): void;
    goToPage(pageIndex: number, animated?: boolean): void;
    goToNextPage(): void;
    getCalcIndex(index: number): number;
    getSnapToOffsets: () => number[] | undefined;
    getInitialContentOffset: (snapToOffsets: number[] | undefined) => any;
    shouldUsePageWidth(): any;
    shouldEnablePagination(): any;
    shouldAllowAccessibilityLayout(): any;
    onContentSizeChange: () => void;
    onContainerLayout: ({ nativeEvent: { layout: { width: containerWidth, height: containerHeight } } }: LayoutChangeEvent) => void;
    onMomentumScrollEnd: () => void;
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onScrollEvent: any;
    renderChild: (child: ReactNode, key: Key) => JSX.Element | undefined;
    renderChildren(): any;
    renderPageControl(): any;
    renderCounter(): any;
    renderAccessibleLayout(): any;
    renderCarousel(): any;
    render(): any;
}
export { Carousel };
declare const _default: any;
export default _default;
