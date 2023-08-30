import { TestingLibraryDriver } from "./drivers/TestingLibraryDriver";
/**
 * Please run clear after each test
 */
export class ComponentDriver {
  static uniDrivers = {};
  static clear() {
    ComponentDriver.uniDrivers = {};
  }
  constructor({
    testID,
    component,
    Driver = TestingLibraryDriver
  }) {
    this.testID = testID;
    const hash = require('object-hash');
    const componentHashcode = hash(component);
    if (!ComponentDriver.uniDrivers[componentHashcode]) {
      ComponentDriver.uniDrivers[componentHashcode] = new Driver(component);
    }
    this.uniDriver = ComponentDriver.uniDrivers[componentHashcode];
  }
  exists = async () => !!(await this.getElement());
  getElement = () => {
    return this.getByTestId(this.testID);
  };
  press = async () => {
    return this.uniDriver.selectorByTestId(this.testID).then(driver => driver.press());
  };
  drag = async data => {
    return this.uniDriver.selectorByTestId(this.testID).then(driver => driver.drag(data));
  };
  focus = async () => {
    return this.uniDriver.selectorByTestId(this.testID).then(driver => driver.focus());
  };
  blur = async () => {
    return this.uniDriver.selectorByTestId(this.testID).then(driver => driver.blur());
  };
  getByTestId = testID => {
    return this.uniDriver.selectorByTestId(testID).then(driver => driver.instance());
  };
  getElementProps = () => {
    return this.getPropsByTestId(this.testID);
  };
  getPropsByTestId = testID => {
    return this.uniDriver.selectorByTestId(testID).then(driver => driver.getInstanceProps());
  };
  selectorByText = text => {
    return this.uniDriver.selectorByText(text).then(driver => driver.instance());
  };
  getByDisplayValue = text => {
    return this.uniDriver.getByDisplayValue(text).then(driver => driver.instance());
  };
}