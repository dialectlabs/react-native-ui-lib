import React from 'react';
import * as Modifiers from './modifiers';
export interface BaseComponentInjectedProps {
    /**
     * All generated styles from the modifiers props
     */
    modifiers: ReturnType<typeof Modifiers.generateModifiersStyle>;
}
export interface AsBaseComponentOptions {
    ignoreModifiers?: boolean;
    ignoreTheme?: boolean;
    modifiersOptions?: Modifiers.ModifiersOptions;
}
declare function asBaseComponent<PROPS, STATICS = {}>(WrappedComponent: React.ComponentType<any>, options?: AsBaseComponentOptions): React.ComponentClass<PROPS> & STATICS;
export default asBaseComponent;
