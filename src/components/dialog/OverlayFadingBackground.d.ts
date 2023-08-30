interface Props {
    testID?: string;
    dialogVisibility?: boolean;
    modalVisibility?: boolean;
    overlayBackgroundColor?: string;
    onFadeDone?: () => void;
    fadeOut?: boolean;
}
declare const OverlayFadingBackground: {
    ({ testID, dialogVisibility, modalVisibility, overlayBackgroundColor, onFadeDone: propsOnFadeDone, fadeOut }: Props): any;
    displayName: string;
};
export default OverlayFadingBackground;
