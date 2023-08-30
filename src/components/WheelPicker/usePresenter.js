import _findIndex from "lodash/findIndex";
import _isNumber from "lodash/isNumber";
import _isString from "lodash/isString";
import React from 'react';
import useMiddleIndex from "./helpers/useListMiddleIndex";
const usePresenter = ({
  initialValue = 0,
  children,
  items: propItems,
  itemHeight,
  preferredNumVisibleRows
}) => {
  const extractItemsFromChildren = () => {
    const items = React.Children.map(children, child => {
      const childAsType = {
        value: child?.props.value,
        label: child?.props.label
      };
      return childAsType;
    });
    return items || [];
  };
  const items = children ? extractItemsFromChildren() : propItems || [];
  const middleIndex = useMiddleIndex({
    itemHeight,
    listSize: items.length
  });
  const getSelectedValueIndex = () => {
    if (_isString(initialValue) || _isNumber(initialValue)) {
      return _findIndex(items, {
        value: initialValue
      });
    }
    return _findIndex(items, {
      value: initialValue?.value
    });
  };
  const getRowItemAtOffset = offset => {
    const index = middleIndex(offset);
    const value = items[index].value;
    return {
      index,
      value
    };
  };
  return {
    index: getSelectedValueIndex(),
    items,
    height: itemHeight * preferredNumVisibleRows,
    getRowItemAtOffset
  };
};
export default usePresenter;