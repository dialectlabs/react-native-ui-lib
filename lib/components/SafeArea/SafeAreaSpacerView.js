import React from 'react';
import { View, requireNativeComponent, Platform } from 'react-native';
const NativeSafeAreaSpacerView = requireNativeComponent('SafeAreaSpacerView');
const isIOS = Platform.OS === 'ios';
const SafeAreaSpacerView = ({
  style
}) => {
  return (
    // @ts-ignore
    isIOS ? <NativeSafeAreaSpacerView style={style} /> : <View style={style} />
  );
};
SafeAreaSpacerView.displayName = 'IGNORE';
export default SafeAreaSpacerView;