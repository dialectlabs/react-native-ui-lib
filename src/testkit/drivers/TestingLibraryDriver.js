import _get from "lodash/get";
import { fireEvent, render } from '@testing-library/react-native';
import { act } from '@testing-library/react-hooks';
import { MultipleInstancesException, NoSelectorException, SelectorChainingException, SelectorNotFoundException } from "../DriverException";
export class TestingLibraryDriver {
  constructor(componentOrInstance) {
    if (componentOrInstance === null) {
      throw Error('Expected a component or test instance');
    }
    if (Array.isArray(componentOrInstance)) {
      this.reactTestInstances = componentOrInstance;
      this.renderAPI = null;
    } else {
      this.renderAPI = render(componentOrInstance);
      this.reactTestInstances = [];
    }
  }
  selectorByTestId = async testId => {
    if (!this.renderAPI) {
      throw new SelectorChainingException();
    }
    const instances = await this.renderAPI.queryAllByTestId(testId);
    if (instances) {
      return Promise.resolve(new TestingLibraryDriver(instances));
    } else {
      return Promise.reject(new NoSelectorException());
    }
  };
  selectorByText = async text => {
    if (!this.renderAPI) {
      throw new SelectorChainingException();
    }
    const instances = await this.renderAPI.findAllByText(text).catch(() => []);
    return new TestingLibraryDriver(instances);
  };
  getByDisplayValue = async value => {
    if (!this.renderAPI) {
      throw new SelectorChainingException();
    }
    const instances = await this.renderAPI?.findAllByDisplayValue(value).catch(() => []);
    return new TestingLibraryDriver(instances);
  };
  first = () => this.at(0);
  at = index => {
    return Promise.resolve(new TestingLibraryDriver([this.reactTestInstances[index]]));
  };
  instance = async () => {
    if (!this.reactTestInstances) {
      throw new NoSelectorException();
    }
    this.validateExplicitInstance();
    return this.reactTestInstances[0];
  };
  getInstanceProps = async () => {
    const instance = await this.instance();
    return _get(instance, 'props');
  };
  press = () => {
    if (!this.reactTestInstances) {
      throw new NoSelectorException();
    }
    this.validateExplicitInstance();
    this.validateSingleInstance();
    fireEvent.press(this.reactTestInstances[0]);
  };
  drag = data => {
    if (!this.reactTestInstances) {
      throw new NoSelectorException();
    }
    this.validateExplicitInstance();
    this.validateSingleInstance();
    fireEvent.press(this.reactTestInstances[0], data);
  };
  focus = () => {
    if (!this.reactTestInstances) {
      throw new NoSelectorException();
    }
    this.validateExplicitInstance();
    this.validateSingleInstance();
    fireEvent(this.reactTestInstances[0], 'focus');
  };
  blur = () => {
    if (!this.reactTestInstances) {
      throw new NoSelectorException();
    }
    this.validateExplicitInstance();
    this.validateSingleInstance();
    fireEvent(this.reactTestInstances[0], 'blur');
  };
  typeText = async text => {
    if (!this.reactTestInstances) {
      throw new NoSelectorException();
    }
    this.validateExplicitInstance();
    this.validateSingleInstance();
    await act(() => fireEvent.changeText(this.reactTestInstances[0], text));
  };
  scrollX = deltaX => this.scroll({
    x: deltaX
  });
  scrollY = deltaY => this.scroll({
    y: deltaY
  });
  scroll = async ({
    x = 0,
    y = 0
  } = {}) => {
    if (!this.reactTestInstances) {
      throw new NoSelectorException();
    }
    this.validateExplicitInstance();
    this.validateSingleInstance();
    fireEvent.scroll(this.reactTestInstances[0], {
      nativeEvent: {
        layoutMeasurement: {
          width: 1080,
          height: 1920
        },
        contentSize: {
          width: 1080,
          height: 1920
        },
        contentOffset: {
          x,
          y
        }
      }
    });
  };
  validateExplicitInstance = () => {
    if (this.reactTestInstances.length > 1) {
      throw new MultipleInstancesException(this.reactTestInstances.length);
    }
  };
  validateSingleInstance = () => {
    if (this.reactTestInstances.length === 0) {
      throw new SelectorNotFoundException();
    }
  };
}