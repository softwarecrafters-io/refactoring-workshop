import { UserRepository } from "../../core/dependencyChange/UserRepository";
import { Finder } from "../../core/dependencyChange/Finder";
import { SpecificFinder } from "../../core/dependencyChange/SpecificFinder";

describe('The finder',()=>{
  it('finds users by querying profile', ()=>{
    const repository = new UserRepository();
    const finder = new Finder(repository);
    expect(finder.find("programmer").length).toBe(1);
  })

  it('get users with empty profile', ()=>{
    const repository = new UserRepository();
    const finder = new Finder(repository);
    expect(finder.find("").length).toBe(1);
  })

  it('finds users by querying profile', ()=>{
    const repository = new UserRepository();
    const finder = new SpecificFinder(repository);
    expect(finder.find("").length).toBe(1);
  })
})