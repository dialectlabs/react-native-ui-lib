import { StyleProp, ViewStyle } from 'react-native';
import { ViewProps } from '../../components/view';
import { PanningDirections, PanningDirectionsEnum } from './panningUtil';
import { PanGestureProps, PanViewDirections, PanViewDirectionsEnum, PanViewDismissThreshold, DEFAULT_DIRECTIONS, DEFAULT_ANIMATION_CONFIG } from './usePanGesture';
export { PanningDirections, PanningDirectionsEnum, PanViewDirections, PanViewDirectionsEnum, PanViewDismissThreshold, DEFAULT_DIRECTIONS, DEFAULT_ANIMATION_CONFIG };
export interface PanViewProps extends Omit<PanGestureProps, 'hiddenLocation'>, ViewProps {
    /**
     * Add a style to the container
     */
    containerStyle?: StyleProp<ViewStyle>;
}
declare const _default: any;
export default _default;
