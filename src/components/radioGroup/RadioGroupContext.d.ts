export interface RadioGroupContextProps {
    /**
     * The identifier value of the radio button. must be different than other RadioButtons in the same group
     */
    value?: string | number | boolean;
    /**
     * Invoked once when value changes, by selecting one of the radio buttons in the group
     */
    onValueChange?: (value: string | number | boolean) => void;
}
export type RadioGroupContextPropTypes = RadioGroupContextProps;
declare const _default: any;
export default _default;
