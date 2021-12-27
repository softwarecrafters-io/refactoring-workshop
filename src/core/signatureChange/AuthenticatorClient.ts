import { AuthenticationService } from './AuthenticationService';

export class AuthenticatorClient {

	private authenticationService: AuthenticationService;

	public static main() {
		(new AuthenticatorClient(new AuthenticationService()).run());
	}

	public constructor (authenticationService: AuthenticationService) {
		this.authenticationService = this.authenticationService;
	}

	public run() {
		let authenticated: boolean = this.authenticationService.isAuthenticated(33);
		console.log("33 is authenticated = " + authenticated);
	}
}