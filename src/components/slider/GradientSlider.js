import _isEmpty from "lodash/isEmpty";
import tinycolor from 'tinycolor2';
import React, { Component } from 'react';
import { Colors } from "../../style";
import { asBaseComponent, forwardRef } from "../../commons/new";
import Slider from "./index";
import asSliderGroupChild from "./context/asSliderGroupChild";
import Gradient from "../gradient";
export let GradientSliderTypes = /*#__PURE__*/function (GradientSliderTypes) {
  GradientSliderTypes["DEFAULT"] = "default";
  GradientSliderTypes["HUE"] = "hue";
  GradientSliderTypes["LIGHTNESS"] = "lightness";
  GradientSliderTypes["SATURATION"] = "saturation";
  return GradientSliderTypes;
}({});
const defaultProps = {
  type: GradientSliderTypes.DEFAULT,
  gradientSteps: 120,
  color: Colors.$backgroundPrimaryHeavy
};

/**
 * @description: A Gradient Slider component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SliderScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/GradientSlider/GradientSlider.gif?raw=true
 */
class GradientSlider extends Component {
  static displayName = 'GradientSlider';
  static defaultProps = defaultProps;
  static types = GradientSliderTypes;
  constructor(props) {
    super(props);
    this.state = {
      prevColor: props.color,
      initialColor: Colors.getHSL(props.color),
      color: Colors.getHSL(props.color)
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevColor !== nextProps.color) {
      return {
        color: Colors.getHSL(nextProps.color),
        prevColor: Colors.getHSL(nextProps.color)
      };
    }
    return null;
  }
  slider = React.createRef();
  reset = () => {
    this.updateColor(this.state.initialColor);
  };
  getColor() {
    const {
      color
    } = this.state;
    const {
      value
    } = this.props.sliderContext;
    return value || color;
  }
  getStepColor = i => {
    const color = this.getColor();
    return tinycolor({
      ...color,
      a: i
    }).toHslString();
  };
  renderDefaultGradient = () => {
    const color = this.getColor();
    const {
      gradientSteps
    } = this.props;
    return <Gradient color={color} numberOfSteps={gradientSteps} />;
  };
  renderHueGradient = () => {
    const {
      gradientSteps
    } = this.props;
    return <Gradient type={Gradient.types.HUE} numberOfSteps={gradientSteps} />;
  };
  renderLightnessGradient = () => {
    const color = this.getColor();
    const {
      gradientSteps
    } = this.props;
    return <Gradient type={Gradient.types.LIGHTNESS} color={color} numberOfSteps={gradientSteps} />;
  };
  renderSaturationGradient = () => {
    const color = this.getColor();
    const {
      gradientSteps
    } = this.props;
    return <Gradient type={Gradient.types.SATURATION} color={color} numberOfSteps={gradientSteps} />;
  };
  onValueChange = (value, alpha) => {
    // alpha returns for type.DEFAULT
    this.props.onValueChange?.(value, alpha);
  };
  updateColor(color) {
    if (!_isEmpty(this.props.sliderContext)) {
      this.props.sliderContext.setValue?.(color);
    } else {
      this.setState({
        color
      });
      const hex = Colors.getHexString(color);
      this.onValueChange(hex, color.a);
    }
  }
  updateAlpha = a => {
    const color = this.getColor();
    this.updateColor({
      ...color,
      a
    });
  };
  updateHue = h => {
    const color = this.getColor();
    this.updateColor({
      ...color,
      h
    });
  };
  updateLightness = l => {
    const color = this.getColor();
    this.updateColor({
      ...color,
      l
    });
  };
  updateSaturation = s => {
    const color = this.getColor();
    this.updateColor({
      ...color,
      s
    });
  };
  render() {
    const {
      type,
      containerStyle,
      disabled,
      accessible,
      forwardedRef,
      ...others
    } = this.props;
    const initialColor = this.state.initialColor;
    const color = this.getColor();
    const thumbTintColor = Colors.getHexString(color);
    let step = 0.01;
    let maximumValue = 1;
    let value = color.a;
    let renderTrack = this.renderDefaultGradient;
    let onValueChange = this.updateAlpha;
    switch (type) {
      case GradientSliderTypes.HUE:
        step = 1;
        maximumValue = 359;
        value = initialColor.h;
        renderTrack = this.renderHueGradient;
        onValueChange = this.updateHue;
        break;
      case GradientSliderTypes.LIGHTNESS:
        value = initialColor.l;
        renderTrack = this.renderLightnessGradient;
        onValueChange = this.updateLightness;
        break;
      case GradientSliderTypes.SATURATION:
        value = initialColor.s;
        renderTrack = this.renderSaturationGradient;
        onValueChange = this.updateSaturation;
        break;
      default:
        break;
    }
    return <Slider {...others} ref={forwardedRef} onReset={this.reset} renderTrack={renderTrack} step={step} maximumValue={maximumValue} value={value} thumbTintColor={thumbTintColor} onValueChange={onValueChange} containerStyle={containerStyle} disabled={disabled} accessible={accessible} useRange={false} />;
  }
}
export default asBaseComponent(forwardRef(asSliderGroupChild(GradientSlider)));