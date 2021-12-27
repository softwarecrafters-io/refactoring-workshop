import { AuthenticationService } from './AuthenticationService';

export class AnotherAuthenticatorClient {

	public unusedClientCode() {
		try {
			(new AuthenticationService().isAuthenticated(3545));
		}
		catch (e /*:Exception*/) {
			//  ignored
		}

	}
}