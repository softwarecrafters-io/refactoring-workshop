import { Finder } from "./Finder";
import { UserRepository } from "./UserRepository";

export class SpecificFinder extends Finder {
  constructor (repository: UserRepository) {
    super(repository);
  }

  findUnique(query: string) {
    return new Set(this.find(query));
  }
}