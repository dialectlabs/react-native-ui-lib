import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { asBaseComponent } from "../../commons/new";
import Assets from "../../assets";
import { Colors } from "../../style";
import View from "../view";
import Button from "../button";
import ColorPalette from "../colorPalette";
import { SWATCH_MARGIN, SWATCH_SIZE } from "../colorSwatch";
import ColorPickerDialog from "./ColorPickerDialog";
const ACCESSIBILITY_LABELS = {
  addButton: 'add custom color using hex code',
  dismissButton: 'dismiss',
  doneButton: 'done',
  input: 'custom hex color code'
};

/**
 * @description: A color picker component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ColorPickerScreen.tsx
 * @notes: This is a screen width component
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ColorPicker/ColorPicker.gif?raw=true
 */
class ColorPicker extends PureComponent {
  static displayName = 'ColorPicker';
  static defaultProps = {
    accessibilityLabels: ACCESSIBILITY_LABELS,
    backgroundColor: Colors.$backgroundDefault
  };
  state = {
    show: false
  };
  get animatedIndex() {
    const {
      animatedIndex,
      colors
    } = this.props;
    if (animatedIndex === undefined) {
      return colors.length - 1;
    }
    return animatedIndex;
  }
  showDialog = () => {
    this.setState({
      show: true
    });
  };
  hideDialog = () => {
    this.setState({
      show: false
    });
  };
  render() {
    const {
      initialColor,
      colors,
      value,
      testID,
      accessibilityLabels,
      backgroundColor,
      onValueChange
    } = this.props;
    const {
      show
    } = this.state;
    return <View row testID={testID} style={{
      backgroundColor
    }}>
        <ColorPalette value={value} colors={colors} style={styles.palette} usePagination={false} animatedIndex={this.animatedIndex} onValueChange={onValueChange} testID={`${testID}-palette`} backgroundColor={backgroundColor} />
        <View style={[styles.buttonContainer, {
        backgroundColor
      }]}>
          <Button color={Colors.$textDefault} outlineColor={Colors.$textDefault} style={styles.button} round outline iconSource={Assets.icons.plusSmall} onPress={this.showDialog} testID={`${testID}-button`} accessibilityLabel={accessibilityLabels?.addButton} />
        </View>
        <ColorPickerDialog {...this.props} key={initialColor} visible={show} onDismiss={this.hideDialog} accessibilityLabels={{
        dismissButton: accessibilityLabels?.dismissButton,
        doneButton: accessibilityLabels?.doneButton,
        input: accessibilityLabels?.input
      }} />
      </View>;
  }
}
export default asBaseComponent(ColorPicker);
const plusButtonContainerWidth = SWATCH_SIZE + 20 + 12;
const plusButtonContainerHeight = 92 - 2 * SWATCH_MARGIN;
const styles = StyleSheet.create({
  palette: {
    paddingLeft: plusButtonContainerWidth
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    width: plusButtonContainerWidth,
    height: plusButtonContainerHeight,
    marginTop: SWATCH_MARGIN,
    marginBottom: SWATCH_MARGIN,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 1
  },
  button: {
    width: SWATCH_SIZE,
    height: SWATCH_SIZE,
    marginRight: 12
  }
});