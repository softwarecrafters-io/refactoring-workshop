import { ShoppingCart } from '../../core/implementationChange/ShoppingCart';

describe('ShoppingCartShould', ()=>{
	it('count_number_of_products', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(10);

		expect(shoppingCart.numberOfProducts()).toBe(1);
	})
	it('calculate_total_price', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(10);

		expect(shoppingCart.calculateTotalPrice()).toBe(10);
	})
	it('know_when_is_discount_applicable', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(100);

		expect(shoppingCart.hasDiscount()).toBeTruthy();
	})
	it('know_when_is_not_possible_to_apply_discount', ()=>{
		const shoppingCart = new ShoppingCart();

		shoppingCart.add(99);

		expect(shoppingCart.hasDiscount()).toBeFalsy();
	})
})
