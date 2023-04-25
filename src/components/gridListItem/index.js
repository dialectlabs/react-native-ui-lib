import _isNil from "lodash/isNil";
import _get from "lodash/get";
import _isFunction from "lodash/isFunction";
import _isPlainObject from "lodash/isPlainObject";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as Modifiers from "../../commons/modifiers";
import { Colors, Spacings, Typography } from "../../style";
import View from "../view";
import TouchableOpacity from "../touchableOpacity";
import Text from "../text";
import Image from "../image";
/**
 * @description: A single grid view/list item component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/GridViewScreen.tsx
 */
class GridListItem extends Component {
  static displayName = 'GridListItem';
  static defaultProps = {
    itemSize: 48
  };
  state = {};
  onItemPress = () => {
    this.props.onPress?.(this.props);
  };
  getItemSizeObj() {
    const {
      itemSize
    } = this.props;
    if (_isPlainObject(itemSize)) {
      return itemSize;
    }
    return {
      width: itemSize,
      height: itemSize
    };
  }
  renderContent({
    text,
    typography,
    color,
    numberOfLines = 1,
    style,
    testID
  }) {
    const {
      alignToStart
    } = this.props;
    if (text) {
      return <Text testID={testID}
      // @ts-ignore
      style={[style, Typography[typography], color && {
        color
      }, alignToStart && styles.contentAlignedToStart]} numberOfLines={numberOfLines}>
          {text}
        </Text>;
    }
  }
  render() {
    const {
      testID,
      imageProps,
      alignToStart,
      containerStyle,
      containerProps,
      renderCustomItem,
      children,
      title,
      titleTypography,
      titleColor = Colors.$textDefault,
      titleLines,
      overlayText,
      overlayTextContainerStyle,
      subtitle,
      subtitleTypography,
      subtitleColor = Colors.$textDefault,
      subtitleLines,
      description,
      descriptionTypography,
      descriptionColor = Colors.$textDefault,
      descriptionLines,
      onPress,
      renderOverlay
    } = this.props;
    const hasPress = _isFunction(onPress);
    const hasOverlay = _isFunction(renderOverlay);
    const Container = hasPress ? TouchableOpacity : View;
    const imageStyle = {
      ...this.getItemSizeObj()
    };
    const width = _get(imageStyle, 'width');
    const TextContainer = overlayText ? View : React.Fragment;
    const textContainerStyle = overlayText ? {
      style: [styles.overlayText, overlayTextContainerStyle]
    } : null;
    const imageBorderRadius = imageProps?.borderRadius;
    return <Container style={[styles.container, alignToStart && styles.containerAlignedToStart, {
      width
    }, containerStyle]} {...containerProps} onPress={hasPress ? this.onItemPress : undefined} accessible={renderCustomItem ? true : undefined} {...Modifiers.extractAccessibilityProps(this.props)}>
        {imageProps && <View style={[{
        borderRadius: imageBorderRadius
      }, imageStyle]}>
            <Image {...imageProps} style={[imageStyle, imageProps?.style]} />
            {children}
          </View>}
        {!_isNil(renderCustomItem) && <View style={{
        width
      }}>{renderCustomItem()}</View>}
        {hasOverlay && <View style={[styles.overlay, this.getItemSizeObj()]}>{renderOverlay?.()}</View>}
        <TextContainer {...textContainerStyle}>
          {this.renderContent({
          testID: `${testID}.title`,
          text: title,
          typography: titleTypography,
          color: titleColor,
          numberOfLines: titleLines,
          style: styles.title
        })}
          {this.renderContent({
          testID: `${testID}.subtitle`,
          text: subtitle,
          typography: subtitleTypography,
          color: subtitleColor,
          numberOfLines: subtitleLines,
          style: styles.subtitle
        })}
          {this.renderContent({
          testID: `${testID}.description`,
          text: description,
          typography: descriptionTypography,
          color: descriptionColor,
          numberOfLines: descriptionLines,
          style: styles.description
        })}
        </TextContainer>
      </Container>;
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  containerAlignedToStart: {
    alignItems: 'flex-start'
  },
  title: {
    marginTop: Spacings.s1,
    textAlign: 'center',
    ...Typography.bodySmallBold
  },
  subtitle: {
    textAlign: 'center',
    ...Typography.subtext
  },
  description: {
    textAlign: 'center',
    ...Typography.subtext
  },
  contentAlignedToStart: {
    textAlign: 'left'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    left: 10
  }
});
export default GridListItem;