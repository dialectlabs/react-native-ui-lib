import _times from "lodash/times";
import { ComponentDriver } from "../../testkit/Component.driver";

/**
 * Please run clear after each test
 */
export class SortableListItemDriver extends ComponentDriver {
  dragUp = async indices => {
    this.validateIndices(indices);
    const data = _times(indices, index => {
      return {
        translationY: -52 * (index + 1)
      };
    });
    await this.uniDriver.selectorByTestId(this.testID).then(driver => driver.drag(data));
  };
  dragDown = async indices => {
    this.validateIndices(indices);
    const data = _times(indices, index => {
      return {
        translationY: 52 * (index + 1)
      };
    });
    await this.uniDriver.selectorByTestId(this.testID).then(driver => driver.drag(data));
  };
  validateIndices = indices => {
    if (indices <= 0 || !Number.isInteger(indices)) {
      throw Error('indices must be a positive integer');
    }
  };
}