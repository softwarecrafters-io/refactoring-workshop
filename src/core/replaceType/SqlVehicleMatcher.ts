import { VehicleMatcher } from "./VehicleMatcher";
import { OldVehicleQuery } from "./OldVehicleQuery";
import { VehicleRepository } from "./VehicleRepository";
import { NewVehicleQuery } from "./NewVehicleQuery";

export class SqlVehicleMatcher implements VehicleMatcher {
  public countVehicles(query: OldVehicleQuery): number {
    return (new VehicleRepository().find(
      new NewVehicleQuery(
        query.brandDescription.split(" ")[0],
        query.brandDescription.split(" ")[1])
    ).length);
  }
}