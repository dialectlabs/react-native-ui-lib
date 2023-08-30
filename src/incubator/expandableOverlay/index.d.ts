import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from '../../components/touchableOpacity';
import { ModalProps, ModalTopBarProps } from '../../components/modal';
import { DialogProps as DialogPropsOld } from '../../components/dialog';
import { DialogProps as DialogPropsNew } from '../Dialog';
export interface ExpandableOverlayMethods {
    openExpandable: () => void;
    closeExpandable: () => void;
    toggleExpandable: () => void;
}
export interface RenderCustomOverlayProps extends ExpandableOverlayMethods {
    visible: boolean;
}
export interface _DialogPropsOld {
    /**
     * The props to pass to the dialog expandable container
     */
    dialogProps?: DialogPropsOld;
    migrateDialog?: false;
}
export interface _DialogPropsNew {
    /**
     * The props to pass to the dialog expandable container
     */
    dialogProps?: DialogPropsNew;
    /**
     * Migrate the Dialog to DialogNew (make sure you use only new props in dialogProps)
     */
    migrateDialog: true;
}
export type DialogProps = _DialogPropsOld | _DialogPropsNew;
export type ExpandableOverlayProps = TouchableOpacityProps & DialogProps & PropsWithChildren<{
    /**
     * The content to render inside the expandable modal/dialog
     */
    expandableContent?: React.ReactElement;
    /**
     * Whether to use a dialog as expandable container (by default the container will be a full screen modal)
     */
    useDialog?: boolean;
    /**
     * The props to pass to the modal expandable container
     */
    modalProps?: ModalProps;
    /**
     * Whether to render a modal top bar (relevant only for modal)
     */
    showTopBar?: boolean;
    /**
     * The modal top bar props to pass on
     */
    topBarProps?: ModalTopBarProps;
    /**
     * A custom overlay to render instead of Modal or Dialog components
     */
    renderCustomOverlay?: (props: RenderCustomOverlayProps) => React.ReactElement | undefined | null;
    /**
     * Disabled opening expandable overlay
     */
    disabled?: boolean;
}>;
declare const _default: React.ForwardRefExoticComponent<ExpandableOverlayProps & React.RefAttributes<ExpandableOverlayMethods>>;
export default _default;
