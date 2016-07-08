import IAuthService from '../domain/interfaces/services/IAuthService'
import UserRepositoryMock from '../repositories/mocks/UserRepositoryMock'
import AuthService from '../services/AuthService'


console.log("Hello World");

var authService: IAuthService = new AuthService(
	new UserRepositoryMock()
);

var user = authService.login("admin", "pwd123").then(user => {
	console.log("Hello " + user.fullName);
});