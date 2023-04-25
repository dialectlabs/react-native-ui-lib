import _isUndefined from "lodash/isUndefined";
import _includes from "lodash/includes";
import _isEmpty from "lodash/isEmpty";
import _times from "lodash/times";
import { useState, useCallback, useEffect, useRef } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { useScrollTo } from "../../hooks";
export let OffsetType = /*#__PURE__*/function (OffsetType) {
  OffsetType["CENTER"] = "CENTER";
  OffsetType["DYNAMIC"] = "DYNAMIC";
  OffsetType["LEFT"] = "LEFT";
  OffsetType["RIGHT"] = "RIGHT";
  return OffsetType;
}({});

// TODO: this is what I want, is there a better way to do it?

const useScrollToItem = props => {
  const {
    scrollViewRef: propsScrollViewRef,
    itemsCount,
    selectedIndex,
    containerWidth,
    offsetType = OffsetType.CENTER,
    addOffsetMargin = true,
    outerSpacing = 0,
    innerSpacing = 0
  } = props;
  const itemsWidths = useRef(_times(itemsCount, () => null));
  const itemsWidthsAnimated = useSharedValue(_times(itemsCount, () => 0));
  const itemsOffsetsAnimated = useSharedValue(_times(itemsCount, () => 0));
  const currentIndex = useRef(selectedIndex || 0);
  const [offsets, setOffsets] = useState({
    CENTER: [],
    LEFT: [],
    RIGHT: []
  });
  const {
    scrollViewRef,
    scrollTo,
    onContentSizeChange,
    onLayout
  } = useScrollTo({
    scrollViewRef: propsScrollViewRef
  });

  // TODO: reset?
  //   useEffect(() => {
  //     itemsWidths.current = _.times(itemsCount, () => null);
  //   }, [itemsCount]);

  // const contentWidth = _.sum(itemsWidths);
  // TODO: const scrollEnabled = contentWidth.current > containerWidth;

  const setSnapBreakpoints = useCallback(widths => {
    if (_isEmpty(widths)) {
      return;
    }
    const screenCenter = containerWidth / 2;
    let index = 0;
    const centeredOffsets = [];
    let currentCenterOffset = outerSpacing;
    const leftOffsets = [];
    leftOffsets.push(outerSpacing - innerSpacing);
    const rightOffsets = [];
    rightOffsets.push(-containerWidth + widths[0] + outerSpacing + innerSpacing);
    while (index < itemsCount) {
      /* map animated widths and offsets */
      itemsWidthsAnimated.value[index] = widths[index];
      if (index > 0) {
        itemsOffsetsAnimated.value[index] = itemsOffsetsAnimated.value[index - 1] + itemsWidthsAnimated.value[index - 1];
      }

      /* calc center, left and right offsets */
      centeredOffsets[index] = currentCenterOffset - screenCenter + widths[index] / 2;
      ++index;
      currentCenterOffset += widths[index - 1] + innerSpacing;
      leftOffsets[index] = leftOffsets[index - 1] + widths[index - 1] + innerSpacing;
      rightOffsets[index] = rightOffsets[index - 1] + widths[index] + innerSpacing;
    }
    if (addOffsetMargin) {
      index = 1;
      while (index < itemsCount - 1) {
        leftOffsets[index] -= widths[index - 1];
        rightOffsets[index] += widths[index + 1] + innerSpacing;
        ++index;
      }
    }
    setOffsets({
      CENTER: centeredOffsets,
      LEFT: leftOffsets,
      RIGHT: rightOffsets
    }); // default for DYNAMIC is CENTER

    // trigger value change
    itemsWidthsAnimated.value = [...itemsWidthsAnimated.value];
    itemsOffsetsAnimated.value = [...itemsOffsetsAnimated.value];
  }, [itemsCount, outerSpacing, innerSpacing, addOffsetMargin, containerWidth]);
  const onItemLayout = useCallback((event, index) => {
    const {
      width
    } = event.nativeEvent.layout;
    itemsWidths.current[index] = width;
    if (!_includes(itemsWidths.current, null)) {
      setSnapBreakpoints(itemsWidths.current);
    }
  }, [setSnapBreakpoints]);
  const focusIndex = useCallback((index, animated = true) => {
    if (index >= 0 && offsets.CENTER.length > index) {
      if (offsetType !== OffsetType.DYNAMIC) {
        scrollTo(offsets[offsetType][index], animated);
      } else {
        const movingLeft = index < currentIndex.current;
        currentIndex.current = index;
        scrollTo(movingLeft ? offsets[OffsetType.RIGHT][index] : offsets[OffsetType.LEFT][index], animated);
      }
    }
  }, [offsets, offsetType, scrollTo]);
  useEffect(() => {
    if (!_isUndefined(selectedIndex)) {
      focusIndex(selectedIndex, false);
    }
  }, [selectedIndex, focusIndex]);
  const reset = useCallback(() => {
    for (let i = 0; i < itemsCount; ++i) {
      itemsWidths.current[i] = null;
      itemsWidthsAnimated.value[i] = 0;
      itemsOffsetsAnimated.value[i] = 0;
    }
    setOffsets({
      CENTER: [],
      LEFT: [],
      RIGHT: []
    });
  }, [itemsCount]);
  return {
    scrollViewRef,
    onItemLayout,
    itemsWidthsAnimated,
    itemsOffsetsAnimated,
    focusIndex,
    reset,
    onContentSizeChange,
    onLayout
  };
};
useScrollToItem.offsetType = OffsetType;
export default useScrollToItem;