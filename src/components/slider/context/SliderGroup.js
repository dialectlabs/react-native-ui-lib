import React, { Component } from 'react';
import { Colors } from "../../../style";
import SliderContext from "./SliderContext";
import View from "../../view";
export default class SliderGroup extends Component {
  static displayName = 'IGNORE';
  constructor(props) {
    super(props);
    this.state = {
      value: Colors.getHSL(props.color)
    };
  }
  getContextProviderValue() {
    return {
      value: this.state.value,
      setValue: this.setValue
    };
  }
  setValue = value => {
    this.setState({
      value
    });
    this.props.onValueChange?.(Colors.getHexString(value));
  };
  render() {
    return <View {...this.props}>
        <SliderContext.Provider value={this.getContextProviderValue()}>{this.props.children}</SliderContext.Provider>
      </View>;
  }
}