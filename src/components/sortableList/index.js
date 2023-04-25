import _reduce from "lodash/reduce";
import _filter from "lodash/filter";
import _mapKeys from "lodash/mapKeys";
import _map from "lodash/map";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SortableListContext from "./SortableListContext";
import SortableListItem from "./SortableListItem";
import { useDidUpdate, useThemeProps } from "../../hooks";
import { SortableListProps, SortableListItemProps } from "./types";
export { SortableListProps, SortableListItemProps };
function generateItemsOrder(data) {
  return _map(data, item => item.id);
}
function generateLockedIds(data) {
  return _reduce(_filter(data, item => item.locked), (item, cur) => ({
    ...item,
    [cur.id]: true
  }), {});
}
const SortableList = props => {
  const themeProps = useThemeProps(props, 'SortableList');
  const {
    data,
    onOrderChange,
    enableHaptic,
    scale,
    ...others
  } = themeProps;
  const itemsOrder = useSharedValue(generateItemsOrder(data));
  const lockedIds = useSharedValue(generateLockedIds(data));
  const itemHeight = useSharedValue(52);
  useDidUpdate(() => {
    itemsOrder.value = generateItemsOrder(data);
  }, [data]);
  const onChange = useCallback(() => {
    const newData = [];
    const dataByIds = _mapKeys(data, 'id');
    if (data?.length) {
      itemsOrder.value.forEach(itemId => {
        newData.push(dataByIds[itemId]);
      });
    }
    onOrderChange?.(newData);
  }, [onOrderChange, data]);
  const onItemLayout = useCallback(event => {
    // Round height for Android
    const newHeight = Math.round(event.nativeEvent.layout.height);
    // Check validity for tests
    if (newHeight) {
      itemHeight.value = newHeight;
    }
  }, []);
  const context = useMemo(() => {
    return {
      data,
      itemsOrder,
      lockedIds,
      onChange,
      itemHeight,
      onItemLayout,
      enableHaptic,
      scale
    };
  }, [data]);
  return <GestureHandlerRootView>
      <SortableListContext.Provider value={context}>
        <FlatList {...others} data={data} CellRendererComponent={SortableListItem} removeClippedSubviews={false} // Workaround for crashing on Android (ArrayIndexOutOfBoundsException in ViewGroupDrawingOrderHelper.getChildDrawingOrder)
      />
      </SortableListContext.Provider>
    </GestureHandlerRootView>;
};
export default SortableList;