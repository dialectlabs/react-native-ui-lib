import { ImageProps } from 'react-native';
import { MarginModifiers } from '../../commons/new';
import { RecorderProps } from '../../typings/recorderTypes';
export type IconProps = Omit<ImageProps, 'source'> & MarginModifiers & RecorderProps & {
    /**
     * if provided icon source will be driven from asset name
     */
    assetName?: string;
    /**
     * the asset group, default is "icons"
     */
    assetGroup?: string;
    /**
     * the icon tint
     */
    tintColor?: string | null;
    /**
     * the icon size
     */
    size?: number;
    /**
     * whether the icon should flip horizontally on RTL
     */
    supportRTL?: boolean;
    source?: ImageProps['source'];
};
declare const _default: any;
export default _default;
