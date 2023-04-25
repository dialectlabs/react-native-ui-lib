/**
 * Known issues with React Native TextInput component
 * 1. iOS - input inner padding is off in multiline mode
 * 2. Android - input has minHeight that can't be overridden with zero padding (unlike iOS)
 * 3. Passing typography preset that includes lineHeight usually cause alignment issues with
 * other elements (leading/trailing accessories). It usually best to set lineHeight with undefined
 */
import React from 'react';
import { TextFieldProps, ValidationMessagePosition, FieldContextType, TextFieldMethods, TextFieldRef, Validator } from './types';
interface StaticMembers {
    validationMessagePositions: typeof ValidationMessagePosition;
}
export { TextFieldProps, FieldContextType, StaticMembers as TextFieldStaticMembers, TextFieldMethods, TextFieldRef, ValidationMessagePosition as TextFieldValidationMessagePosition, Validator as TextFieldValidator };
declare const _default: React.ComponentClass<TextFieldProps & ThemeComponent, any> & StaticMembers;
export default _default;
