import { User } from "./User";

export class UserRepository {
  findAll(): User[] {
    const allUsers = [];
    allUsers.push(new User());
    return allUsers;
  }
}