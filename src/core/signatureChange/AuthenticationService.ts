export class AuthenticationService {

	public isAuthenticated(id: number): boolean {
		return (id == 12345);
	}

	// public isAuthenticated(id: Id): boolean {
	// 	return Id.isEqual(12345);
	// }
}