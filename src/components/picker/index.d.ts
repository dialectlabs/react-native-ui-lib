import React from 'react';
import PickerItem from './PickerItem';
import { extractPickerItems } from './PickerPresenter';
import { PickerProps, PickerItemProps, PickerValue, PickerModes, PickerFieldTypes, PickerSearchStyle, PickerMethods } from './types';
type PickerStatics = {
    Item: typeof PickerItem;
    modes: typeof PickerModes;
    fieldTypes: typeof PickerFieldTypes;
    extractPickerItems: typeof extractPickerItems;
};
declare const Picker: React.ForwardRefExoticComponent<(Omit<import("./types").PickerPropsWithSingle, "ref"> | Omit<import("./types").PickerPropsWithMulti, "ref">) & React.RefAttributes<unknown>>;
export { PickerProps, PickerItemProps, PickerValue, PickerModes, PickerFieldTypes, PickerSearchStyle, PickerMethods };
export { Picker };
declare const _default: React.ForwardRefExoticComponent<(Omit<import("./types").PickerPropsWithSingle, "ref"> | Omit<import("./types").PickerPropsWithMulti, "ref">) & React.RefAttributes<unknown>> & PickerStatics;
export default _default;
