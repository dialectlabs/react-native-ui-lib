import { ViewProps, ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
export interface Props extends ViewProps {
    defaultStyle?: SharedValue<ViewStyle>;
    activeStyle?: SharedValue<ViewStyle>;
    disableActiveStyling?: boolean;
    hitSlop?: ViewProps['hitSlop'];
    disabled?: boolean;
    onSeekStart?: () => void;
    onSeekEnd?: () => void;
    disableRTL?: boolean;
    start: SharedValue<number>;
    end: SharedValue<number>;
    offset: SharedValue<number>;
    shouldDisableRTL?: boolean;
    stepInterpolation?: () => number;
    shouldBounceToStep: boolean;
    stepInterpolatedValue: SharedValue<number>;
    gap?: number;
    secondary?: boolean;
}
declare const Thumb: (props: Props) => JSX.Element;
export default Thumb;
