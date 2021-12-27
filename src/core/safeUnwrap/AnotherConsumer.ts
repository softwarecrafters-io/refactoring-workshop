import { Wrapper } from "./Wrapper";
import { Model } from "./Model";

export class AnotherConsumer {
  public getAmount(model: Model): number {
    const wrapper = new Wrapper(model);
    return wrapper.getWrapped().getAmount();
  }
}

