import React, { useCallback, useState, forwardRef, useImperativeHandle } from 'react';
import TouchableOpacity from "../../components/touchableOpacity";
import View from "../../components/view";
import Modal from "../../components/modal";
import DialogOld from "../../components/dialog";
import DialogNew from "../Dialog";
import { Colors } from "../../style";
const ExpandableOverlay = (props, ref) => {
  const {
    children,
    expandableContent,
    useDialog,
    modalProps,
    dialogProps,
    migrateDialog,
    showTopBar,
    topBarProps,
    renderCustomOverlay,
    disabled,
    onPress,
    customValue,
    testID,
    ...others
  } = props;
  const [visible, setExpandableVisible] = useState(false);
  const openExpandable = useCallback(() => {
    setExpandableVisible(true);
    onPress?.(props);
  }, [onPress, customValue]);
  const closeExpandable = useCallback(() => {
    setExpandableVisible(false);
    useDialog ? dialogProps?.onDismiss?.() : modalProps?.onDismiss?.();
  }, [useDialog, dialogProps?.onDismiss, modalProps?.onDismiss]);
  const toggleExpandable = useCallback(() => visible ? closeExpandable() : openExpandable(), [visible, openExpandable, closeExpandable]);
  useImperativeHandle(ref, () => ({
    openExpandable,
    closeExpandable,
    toggleExpandable
  }));
  const renderModal = () => {
    return <Modal testID={`${testID}.overlay`} overlayBackgroundColor={Colors.$backgroundDefault} {...modalProps} visible={visible} onDismiss={closeExpandable}>
        {showTopBar && <Modal.TopBar onDone={closeExpandable} {...topBarProps} />}
        {expandableContent}
      </Modal>;
  };
  const renderDialog = () => {
    const Dialog = migrateDialog ? DialogNew : DialogOld;
    return (
      // @ts-expect-error
      <Dialog testID={`${testID}.overlay`} {...dialogProps} visible={visible} onDismiss={closeExpandable}>
        {expandableContent}
      </Dialog>
    );
  };
  const renderOverlay = () => {
    if (renderCustomOverlay) {
      return renderCustomOverlay({
        visible,
        openExpandable,
        closeExpandable,
        toggleExpandable
      });
    } else {
      return useDialog ? renderDialog() : renderModal();
    }
  };
  return <TouchableOpacity {...others} onPress={openExpandable} disabled={disabled} testID={testID}>
      <View pointerEvents="none">{children}</View>
      {renderOverlay()}
    </TouchableOpacity>;
};
export default forwardRef(ExpandableOverlay);