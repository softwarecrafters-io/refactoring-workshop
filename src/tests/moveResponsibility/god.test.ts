import { God } from "../../core/moveResponsibility/God";

describe('The god class', ()=>{
  it('adds numbers', ()=>{
    const god = new God();
    expect(god.add(2, 2)).toBe(4);
  })

  it('subtracts numbers', ()=>{
    const god = new God();
    expect(god.substract(2, 2)).toBe(0);
  })
})