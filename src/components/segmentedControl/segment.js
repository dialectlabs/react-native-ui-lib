import React, { useCallback, useMemo } from 'react';
import Reanimated, { useAnimatedStyle } from 'react-native-reanimated';
import { Spacings, Typography } from "../../style";
import { asBaseComponent } from "../../commons/new";
import TouchableOpacity from "../touchableOpacity";
/**
 * Segment sub-component for SegmentedControl component
 */
const Segment = React.memo(props => {
  const {
    activeColor,
    label,
    iconSource,
    iconStyle,
    selectedIndex,
    onLayout,
    onPress,
    inactiveColor,
    index,
    iconOnRight,
    style,
    testID
  } = props;
  const animatedTextStyle = useAnimatedStyle(() => {
    const color = selectedIndex?.value === index ? activeColor : inactiveColor;
    return {
      color
    };
  });
  const animatedIconStyle = useAnimatedStyle(() => {
    const tintColor = selectedIndex?.value === index ? activeColor : inactiveColor;
    return {
      tintColor
    };
  });
  const segmentStyle = useMemo(() => {
    return [{
      paddingHorizontal: Spacings.s3,
      paddingVertical: Spacings.s2
    }, style];
  }, [style]);
  const renderIcon = useCallback(() => {
    return iconSource && <Reanimated.Image source={iconSource} style={[animatedIconStyle, iconStyle]} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iconSource, iconStyle]);
  const onSegmentPress = useCallback(() => {
    selectedIndex?.value !== index && onPress?.(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, onPress]);
  const segmentOnLayout = useCallback(event => {
    onLayout?.(index, event);
  }, [onLayout, index]);
  return <TouchableOpacity onLayout={segmentOnLayout} style={segmentStyle} onPress={onSegmentPress} row flexG center testID={`${testID}.${index}`}>
      {!iconOnRight && renderIcon()}
      {label && <Reanimated.Text fsTagName={'unmasked'} numberOfLines={1} style={[animatedTextStyle, Typography.text90]}>
          {label}
        </Reanimated.Text>}
      {iconOnRight && renderIcon()}
    </TouchableOpacity>;
});
export default asBaseComponent(Segment);