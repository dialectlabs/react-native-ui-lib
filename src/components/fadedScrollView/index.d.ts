import React from 'react';
import { ScrollViewProps } from 'react-native';
import { FaderProps } from '../fader';
export type FadedScrollViewProps = ScrollViewProps & {
    /**
     * Show a fader at the start of the scroll
     */
    showStartFader?: boolean;
    /**
     * Additional props for the start fader
     */
    startFaderProps?: Omit<FaderProps, 'visible' | 'position'>;
    /**
     * Show a fader at the end of the scroll
     */
    showEndFader?: boolean;
    /**
     * Additional props for the end fader
     */
    endFaderProps?: Omit<FaderProps, 'visible' | 'position'>;
    /**
     * Use the react-native-gesture-handler version, useful when using react-native-reanimated
     */
    useGesture?: boolean;
    children?: React.ReactNode | React.ReactNode[];
};
declare const _default: any;
export default _default;
