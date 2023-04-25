import React, { Component } from 'react';
import { StyleSheet, Platform, NativeModules, NativeEventEmitter, DeviceEventEmitter, processColor, BackHandler } from 'react-native';
import KeyboardTrackingView from "../KeyboardTracking/KeyboardTrackingView";
import CustomKeyboardView from "./CustomKeyboardView";
import KeyboardUtils from "./utils/KeyboardUtils";
const IsIOS = Platform.OS === 'ios';
const IsAndroid = Platform.OS === 'android';
/**
 * @description: View that allows replacing the default keyboard with other components
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/nativeComponentScreens/keyboardAccessory/KeyboardAccessoryViewScreen.js
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/KeyboardAccessoryView/KeyboardAccessoryView.gif?raw=true
 */
class KeyboardAccessoryView extends Component {
  static scrollBehaviors = KeyboardTrackingView.scrollBehaviors;
  static defaultProps = {
    revealKeyboardInteractive: false,
    manageScrollView: true,
    requiresSameParentToManageScrollView: false,
    addBottomView: false,
    allowHitsOutsideBounds: false,
    scrollBehavior: KeyboardTrackingView.scrollBehaviors.FIXED_OFFSET
  };

  // TODO: fix

  constructor(props) {
    super(props);
    this.onContainerComponentHeightChanged = this.onContainerComponentHeightChanged.bind(this);
    this.processInitialProps = this.processInitialProps.bind(this);
    this.registerForKeyboardResignedEvent = this.registerForKeyboardResignedEvent.bind(this);
    this.registerAndroidBackHandler = this.registerAndroidBackHandler.bind(this);
    this.onAndroidBackPressed = this.onAndroidBackPressed.bind(this);
    this.registerForKeyboardResignedEvent();
    this.registerAndroidBackHandler();
  }
  componentWillUnmount() {
    if (this.customInputControllerEventsSubscriber) {
      this.customInputControllerEventsSubscriber.remove();
    }
    if (IsAndroid) {
      BackHandler.removeEventListener('hardwareBackPress', this.onAndroidBackPressed);
    }
  }
  onContainerComponentHeightChanged(event) {
    const {
      onHeightChanged
    } = this.props;
    if (onHeightChanged) {
      onHeightChanged(event.nativeEvent.layout.height);
    }
  }
  onAndroidBackPressed() {
    const {
      kbComponent
    } = this.props;
    if (kbComponent) {
      KeyboardUtils.dismiss();
      return true;
    }
    return false;
  }
  async getNativeProps() {
    if (this.trackingViewRef) {
      return await this.trackingViewRef.getNativeProps();
    }
    return {};
  }
  registerForKeyboardResignedEvent() {
    const {
      onKeyboardResigned
    } = this.props;
    let eventEmitter = null;
    if (IsIOS) {
      if (NativeModules.CustomInputControllerTemp) {
        eventEmitter = new NativeEventEmitter(NativeModules.CustomInputControllerTemp);
      }
    } else {
      eventEmitter = DeviceEventEmitter;
    }
    if (eventEmitter !== null) {
      this.customInputControllerEventsSubscriber = eventEmitter.addListener('kbdResigned', () => {
        if (onKeyboardResigned) {
          onKeyboardResigned();
        }
      });
    }
  }
  registerAndroidBackHandler() {
    if (IsAndroid) {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPressed);
    }
  }
  processInitialProps() {
    const {
      kbInitialProps
    } = this.props;
    if (IsIOS && kbInitialProps && kbInitialProps.backgroundColor) {
      const processedProps = Object.assign({}, kbInitialProps);
      processedProps.backgroundColor = processColor(processedProps.backgroundColor);
      return processedProps;
    }
    return kbInitialProps;
  }
  scrollToStart() {
    if (this.trackingViewRef) {
      this.trackingViewRef.scrollToStart();
    }
  }
  render() {
    const {
      renderContent,
      kbInputRef,
      kbComponent,
      onItemSelected,
      onRequestShowKeyboard,
      scrollBehavior,
      ...others
    } = this.props;
    return <KeyboardTrackingView {...others} scrollBehavior={scrollBehavior} ref={r => this.trackingViewRef = r} style={styles.trackingToolbarContainer} onLayout={this.onContainerComponentHeightChanged}>
        <>{renderContent?.()}</>
        <CustomKeyboardView inputRef={kbInputRef} component={kbComponent} initialProps={this.processInitialProps()} onItemSelected={onItemSelected} onRequestShowKeyboard={onRequestShowKeyboard} useSafeArea={others.useSafeArea} />
      </KeyboardTrackingView>;
  }
}
const styles = StyleSheet.create({
  trackingToolbarContainer: {
    ...Platform.select({
      ios: {
        ...StyleSheet.absoluteFillObject,
        top: undefined
      }
    })
  }
});
export default KeyboardAccessoryView;