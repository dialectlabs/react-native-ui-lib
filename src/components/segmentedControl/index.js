import _map from "lodash/map";
import _throttle from "lodash/throttle";
import React, { useRef, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Reanimated, { Easing, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';
import { Colors, BorderRadiuses, Spacings } from "../../style";
import { Constants, asBaseComponent } from "../../commons/new";
import View from "../view";
import Segment, { SegmentedControlItemProps } from "./segment";
const BORDER_WIDTH = 1;
const TIMING_CONFIG = {
  duration: 300,
  easing: Easing.bezier(0.33, 1, 0.68, 1)
};
export { SegmentedControlItemProps };
/**
 * @description: SegmentedControl component for toggling two values or more
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SegmentedControlScreen.tsx
 */
const SegmentedControl = props => {
  const {
    onChangeIndex,
    initialIndex = 0,
    containerStyle,
    style,
    segments,
    activeColor = Colors.$textPrimary,
    borderRadius = BorderRadiuses.br100,
    backgroundColor = Colors.$backgroundNeutralLight,
    activeBackgroundColor = Colors.$backgroundDefault,
    inactiveColor = Colors.$textNeutralHeavy,
    outlineColor = activeColor,
    outlineWidth = BORDER_WIDTH,
    throttleTime = 0,
    segmentsStyle: segmentsStyleProp,
    testID
  } = props;
  const animatedSelectedIndex = useSharedValue(initialIndex);
  const segmentsStyle = useSharedValue([]);
  const segmentedControlHeight = useSharedValue(0);
  const segmentsCounter = useRef(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeIndex = useCallback(_throttle(() => {
    onChangeIndex?.(animatedSelectedIndex.value);
  }, throttleTime, {
    trailing: true,
    leading: false
  }), [throttleTime, onChangeIndex]);
  useAnimatedReaction(() => {
    return animatedSelectedIndex.value;
  }, (selected, previous) => {
    if (selected !== -1 && previous !== null && selected !== previous) {
      onChangeIndex && runOnJS(changeIndex)();
    }
  }, [changeIndex]);
  const onSegmentPress = useCallback(index => {
    animatedSelectedIndex.value = index;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onLayout = useCallback((index, event) => {
    const {
      x,
      width,
      height
    } = event.nativeEvent.layout;
    segmentsStyle.value[index] = {
      x,
      width
    };
    segmentedControlHeight.value = height - 2 * BORDER_WIDTH;
    segmentsCounter.current++;
    if (segmentsCounter.current === segments?.length) {
      segmentsStyle.value = [...segmentsStyle.value];
      segmentsCounter.current = 0; // in case onLayout will be called again (orientation change etc.)
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [initialIndex, segments?.length]);
  const animatedStyle = useAnimatedStyle(() => {
    if (segmentsStyle.value.length !== 0) {
      const inset = withTiming(segmentsStyle.value[animatedSelectedIndex.value].x, TIMING_CONFIG);
      const width = withTiming(segmentsStyle.value[animatedSelectedIndex.value].width - 2 * BORDER_WIDTH, TIMING_CONFIG);
      const height = segmentedControlHeight.value;
      return Constants.isRTL ? {
        width,
        right: inset,
        height
      } : {
        width,
        left: inset,
        height
      };
    }
    return {};
  });
  const renderSegments = () => _map(segments, (_value, index) => {
    return <Segment key={index} onLayout={onLayout} index={index} onPress={onSegmentPress} selectedIndex={animatedSelectedIndex} activeColor={activeColor} inactiveColor={inactiveColor} style={segmentsStyleProp} {...segments?.[index]} testID={testID} />;
  });
  return <View style={containerStyle} testID={testID}>
      <View row center style={[styles.container, style, {
      borderRadius,
      backgroundColor
    }]}>
        <Reanimated.View style={[styles.selectedSegment, {
        borderColor: outlineColor,
        borderRadius,
        backgroundColor: activeBackgroundColor,
        borderWidth: outlineWidth
      }, animatedStyle]} />
        {renderSegments()}
      </View>
    </View>;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.$backgroundNeutralLight,
    borderColor: Colors.$outlineDefault,
    borderWidth: BORDER_WIDTH
  },
  selectedSegment: {
    position: 'absolute'
  },
  segment: {
    paddingHorizontal: Spacings.s3
  }
});
SegmentedControl.displayName = 'SegmentedControl';
export default asBaseComponent(SegmentedControl);