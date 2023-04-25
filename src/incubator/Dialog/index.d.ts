import React from 'react';
import DialogHeader from './DialogHeader';
import { DialogProps, DialogDirections, DialogDirectionsEnum, DialogHeaderProps } from './types';
export { DialogProps, DialogDirections, DialogDirectionsEnum, DialogHeaderProps };
export interface DialogStatics {
    directions: typeof DialogDirectionsEnum;
    Header: typeof DialogHeader;
}
export interface DialogImperativeMethods {
    dismiss: () => void;
}
declare const _default: React.ComponentClass<import("./types")._DialogProps & {
    children?: React.ReactNode;
} & ThemeComponent, any> & DialogStatics;
export default _default;
