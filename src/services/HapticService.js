import { HapticFeedbackPackage } from "../optionalDependencies";
const options = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: false
};
export let HapticType = /*#__PURE__*/function (HapticType) {
  HapticType["selection"] = "selection";
  HapticType["impactLight"] = "impactLight";
  HapticType["impactMedium"] = "impactMedium";
  HapticType["impactHeavy"] = "impactHeavy";
  HapticType["notificationSuccess"] = "notificationSuccess";
  HapticType["notificationWarning"] = "notificationWarning";
  HapticType["notificationError"] = "notificationError";
  return HapticType;
}({});
function triggerHaptic(hapticType, componentName) {
  if (HapticFeedbackPackage) {
    HapticFeedbackPackage.trigger(hapticType, options);
  } else {
    console.error(`RNUILib ${componentName}'s requires installing "react-native-haptic-feedback" dependency`);
  }
}
export default {
  HapticType,
  triggerHaptic
};