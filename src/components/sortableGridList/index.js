import _mapKeys from "lodash/mapKeys";
import _map from "lodash/map";
import React, { useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { useDidUpdate } from "../../hooks";
import SortableItem from "./SortableItem";
import usePresenter from "./usePresenter";
import { SortableGridListProps } from "./types";
import useGridLayout, { DEFAULT_ITEM_SPACINGS, DEFAULT_NUM_COLUMNS } from "../gridList/useGridLayout";
function generateItemsOrder(data) {
  return _map(data, item => item.id);
}
function SortableGridList(props) {
  const {
    renderItem,
    onOrderChange,
    ...others
  } = props;
  const {
    itemContainerStyle,
    numberOfColumns,
    listContentStyle
  } = useGridLayout(props);
  const {
    numColumns = DEFAULT_NUM_COLUMNS,
    itemSpacing = DEFAULT_ITEM_SPACINGS,
    data
  } = others;
  const itemsOrder = useSharedValue(generateItemsOrder(data));
  useDidUpdate(() => {
    itemsOrder.value = generateItemsOrder(data);
  }, [data]);

  // TODO: Get the number of columns from GridList calculation somehow
  const presenter = usePresenter(numColumns, itemSpacing);
  const onChange = useCallback(() => {
    const newData = [];
    const dataByIds = _mapKeys(data, 'id');
    if (data?.length) {
      itemsOrder.value.forEach(itemId => {
        newData.push(dataByIds[itemId]);
      });
    }
    onOrderChange?.(newData, itemsOrder.value);
  }, [onOrderChange, data]);
  const _renderItem = useCallback(({
    item,
    index
  }) => {
    const lastItemInRow = (index + 1) % numberOfColumns === 0;
    return <SortableItem key={item.id} data={data} {...presenter} style={[itemContainerStyle, lastItemInRow && {
      marginRight: 0
    }]} itemsOrder={itemsOrder} id={item.id} onChange={onChange}>
        {/* @ts-expect-error */}
        {renderItem({
        item,
        index
      })}
      </SortableItem>;
  }, [data]);
  return <GestureHandlerRootView>
      <ScrollView contentContainerStyle={[styles.listContent, listContentStyle]}>
        {data?.map((item, index) => _renderItem({
        item,
        index
      }))}
      </ScrollView>
    </GestureHandlerRootView>;
}
export { SortableGridListProps };
export default SortableGridList;
const styles = StyleSheet.create({
  listContent: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});