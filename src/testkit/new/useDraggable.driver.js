import { fireEvent } from '@testing-library/react-native';
export const useDraggableDriver = driver => {
  const drag = distanceOrEvent => {
    let data;
    if (typeof distanceOrEvent === 'number') {
      const distance = distanceOrEvent;
      data = [{
        translationY: distance
      }];
    } else {
      const event = distanceOrEvent;
      data = event;
    }
    fireEvent(driver.getElement(), 'onPan', data);
  };
  return {
    ...driver,
    drag
  };
};