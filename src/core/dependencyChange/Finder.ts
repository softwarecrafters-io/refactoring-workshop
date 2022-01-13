import { UserRepository } from "./UserRepository";
import { User } from "./User";

export class Finder {
  repository: UserRepository;

  constructor (repository: UserRepository) {
    this.repository = repository;
  }

  find(query: string): User[] {
    return this.repository.findAll().filter(u => (u.profile.length == 0 || u.profile.includes(query)));
  }
}