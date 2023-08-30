export const useComponentDriver = props => {
  const {
    renderTree,
    testID
  } = props;
  const getElement = () => {
    const element = renderTree.queryByTestId(testID);
    if (element) {
      return element;
    } else {
      throw new Error(`Could not find element with testID: ${testID}`);
    }
  };
  const exists = () => {
    try {
      getElement();
      return true;
    } catch {
      return false;
    }
  };
  const getProps = () => {
    return getElement().props;
  };
  return {
    getElement,
    exists,
    getProps
  };
};
export const ComponentDriver = props => {
  return useComponentDriver(props);
};