import { Finder } from "./Finder";
import { UserRepository } from "./UserRepository";

export class SpecificFinder extends Finder {

  public constructor (repository: UserRepository) {
    super(repository);
  }

  public findUnique(query: string) {
    return new Set(this.find(query));
  }
}