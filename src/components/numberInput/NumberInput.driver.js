import { ComponentDriver } from "../../testkit/Component.driver";
import { TextFieldDriver } from "../../incubator/TextField/TextField.driver";
export class NumberInputDriver extends ComponentDriver {
  constructor(componentDriverArgs) {
    super(componentDriverArgs);
    this.maskedInputDriver = new TextFieldDriver({
      ...componentDriverArgs,
      testID: `${this.testID}`
    });
    this.visualTextFieldDriver = new TextFieldDriver({
      ...componentDriverArgs,
      testID: `${this.testID}.visual`
    });
  }
  changeText = async text => {
    await this.maskedInputDriver.changeText(text);
  };
  getText = async () => {
    return await this.visualTextFieldDriver.getText();
  };
}