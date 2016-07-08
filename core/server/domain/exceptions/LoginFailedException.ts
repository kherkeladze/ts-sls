import Exception from "./Exception"

class LoginFailedException extends Exception {
		constructor() {
			super("login failed");
			this.name = "LoginFailedException";
		}
}

export default LoginFailedException