export class SomeType {
	someField: String;
	numbers: number[];
	child: SomeType;

	constructor () {
		this.numbers = new Array(10).fill(0);
	}

	firstMethod(arg1: String) {
		arg1 = "foo";
	}

	secondMethod(other: SomeType) {
		other = new SomeType();
		other.someField = "blah";
	}

	thirdMethod(other: SomeType) {
		other.numbers[0] = 100;
		other.someField = "changed";
		other.child = new SomeType();
	}

	fourthMethod(someNumbers: number[]) {
		someNumbers[0] = this.numbers[0];
		someNumbers[1] = this.numbers[9];
	}
}
