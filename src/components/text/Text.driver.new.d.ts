/// <reference types="react" />
import { TextProps } from './index';
import { ComponentProps } from '../../testkit/new/Component.driver';
export declare const TextDriver: (props: ComponentProps) => {
    getText: () => import("react").ReactNode;
    press: () => void;
    hasOnPress: () => boolean;
    onPressIn: () => void;
    hasOnPressIn: () => boolean;
    onPressOut: () => void;
    hasOnPressOut: () => boolean;
    onLongPress: () => void;
    hasOnLongPress: () => boolean;
    getElement: () => import("react-test-renderer").ReactTestInstance;
    exists: () => boolean;
    getProps: () => TextProps;
};
