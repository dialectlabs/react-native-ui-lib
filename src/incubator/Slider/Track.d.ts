import { ReactElement } from 'react';
import { ViewProps, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
export interface Props extends ViewProps {
    animatedStyle?: any;
    disabled?: boolean;
    maximumTrackTintColor?: string;
    minimumTrackTintColor?: string;
    trackStyle?: StyleProp<ViewStyle>;
    renderTrack?: () => ReactElement | ReactElement[];
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
declare const Track: (props: Props) => JSX.Element;
export default Track;
