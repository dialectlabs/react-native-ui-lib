import { FieldStateProps } from './types';
export default function useFieldState({ validate, validationMessage, validateOnBlur, validateOnChange, validateOnStart, onChangeValidity, ...props }: FieldStateProps): {
    onFocus: (...args: any) => void;
    onBlur: (...args: any) => void;
    onChangeText: (text: string) => void;
    fieldState: {
        value: string | undefined;
        hasValue: boolean;
        isValid: boolean;
        isFocused: boolean;
        failingValidatorIndex: number | undefined;
    };
    validateField: (valueToValidate?: string | undefined) => boolean;
    checkValidity: (valueToValidate?: string | undefined) => boolean;
};
