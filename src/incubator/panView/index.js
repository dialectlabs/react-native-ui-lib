import _isEmpty from "lodash/isEmpty";
import React from 'react';
import { useAnimatedStyle } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { asBaseComponent } from "../../commons/new";
import View from "../../components/view";
import { PanningDirections, PanningDirectionsEnum } from "./panningUtil";
import useHiddenLocation from "../hooks/useHiddenLocation";
import usePanGesture, { PanViewDirections, PanViewDirectionsEnum, PanViewDismissThreshold, DEFAULT_DIRECTIONS, DEFAULT_ANIMATION_CONFIG } from "./usePanGesture";
export { PanningDirections, PanningDirectionsEnum, PanViewDirections, PanViewDirectionsEnum, PanViewDismissThreshold, DEFAULT_DIRECTIONS, DEFAULT_ANIMATION_CONFIG };
const PanView = props => {
  const {
    directions = DEFAULT_DIRECTIONS,
    dismissible,
    animateToOrigin,
    onDismiss,
    directionLock,
    threshold,
    containerStyle,
    children,
    ...others
  } = props;
  const {
    setRef,
    onLayout,
    hiddenLocation
  } = useHiddenLocation();
  const {
    translation,
    panGestureEvent
  } = usePanGesture({
    directions,
    dismissible,
    animateToOrigin,
    onDismiss,
    directionLock,
    threshold,
    hiddenLocation
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: translation.x.value
      }, {
        translateY: translation.y.value
      }]
    };
  }, []);
  return <View ref={setRef} style={containerStyle} onLayout={onLayout}>
      <PanGestureHandler onGestureEvent={_isEmpty(directions) ? undefined : panGestureEvent}>
        <View reanimated style={animatedStyle}>
          <View {...others}>{children}</View>
        </View>
      </PanGestureHandler>
    </View>;
};
PanView.displayName = 'PanView';
PanView.directions = PanViewDirectionsEnum;
export default asBaseComponent(PanView);