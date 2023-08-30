import { useComponentDriver } from "../../testkit/new/Component.driver";
import { usePressableDriver } from "../../testkit/new/usePressable.driver";
export const TextDriver = props => {
  const driver = usePressableDriver(useComponentDriver(props));
  const getText = () => {
    return driver.getProps().children;
  };
  return {
    ...driver,
    getText
  };
};