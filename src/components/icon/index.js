import isUndefined from 'lodash/isUndefined';
import React, { useMemo, forwardRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import { asBaseComponent, Constants } from "../../commons/new";
import { getAsset, isSvg, isBase64ImageContent } from "../../utils/imageUtils";
import SvgImage from "../svgImage";

/**
 * @description: Icon component
 * @extends: Image
 * @extendsLink: https://reactnative.dev/docs/image
 */

const defaultWebIconSize = 16;
const Icon = forwardRef((props, ref) => {
  const {
    size = Constants.isWeb ? defaultWebIconSize : undefined,
    tintColor,
    style,
    supportRTL,
    source,
    assetGroup,
    assetName,
    modifiers,
    ...others
  } = props;
  const {
    margins
  } = modifiers;
  const iconSize = size ? {
    width: size,
    height: size
  } : undefined;
  const shouldFlipRTL = supportRTL && Constants.isRTL;
  const iconSource = useMemo(() => {
    if (!isUndefined(assetName)) {
      return getAsset(assetName, assetGroup);
    }
    return source;
  }, [source, assetGroup, assetName]);
  const renderImage = () => <Image {...others} ref={ref} source={iconSource} style={[style, margins, iconSize, shouldFlipRTL && styles.rtlFlipped, !!tintColor && {
    tintColor
  }]} />;
  const renderSvg = () => <SvgImage data={source} {...props} />;
  if (typeof source === 'string' && isBase64ImageContent(source) && Constants.isWeb) {
    return renderImage();
  }
  return isSvg(source) ? renderSvg() : renderImage();
});
Icon.displayName = 'Icon';
Icon.defaultProps = {
  assetGroup: 'icons'
};
export default asBaseComponent(Icon, {
  modifiersOptions: {
    margins: true
  }
});
const styles = StyleSheet.create({
  rtlFlipped: {
    transform: [{
      scaleX: -1
    }]
  }
});