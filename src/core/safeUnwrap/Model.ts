export class Model {

  private Color: string;

  private Amount: number;

  public constructor (color: string, amount: number) {
    this.Color = color;
    this.Amount = amount;
  }

  public getColor(): string {
    return this.Color;
  }

  public getAmount(): number {
    return this.Amount;
  }
}