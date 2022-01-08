export class NewVehicleQuery {
  brand: string;
  description: string;

  constructor (brand: string, description: string) {
    this.brand = brand;
    this.description = description;
  }
}