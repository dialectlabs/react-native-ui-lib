import React from 'react';
import { TextFieldStaticMembers, TextFieldProps } from '../../incubator/TextField';
export interface TextFieldMigratorComponent extends React.ForwardRefExoticComponent<TextFieldProps>, TextFieldStaticMembers {
}
declare const TextFieldMigrator: TextFieldMigratorComponent;
export default TextFieldMigrator;
