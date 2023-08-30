import { PureComponent } from 'react';
import { ButtonSize, ButtonAnimationDirection, ButtonProps, ButtonState, Props } from './ButtonTypes';
export { ButtonSize, ButtonAnimationDirection, ButtonProps };
declare class Button extends PureComponent<Props, ButtonState> {
    static displayName: string;
    static defaultProps: {
        iconOnRight: boolean;
    };
    static sizes: typeof ButtonSize;
    static animationDirection: typeof ButtonAnimationDirection;
    constructor(props: Props);
    state: {
        size: undefined;
    };
    styles: any;
    componentDidUpdate(prevProps: Props): void;
    onLayout: (event: LayoutChangeEvent) => void;
    get isOutline(): boolean;
    get isLink(): any;
    get isFilled(): boolean;
    get isIconButton(): any;
    getBackgroundColor(): any;
    getActiveBackgroundColor(): any;
    getLabelColor(): string | undefined;
    getLabelSizeStyle(): any;
    getContainerSizeStyle(): any;
    getOutlineStyle(): {
        borderWidth: any;
        borderColor: any;
    } | undefined;
    getBorderRadiusStyle(): {
        borderRadius: any;
    };
    getShadowStyle(): any[] | undefined;
    getIconStyle(): any[];
    getAnimationDirectionStyle(): {
        alignSelf: string;
    } | undefined;
    renderIcon(): any;
    renderLabel(): any;
    render(): any;
}
export { Button };
declare const _default: any;
export default _default;
