import { OldVehicleQuery } from "./OldVehicleQuery";

export interface VehicleMatcher {
  countVehicles(query: OldVehicleQuery): number;
}