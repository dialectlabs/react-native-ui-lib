/// <reference types="react" />
import { KeyboardTrackingViewProps } from './KeyboardTracking/KeyboardTrackingView';
import KeyboardRegistry from './KeyboardInput/KeyboardRegistry';
import KeyboardAccessoryView, { KeyboardAccessoryViewProps } from './KeyboardInput/KeyboardAccessoryView';
import KeyboardUtils from './KeyboardInput/utils/KeyboardUtils';
export { KeyboardTrackingViewProps, KeyboardAccessoryViewProps };
declare const _default: {
    KeyboardTrackingView: import("react").ForwardRefExoticComponent<Omit<KeyboardTrackingViewProps, "ref"> & import("react").RefAttributes<unknown>> & {
        scrollBehaviors: {
            NONE: any;
            SCROLL_TO_BOTTOM_INVERTED_ONLY: any;
            FIXED_OFFSET: any;
        };
    };
    KeyboardAwareInsetsView: {
        (props: KeyboardTrackingViewProps): JSX.Element;
        displayName: string;
    };
    KeyboardRegistry: typeof KeyboardRegistry;
    KeyboardAccessoryView: typeof KeyboardAccessoryView;
    KeyboardUtils: typeof KeyboardUtils;
};
export default _default;
