import { SqlVehicleMatcher } from "../../core/replaceType/SqlVehicleMatcher";
import { OldVehicleQuery } from "../../core/replaceType/OldVehicleQuery";

describe('The SQL Vehicle Matcher', ()=>{
  it('finds vehicle', ()=>{
    const matcher: SqlVehicleMatcher = new SqlVehicleMatcher();
    const query: OldVehicleQuery = new OldVehicleQuery();
    query.brandDescription = "VW Polo";

    expect(matcher.countVehicles(query)).toBe(1);
  })
})