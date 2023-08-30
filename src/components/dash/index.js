import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import View from "../view";
import { Colors } from "../../style";

//TODO: move to some global types (shared with Timeline component)

const Dash = props => {
  const {
    containerStyle,
    vertical,
    gap,
    length,
    thickness,
    color,
    style,
    testID
  } = props;
  const [measurements, setMeasurements] = useState();
  const onDashLayout = useCallback(event => {
    const {
      x,
      y,
      width,
      height
    } = event.nativeEvent.layout;
    setMeasurements({
      x,
      y,
      width,
      height
    });
  }, []);
  const dashStyle = useMemo(() => {
    const _style = {
      width: vertical ? thickness : length,
      height: vertical ? length : thickness,
      marginRight: vertical ? 0 : gap,
      marginBottom: vertical ? gap : 0,
      backgroundColor: color
    };
    return [style, _style];
  }, [vertical, length, thickness, gap, color, style]);
  const lineStyle = useMemo(() => {
    const directionStyle = vertical ? styles.column : styles.row;
    const sizeStyle = {
      width: vertical ? thickness : length,
      height: vertical ? length : thickness
    };
    return [directionStyle, sizeStyle, containerStyle];
  }, [containerStyle, vertical, thickness, length]);
  const renderDash = () => {
    const _length = (vertical ? measurements?.height : measurements?.width) || 0;
    const n = Math.ceil(_length / (gap + length));
    const dash = [];
    for (let i = 0; i < n; i++) {
      dash.push(<View key={i} style={dashStyle} />);
    }
    return dash;
  };
  return <View onLayout={onDashLayout} style={lineStyle} testID={testID}>
      {renderDash()}
    </View>;
};
export default Dash;
Dash.defaultProps = {
  gap: 6,
  length: 6,
  thickness: 2,
  color: Colors.black
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  }
});