import { QualityCalculator } from "../../core/replacePrimitiveConstantsWithType/QualityCalculator";
import { Quality } from "../../core/replacePrimitiveConstantsWithType/Quality";

describe('Quality calculator', ()=>{
  it('calculates the score', ()=>{
    const calculator = new QualityCalculator();

    calculator.rateFacilities(Quality.Excellent);
    calculator.rateLocation({quality : Quality.Excellent});

    expect(calculator.getScore()).toBe(12);
  })
})