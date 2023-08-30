import { ComponentDriver } from "../../testkit";
export class SliderDriver extends ComponentDriver {
  isDisabled = async () => (await this.getElementProps()).accessibilityState?.disabled === true;
}