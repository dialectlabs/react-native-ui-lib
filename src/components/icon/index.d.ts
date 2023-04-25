import React from 'react';
import { ImageProps } from 'react-native';
import { BaseComponentInjectedProps, MarginModifiers } from '../../commons/new';
export type IconProps = ImageProps & MarginModifiers & {
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
};
declare const _default: React.ComponentClass<ImageProps & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
    /**
     * if provided icon source will be driven from asset name
     */
    assetName?: string | undefined;
    /**
     * the asset group, default is "icons"
     */
    assetGroup?: string | undefined;
    /**
     * the icon tint
     */
    tintColor?: string | null | undefined;
    /**
     * the icon size
     */
    size?: number | undefined;
    /**
     * whether the icon should flip horizontally on RTL
     */
    supportRTL?: boolean | undefined;
} & ThemeComponent, any> & React.ForwardRefExoticComponent<ImageProps & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
    /**
     * if provided icon source will be driven from asset name
     */
    assetName?: string | undefined;
    /**
     * the asset group, default is "icons"
     */
    assetGroup?: string | undefined;
    /**
     * the icon tint
     */
    tintColor?: string | null | undefined;
    /**
     * the icon size
     */
    size?: number | undefined;
    /**
     * whether the icon should flip horizontally on RTL
     */
    supportRTL?: boolean | undefined;
} & BaseComponentInjectedProps & React.RefAttributes<unknown>>;
export default _default;
