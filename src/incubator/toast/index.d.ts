import React from 'react';
import { ToastProps, ToastPresets } from './types';
export { ToastProps, ToastPresets };
declare const _default: React.ComponentClass<ToastProps & ThemeComponent, any> & {
    (props: React.PropsWithChildren<ToastProps>): JSX.Element | null;
    presets: typeof ToastPresets;
    displayName: string;
};
export default _default;
