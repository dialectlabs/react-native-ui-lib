import { ViewProps, ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
interface ThumbProps extends ViewProps {
    start: SharedValue<number>;
    end: SharedValue<number>;
    offset: SharedValue<number>;
    stepInterpolatedValue: SharedValue<number>;
    stepInterpolation?: () => number;
    shouldBounceToStep?: boolean;
    gap?: number;
    disabled?: boolean;
    secondary?: boolean;
    defaultStyle?: SharedValue<ViewStyle>;
    activeStyle?: SharedValue<ViewStyle>;
    disableActiveStyling?: boolean;
    hitSlop?: ViewProps['hitSlop'];
    shouldDisableRTL?: boolean;
    onSeekStart?: () => void;
    onSeekEnd?: () => void;
}
declare const Thumb: (props: ThumbProps) => any;
export default Thumb;
