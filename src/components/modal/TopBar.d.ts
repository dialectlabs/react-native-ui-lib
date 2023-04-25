import React from 'react';
import { StyleProp, TextStyle, ImageSourcePropType } from 'react-native';
import { ViewProps } from '../../components/view';
import { ButtonProps } from '../../components/button';
export interface ModalTopBarProps {
    /**
     * title to display in the center of the top bar
     */
    title?: string;
    /**
     * title custom style
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * done action props (Button props)
     */
    doneButtonProps?: Omit<ButtonProps, 'onPress'>;
    /**
     * done action label
     */
    doneLabel?: string;
    /**
     * done action icon
     */
    doneIcon?: ImageSourcePropType;
    /**
     * done action callback
     */
    onDone?: (props?: any) => void;
    /**
     * cancel action props (Button props)
     */
    cancelButtonProps?: Omit<ButtonProps, 'onPress'>;
    /**
     * cancel action label
     */
    cancelLabel?: string;
    /**
     * cancel action icon
     */
    cancelIcon?: ImageSourcePropType;
    /**
     * cancel action callback
     */
    onCancel?: (props?: any) => void;
    /**
     * buttons to render on the right side of the top bar
     */
    rightButtons?: topBarButtonProp | topBarButtonProp[];
    /**
     * buttons to render on the left side of the top bar
     */
    leftButtons?: topBarButtonProp | topBarButtonProp[];
    /**
     * whether to include status bar or not (height claculations)
     */
    includeStatusBar?: boolean;
    /**
     * style for the TopBar container
     */
    containerStyle?: ViewProps['style'];
    /**
     * Whether or not to handle SafeArea
     */
    useSafeArea?: boolean;
}
type topBarButtonProp = {
    onPress?: (props: any) => void;
    label?: string;
    icon?: ImageSourcePropType;
    accessibilityLabel?: string;
    buttonProps?: Omit<ButtonProps, 'onPress'>;
};
declare const _default: React.ComponentClass<ModalTopBarProps & ThemeComponent, any>;
export default _default;
