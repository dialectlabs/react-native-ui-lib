import React, { forwardRef } from 'react';
import { Platform, NativeModules } from 'react-native';
import { default as KeyboardTrackingViewIOS } from "./KeyboardTrackingView.ios";
import { default as KeyboardTrackingViewAndroid } from "./KeyboardTrackingView.android";
const isAndroid = Platform.OS === 'android';
const SCROLL_BEHAVIORS = {
  NONE: NativeModules.KeyboardTrackingViewTempManager?.KeyboardTrackingScrollBehaviorNone,
  SCROLL_TO_BOTTOM_INVERTED_ONLY: NativeModules.KeyboardTrackingViewTempManager?.KeyboardTrackingScrollBehaviorScrollToBottomInvertedOnly,
  FIXED_OFFSET: NativeModules.KeyboardTrackingViewTempManager?.KeyboardTrackingScrollBehaviorFixedOffset
};
const KeyboardTrackingView = forwardRef(({
  children,
  ...others
}, ref) => {
  const KeyboardTrackingViewContainer = isAndroid ? KeyboardTrackingViewAndroid : KeyboardTrackingViewIOS;
  return <KeyboardTrackingViewContainer {...others} ref={ref}>
      {children}
    </KeyboardTrackingViewContainer>;
});
export default KeyboardTrackingView;
// @ts-expect-error
KeyboardTrackingView.scrollBehaviors = SCROLL_BEHAVIORS;