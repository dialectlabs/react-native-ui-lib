import { fireEvent } from '@testing-library/react-native';
export const usePressableDriver = driver => {
  const press = () => {
    fireEvent.press(driver.getElement());
  };
  const hasOnPress = () => {
    return typeof driver.getProps().onPress === 'function';
  };
  const onPressIn = () => {
    fireEvent(driver.getElement(), 'onPressIn');
  };
  const hasOnPressIn = () => {
    return typeof driver.getProps().onPressIn === 'function';
  };
  const onPressOut = () => {
    fireEvent(driver.getElement(), 'onPresonPressOutsIn');
  };
  const hasOnPressOut = () => {
    return typeof driver.getProps().onPressOut === 'function';
  };
  const onLongPress = () => {
    fireEvent(driver.getElement(), 'onLongPress');
  };
  const hasOnLongPress = () => {
    return typeof driver.getProps().onLongPress === 'function';
  };
  return {
    ...driver,
    press,
    hasOnPress,
    onPressIn,
    hasOnPressIn,
    onPressOut,
    hasOnPressOut,
    onLongPress,
    hasOnLongPress
  };
};