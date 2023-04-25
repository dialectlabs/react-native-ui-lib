import { PureComponent } from 'react';
import { ColorPickerDialogProps } from './ColorPickerDialog';
interface Props extends ColorPickerDialogProps {
    /**
     * Array of colors for the picker's color palette (hex values)
     */
    colors: string[];
    /**
     * The value of the selected swatch // TODO: rename prop 'selectedValue'
     */
    value?: string;
    /**
     * The index of the item to animate at first render (default is last)
     */
    animatedIndex?: number;
    /**
     * onValueChange callback for the picker's color palette change
     */
    onValueChange?: (value: string, options: object) => void;
    /**
     * Accessibility labels as an object of strings, ex.
     * {
     *  addButton: 'add custom color using hex code',
     *  dismissButton: 'dismiss',
     *  doneButton: 'done',
     *  input: 'custom hex color code'
     * }
     */
    accessibilityLabels?: {
        addButton?: string;
        dismissButton?: string;
        doneButton?: string;
        input?: string;
    };
    testID?: string;
    /**
     * The ColorPicker's background color
     */
    backgroundColor?: string;
}
export type ColorPickerProps = Props;
/**
 * @description: A color picker component
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ColorPickerScreen.tsx
 * @notes: This is a screen width component
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ColorPicker/ColorPicker.gif?raw=true
 */
declare class ColorPicker extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        accessibilityLabels: {
            addButton: string;
            dismissButton: string;
            doneButton: string;
            input: string;
        };
        backgroundColor: string;
    };
    state: {
        show: boolean;
    };
    get animatedIndex(): number;
    showDialog: () => void;
    hideDialog: () => void;
    render(): JSX.Element;
    onValueChange: (value: string, options: object) => void;
}
export default ColorPicker;
