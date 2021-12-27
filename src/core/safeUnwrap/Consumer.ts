import { Model } from "./Model";
import { Wrapper } from "./Wrapper";

export class Consumer {

  public getColor(model: Model): string {
    const wrapper: Wrapper = new Wrapper(model);
    return wrapper.getWrapped().getColor();
  }
}