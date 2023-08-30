import { ToastProps } from '../types';
type UseToastAnimationProps = Pick<ToastProps, 'visible' | 'position' | 'onAnimationEnd' | 'enableHapticFeedback'> & {
    toastHeight?: number;
    playAccessibilityFeatures: () => void;
    setTimer: () => void;
};
declare const _default: ({ visible, position, toastHeight, onAnimationEnd, enableHapticFeedback, setTimer, playAccessibilityFeatures }: UseToastAnimationProps) => {
    isAnimating: any;
    toggleToast: (show?: boolean, { delay }?: {
        delay?: number | undefined;
    }) => void;
    opacityStyle: any;
    translateStyle: any;
};
export default _default;
