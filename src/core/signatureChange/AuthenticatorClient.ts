import { AuthenticationService } from './AuthenticationService';

export class AuthenticatorClient {
	private authenticationService: AuthenticationService;
	constructor (authenticationService: AuthenticationService) {
		this.authenticationService = this.authenticationService;
	}

	run() {
		const authenticated: boolean = this.authenticationService.isAuthenticated(33);
		console.log("33 is authenticated = " + authenticated);
	}

	static main() {
		(new AuthenticatorClient(new AuthenticationService()).run());
	}
}