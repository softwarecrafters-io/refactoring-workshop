export class AuthenticationService {
	isAuthenticated(id: Id): boolean {
		return (id.isEquals(12345));
	}
}

export class Id{
	private constructor(private readonly value:number) {}

	static create(value:number){
		//some assertions here
		return new Id(value);
	}

	isEquals(value:number){
		return this.value === value;
	}
}
