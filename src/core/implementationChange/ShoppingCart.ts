export class ShoppingCart {
	private price: number;

	add(price: number) {
		this.price = price;
	}

	calculateTotalPrice(): number {
		return this.price;
	}

	hasDiscount(): boolean {
		return (this.price >= 100);
	}

	numberOfProducts(): number {
		return 1;
	}
}