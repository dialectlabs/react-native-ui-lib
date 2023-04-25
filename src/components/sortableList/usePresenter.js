import { Easing } from 'react-native-reanimated';
export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 350
};
const usePresenter = () => {
  return {
    getTranslationByIndexChange: (newIndex, oldIndex, itemHeight) => {
      'worklet';

      if (newIndex === undefined) {
        return 0;
      }
      return (newIndex - oldIndex) * itemHeight;
    },
    getIndexByPosition: (positionY, itemHeight) => {
      'worklet';

      return Math.round(positionY / itemHeight);
    },
    getItemIndexById: (itemsOrder, itemId) => {
      'worklet';

      return itemsOrder.indexOf(itemId);
    },
    getIdByItemIndex: (itemsOrder, orderIndex) => {
      'worklet';

      return itemsOrder[orderIndex];
    }
  };
};
export default usePresenter;