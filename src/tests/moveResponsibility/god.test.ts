import { God } from "../../core/moveResponsibility/God";

describe('The god class', ()=>{
  it('adds numbers', ()=>{
    expect(God.add(2, 2)).toBe(4);
  })

  it('subtracts numbers', ()=>{
    const god = new God();
    expect(God.add(2, 2)).toBe(4);
  })
})