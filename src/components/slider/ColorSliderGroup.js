import _invoke from "lodash/invoke";
import React, { PureComponent } from 'react';
import { asBaseComponent } from "../../commons/new";
import GradientSlider from "./GradientSlider";
import SliderGroup from "./context/SliderGroup";
import Text from "../text";
/**
 * @description: A Gradient Slider component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SliderScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ColorSliderGroup/ColorSliderGroup.gif?raw=true
 */
class ColorSliderGroup extends PureComponent {
  static displayName = 'ColorSliderGroup';
  static defaultProps = {
    labels: {
      hue: 'Hue',
      lightness: 'Lightness',
      saturation: 'Saturation'
    }
  };
  state = {
    initialColor: this.props.initialColor
  };
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (prevState.initialColor !== nextProps.initialColor) {
      return {
        initialColor: nextProps.initialColor
      };
    }
    return null;
  };
  onValueChange = value => {
    _invoke(this.props, 'onValueChange', value);
  };
  renderSlider = type => {
    const {
      sliderContainerStyle,
      showLabels,
      labelsStyle,
      accessible,
      labels
    } = this.props;
    return <>
        {showLabels && labels && <Text $textNeutral text80 style={labelsStyle} accessible={accessible}>
            {labels[type]}
          </Text>}
        <GradientSlider color={this.props.initialColor} type={type} containerStyle={sliderContainerStyle} accessible={accessible} />
      </>;
  };
  render() {
    const {
      containerStyle
    } = this.props;
    const {
      initialColor
    } = this.state;
    return <SliderGroup style={containerStyle} color={initialColor} onValueChange={this.onValueChange}>
        {this.renderSlider(GradientSlider.types.HUE)}
        {this.renderSlider(GradientSlider.types.LIGHTNESS)}
        {this.renderSlider(GradientSlider.types.SATURATION)}
      </SliderGroup>;
  }
}
export default asBaseComponent(ColorSliderGroup);