import React, { Component } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { Colors, Spacings } from "../../style";
//@ts-ignore
import Assets from "../../assets";
import { asBaseComponent } from "../../commons/new";
import TouchableOpacity from "../touchableOpacity";
import Text from "../text";
import View from "../view";
import Icon from "../icon";
const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = Colors.$backgroundPrimaryHeavy;
const DEFAULT_ICON_COLOR = Colors.$iconDefaultLight;
const DEFAULT_DISABLED_COLOR = Colors.$backgroundDisabled;
const DEFAULT_BORDER_WIDTH = 2;
const DEFAULT_BORDER_RADIUS = 8;
/**
 * @description: Checkbox component for toggling boolean value related to some context
 * @extends: TouchableOpacity
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CheckboxScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Checkbox/Checkbox.gif?raw=true
 */

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
class Checkbox extends Component {
  static displayName = 'Checkbox';
  constructor(props) {
    super(props);
    this.state = {
      isChecked: new Animated.Value(this.props.value ? 1 : 0)
    };
    this.styles = createStyles(props);
    this.animationStyle = {
      opacity: this.state.isChecked,
      transform: [{
        scaleX: this.state.isChecked
      }, {
        scaleY: this.state.isChecked
      }]
    };
  }
  componentDidUpdate(prevProps) {
    const {
      value
    } = this.props;
    if (prevProps.value !== value) {
      this.animateCheckbox(value);
    }
  }
  getAccessibilityProps() {
    const {
      accessibilityLabel,
      disabled,
      value
    } = this.props;
    const checkedState = value ? 'checked' : 'unchecked';
    return {
      accessible: true,
      accessibilityLabel: accessibilityLabel ? `${accessibilityLabel} ${checkedState}` : `${checkedState}`,
      accessibilityRole: 'checkbox',
      accessibilityStates: disabled ? ['disabled'] : undefined
    };
  }
  animateCheckbox(value) {
    const {
      isChecked
    } = this.state;
    Animated.timing(isChecked, {
      duration: 170,
      easing: Easing.bezier(0.77, 0.0, 0.175, 1.0),
      toValue: Number(value),
      useNativeDriver: true
    }).start();
  }
  onPress = () => {
    const {
      disabled
    } = this.props;
    if (!disabled) {
      this.props.onValueChange?.(!this.props.value);
    }
  };
  getColor = () => this.props.disabled ? DEFAULT_DISABLED_COLOR : this.props.color || DEFAULT_COLOR;
  getBackgroundColor = () => this.props.outline ? 'transparent' : this.getColor();
  getTintColor = () => {
    const {
      outline,
      disabled,
      iconColor
    } = this.props;
    if (outline) {
      if (disabled) {
        return DEFAULT_DISABLED_COLOR;
      } else {
        return iconColor || DEFAULT_COLOR;
      }
    } else if (disabled) {
      return DEFAULT_ICON_COLOR;
    } else {
      return iconColor || DEFAULT_ICON_COLOR;
    }
  };
  getBorderStyle() {
    const borderColor = {
      borderColor: this.getColor()
    };
    const borderStyle = [this.styles.container, {
      borderWidth: DEFAULT_BORDER_WIDTH
    }, borderColor];
    return borderStyle;
  }
  renderCheckbox() {
    const {
      selectedIcon,
      label,
      testID,
      style,
      containerStyle,
      ...others
    } = this.props;
    return (
      //@ts-ignore
      <TouchableOpacity {...this.getAccessibilityProps()} activeOpacity={1} testID={testID} {...others} style={[this.getBorderStyle(), style, !label && containerStyle]} onPress={this.onPress}>
        {<Animated.View style={[this.styles.container, {
          opacity: this.animationStyle.opacity
        }, {
          backgroundColor: this.getBackgroundColor()
        }]}>
            <AnimatedIcon style={[this.styles.selectedIcon, {
            transform: this.animationStyle.transform
          }]} source={selectedIcon || Assets.icons.checkSmall} testID={`${testID}.selected`} tintColor={this.getTintColor()} />
          </Animated.View>}
      </TouchableOpacity>
    );
  }
  render() {
    const {
      label,
      labelStyle,
      containerStyle,
      labelProps
    } = this.props;
    return label ? <View row centerV style={containerStyle}>
        {this.renderCheckbox()}
        <Text flexS style={[this.styles.checkboxLabel, labelStyle]} {...labelProps} onPress={this.onPress}>
          {label}
        </Text>
      </View> : this.renderCheckbox();
  }
}
function createStyles(props) {
  const {
    color = DEFAULT_COLOR,
    iconColor = DEFAULT_ICON_COLOR,
    size = DEFAULT_SIZE,
    borderRadius = DEFAULT_BORDER_RADIUS
  } = props;
  return StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: color
    },
    selectedIcon: {
      tintColor: iconColor,
      alignItems: 'center',
      justifyContent: 'center'
    },
    checkboxLabel: {
      marginLeft: Spacings.s3,
      alignSelf: 'center',
      color: Colors.$textDefault
    }
  });
}
export default asBaseComponent(Checkbox);