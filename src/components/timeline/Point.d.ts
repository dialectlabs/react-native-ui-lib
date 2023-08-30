import { LayoutChangeEvent } from 'react-native';
import { PointProps } from './types';
type PointPropsInternal = PointProps & {
    onLayout?: (event: LayoutChangeEvent) => void;
};
declare const Point: (props: PointPropsInternal) => any;
export default Point;
