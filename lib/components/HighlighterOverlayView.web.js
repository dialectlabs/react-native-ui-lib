import React from 'react';
import { Modal } from 'react-native';
const HighlighterOverlayView = props => {
  const {
    visible,
    onRequestClose,
    children
  } = props;
  return <Modal visible={!!visible} animationType={'fade'} transparent onRequestClose={() => onRequestClose?.()}>

      {children}
    </Modal>;
};
HighlighterOverlayView.displayName = 'IGNORE';
export default HighlighterOverlayView;