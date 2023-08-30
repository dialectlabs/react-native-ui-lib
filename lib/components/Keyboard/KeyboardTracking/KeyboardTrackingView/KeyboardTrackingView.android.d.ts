import { PureComponent } from 'react';
declare class KeyboardTrackingView extends PureComponent {
    static displayName: string;
    render(): any;
    getNativeProps(): Promise<{
        trackingViewHeight: number;
        keyboardHeight: number;
        contentTopInset: number;
    }>;
    scrollToStart(): void;
}
export default KeyboardTrackingView;
