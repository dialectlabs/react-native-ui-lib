import { ComponentProps } from '../../testkit/new/Component.driver';
export declare const TextDriver: (props: ComponentProps) => {
    getText: () => any;
    press: () => void;
    hasOnPress: () => boolean;
    onPressIn: () => void;
    hasOnPressIn: () => boolean;
    onPressOut: () => void;
    hasOnPressOut: () => boolean;
    onLongPress: () => void;
    hasOnLongPress: () => boolean;
    getElement: () => ReactTestInstance;
    exists: () => boolean;
    getProps: () => any;
};
