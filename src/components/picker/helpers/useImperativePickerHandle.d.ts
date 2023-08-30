import React from 'react';
import { ExpandableOverlayMethods } from '../../../incubator/expandableOverlay';
import { TextFieldMethods } from '../../../incubator/TextField';
declare const useImperativePickerHandle: (ref: React.Ref<any>, expandableRef: React.MutableRefObject<ExpandableOverlayMethods | null>) => React.MutableRefObject<TextFieldMethods | undefined>;
export default useImperativePickerHandle;
