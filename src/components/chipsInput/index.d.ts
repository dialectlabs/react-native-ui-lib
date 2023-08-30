import { TextFieldProps } from '../../incubator/TextField';
import { ChipProps } from '../chip';
export declare enum ChipsInputChangeReason {
    Added = "added",
    Removed = "removed"
}
export type ChipsInputChipProps = ChipProps & {
    invalid?: boolean;
};
export type ChipsInputProps = Omit<TextFieldProps, 'ref'> & {
    /**
     * Chip items to render in the input
     */
    chips?: ChipsInputChipProps[];
    /**
     * A default set of chip props to pass to all chips
     */
    defaultChipProps?: ChipProps;
    /**
     * A default set of chip props to pass to all invalid chips
     */
    invalidChipProps?: ChipProps;
    /**
     * Change callback for when chips changed (either added or removed)
     */
    onChange?: (chips: ChipsInputChipProps[], changeReason: ChipsInputChangeReason, updatedChip: ChipProps) => void;
    /**
     * Maximum chips
     */
    maxChips?: number;
};
declare const ChipsInput: any;
export default ChipsInput;
