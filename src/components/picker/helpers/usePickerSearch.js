import _filter from "lodash/filter";
import _isEmpty from "lodash/isEmpty";
import { useCallback, useState, useMemo } from 'react';
import { getItemLabel as getItemLabelPresenter, shouldFilterOut } from "../PickerPresenter";
const usePickerSearch = props => {
  const {
    showSearch,
    onSearchChange,
    children,
    getItemLabel
  } = props;
  const [searchValue, setSearchValue] = useState('');
  const _onSearchChange = useCallback(searchValue => {
    setSearchValue(searchValue);
    onSearchChange?.(searchValue);
  }, [onSearchChange]);
  const filteredChildren = useMemo(() => {
    if (showSearch && !_isEmpty(searchValue)) {
      // @ts-expect-error need to fix children type
      return _filter(children, child => {
        // @ts-expect-error need to fix children type to be based on PickerItemProps
        const {
          label,
          value,
          getItemLabel: childGetItemLabel
        } = child.props;
        const itemLabel = getItemLabelPresenter(label, value, childGetItemLabel || getItemLabel);
        return !shouldFilterOut(searchValue, itemLabel);
      });
    }
    return children;
  }, [showSearch, searchValue, children]);
  return {
    setSearchValue,
    onSearchChange: _onSearchChange,
    filteredChildren
  };
};
export default usePickerSearch;