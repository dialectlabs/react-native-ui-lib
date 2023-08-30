import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import useGridLayout from "./useGridLayout";
import View from "../view";
import { GridListProps, GridListBaseProps } from "./types";
function GridList(props) {
  const {
    renderItem,
    numColumns,
    itemSpacing,
    maxItemWidth,
    listPadding = 0,
    keepItemSize,
    containerWidth,
    contentContainerStyle,
    ...others
  } = props;
  const {
    itemContainerStyle,
    numberOfColumns,
    listContentStyle
  } = useGridLayout({
    numColumns,
    itemSpacing,
    maxItemWidth,
    listPadding,
    keepItemSize,
    containerWidth,
    contentContainerStyle
  });
  const _renderItem = useCallback((...args) => {
    // @ts-expect-error
    return <View style={itemContainerStyle}>{renderItem?.(...args)}</View>;
  }, [renderItem, itemContainerStyle]);
  return <FlatList key={numberOfColumns} {...others} contentContainerStyle={listContentStyle} renderItem={_renderItem} numColumns={numberOfColumns} />;
}
export { GridListBaseProps, GridListProps };
export default GridList;