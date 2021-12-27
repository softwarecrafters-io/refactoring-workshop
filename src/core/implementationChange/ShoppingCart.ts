export class ShoppingCart {

	private price: number;

	public add(price: number) {
		this.price = price;
	}

	public calculateTotalPrice(): number {
		return this.price;
	}

	public hasDiscount(): boolean {
		return (this.price >= 100);
	}

	public numberOfProducts(): number {
		return 1;
	}
}