import { ShoppingCart } from './ShoppingCart';

export class ExternalCartClient {
	public formattedTotalPrice(price: number): String {
		let shoppingCart: ShoppingCart = new ShoppingCart();
		shoppingCart.add(price);
		return `Total price is ${shoppingCart.calculateTotalPrice()} euro"`;
	}
}