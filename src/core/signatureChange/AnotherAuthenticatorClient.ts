import { AuthenticationService, Id } from './AuthenticationService';

export class AnotherAuthenticatorClient {
	unusedClientCode() {
		try {
			(new AuthenticationService().isAuthenticated(Id.create(3545)));
		}
		catch (e /*:Exception*/) {
			//  ignored
		}
	}
}
