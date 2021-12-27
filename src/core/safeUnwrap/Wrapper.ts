import { Model } from "./Model";

export class Wrapper {
  private Wrapped: Model;

  public constructor (wrapped: Model) {
    this.Wrapped = wrapped;
  }

  public getWrapped(): Model {
    return this.Wrapped;
  }
}