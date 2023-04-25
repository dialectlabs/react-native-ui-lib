import _size from "lodash/size";
import _isUndefined from "lodash/isUndefined";
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Text from "../../components/text";
import FieldContext from "./FieldContext";
const CharCounter = ({
  maxLength,
  charCounterStyle,
  testID
}) => {
  const {
    value
  } = useContext(FieldContext);
  if (_isUndefined(maxLength)) {
    return null;
  }
  return <Text $textNeutral style={[styles.container, charCounterStyle]} testID={testID}>
      {`${_size(value)}/${maxLength}`}
    </Text>;
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    textAlign: 'right'
  }
});
CharCounter.displayName = 'Incubator.TextField';
export default CharCounter;