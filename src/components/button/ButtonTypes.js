import { PureComponent } from 'react';
export let ButtonSize = /*#__PURE__*/function (ButtonSize) {
  ButtonSize["xSmall"] = "xSmall";
  ButtonSize["small"] = "small";
  ButtonSize["medium"] = "medium";
  ButtonSize["large"] = "large";
  return ButtonSize;
}({});
export let ButtonAnimationDirection = /*#__PURE__*/function (ButtonAnimationDirection) {
  ButtonAnimationDirection["center"] = "center";
  ButtonAnimationDirection["left"] = "left";
  ButtonAnimationDirection["right"] = "right";
  return ButtonAnimationDirection;
}({});
export const DEFAULT_PROPS = {
  iconOnRight: false
};

/**
 * @description: Basic button component
 * @extends: TouchableOpacity
 * @modifiers: margin, background
 * @image: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Sizes.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Typographies.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Outlines.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Corners.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Custom.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Inspirations.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Round.png?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Full.png?raw=true
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Animated.gif?raw=true
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ButtonsScreen.tsx
 */
// @ts-ignore 
class FakeButtonForDocs extends PureComponent {
  // eslint-disable-line
  static displayName = 'Button';
  static defaultProps = DEFAULT_PROPS;
  render() {
    return null;
  }
}