import { useModifiers, useThemeProps } from "../../hooks";
import React, { useEffect, useMemo, useState } from 'react';
import { View as RNView, SafeAreaView, Animated } from 'react-native';
import { Constants } from "../../commons/new";
const modifiersOptions = {
  backgroundColor: true,
  borderRadius: true,
  paddings: true,
  margins: true,
  alignments: true,
  flex: true,
  position: true
};

/**
 * @description: An enhanced View component
 * @extends: View
 * @extendsLink: https://reactnative.dev/docs/view
 * @modifiers: margins, paddings, alignments, background, borderRadius
 */
function View(props, ref) {
  const themeProps = useThemeProps(props, 'View');
  const {
    renderDelay,
    style,
    // (!) extract left, top, bottom... props to avoid passing them on Android
    /* eslint-disable */
    left,
    top,
    right,
    bottom,
    flex: propsFlex,
    /* eslint-enable */
    inaccessible,
    useSafeArea,
    animated,
    reanimated,
    children,
    backgroundColor: backgroundColorProps,
    ...others
  } = themeProps;
  const {
    backgroundColor: backgroundColorModifiers,
    borderRadius,
    paddings,
    margins,
    alignments,
    flexStyle,
    positionStyle
  } = useModifiers(themeProps, modifiersOptions);
  const [ready, setReady] = useState(!renderDelay);
  useEffect(() => {
    if (renderDelay) {
      setTimeout(() => {
        setReady(true);
      }, renderDelay);
    }
  }, []);
  const ViewContainer = useMemo(() => {
    const container = useSafeArea && Constants.isIOS ? SafeAreaView : RNView;
    if (reanimated) {
      const {
        default: Reanimated
      } = require('react-native-reanimated');
      return Reanimated.createAnimatedComponent(container);
    } else if (animated) {
      return Animated.createAnimatedComponent(container);
    }
    return container;
  }, [useSafeArea, animated, reanimated]);
  const _style = useMemo(() => {
    const backgroundColor = backgroundColorProps || backgroundColorModifiers;
    return [backgroundColor && {
      backgroundColor
    }, borderRadius && {
      borderRadius
    }, flexStyle, positionStyle, paddings, margins, alignments, style];
  }, [backgroundColorProps, backgroundColorModifiers, borderRadius, flexStyle, positionStyle, paddings, margins, alignments, style]);
  if (!ready) {
    return null;
  }
  return <ViewContainer
  //@ts-expect-error
  accessibilityElementsHidden={inaccessible} importantForAccessibility={inaccessible ? 'no-hide-descendants' : undefined} {...others} style={_style} ref={ref}>
      {children}
    </ViewContainer>;
}
export default React.forwardRef(View);