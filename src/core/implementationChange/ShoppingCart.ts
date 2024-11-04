export class ShoppingCart{
	private priceList: number[] = [];

	add(price: number) {
		this.priceList.push(price);
	}

	calculateTotalPrice(): number {
		return this.priceList.reduce((previous, current)=> previous + current, 0);
	}

	hasDiscount(): boolean {
		return (this.calculateTotalPrice() >= 100);
	}

	numberOfProducts(): number {
		return this.priceList.length;
	}
}
