import { NewVehicleQuery } from "./NewVehicleQuery";
import { Vehicle } from "./Vehicle";

export class VehicleRepository {
  public find(query: NewVehicleQuery): Array<Vehicle> {
    const stub = [];
    stub.push(new Vehicle(query.brand, query.description));
    return stub;
  }
}