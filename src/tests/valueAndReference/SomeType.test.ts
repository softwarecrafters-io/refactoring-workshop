import { SomeType } from '../../core/valueAndReference/SomeType';

describe('You should understand values and references because', ()=>{
	it('is fundamental', ()=>{
		const instance = new SomeType();
		const arg1 = 'bar';
		instance.firstMethod(arg1);
		expect(arg1).toBe('????')

		const other = new SomeType();
		other.numbers[0] = 100;
		other.secondMethod(other)
		expect(other.numbers[0]).toBe('????')
		expect(other.someField).toBe('????')

		const another: SomeType = new SomeType();
		another.numbers[0] = 200;
		instance.thirdMethod(another);
		expect(another.numbers[0]).toBe('????');
		expect(another.someField).toBe("????");
		expect(another.child).toBe('????');

		const yetAnother: SomeType = new SomeType();
		yetAnother.numbers[0] = 200;
		instance.fourthMethod(yetAnother.numbers);
		expect(yetAnother.numbers[0]).toBe('????');
	})
})