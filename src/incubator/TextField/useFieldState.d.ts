import { FieldStateProps } from './types';
export default function useFieldState({ validate, validationMessage, validateOnBlur, validateOnChange, validateOnStart, onValidationFailed, onChangeValidity, ...props }: FieldStateProps): {
    onFocus: any;
    onBlur: any;
    onChangeText: any;
    fieldState: any;
    validateField: any;
    checkValidity: any;
};
