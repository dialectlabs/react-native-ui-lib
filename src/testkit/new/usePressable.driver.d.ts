import { ComponentDriverResult } from './Component.driver';
import { PressableProps } from 'react-native';
export interface PressableDriverResult<Props> extends ComponentDriverResult<Props> {
    press: () => void;
    hasOnPress: () => boolean;
    onPressIn: () => void;
    hasOnPressIn: () => boolean;
    onPressOut: () => void;
    hasOnPressOut: () => boolean;
    onLongPress: () => void;
    hasOnLongPress: () => boolean;
}
export type PressableDriverProps = Partial<Pick<PressableProps, 'onPress' | 'onPressIn' | 'onPressOut' | 'onLongPress'>>;
export declare const usePressableDriver: <Props extends Partial<Pick<PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">>, DriverProps extends ComponentDriverResult<Props> = ComponentDriverResult<Props>>(driver: DriverProps) => PressableDriverResult<Props> & DriverProps;
