import IUserRepository from '../domain/interfaces/repositories/IUserRepository'
import IAuthService from '../domain/interfaces/services/IAuthService'
import LoginFailedException from '../domain/exceptions/LoginFailedException'
import User from '../domain/User'


	 class AuthService implements IAuthService {
		private _userRepository: IUserRepository;

		constructor(userRepository: IUserRepository) {
			this._userRepository = userRepository;
		}

		async login(username: string, password: string): Promise<User> {
			//fetch user by username from repository
			var user = await this._userRepository.fetchByUsername(username);
			if (!user) throw new LoginFailedException();

			//check if user password matches supplied one
			var passwordIsOk = this.passwordMatches(user, password);
			if (!passwordIsOk) throw new LoginFailedException();

			//update user login info
			user.lastLogin = new Date();
			await this._userRepository.save(user);

			//return user
			return user;
		}

		passwordMatches(user: User, password: string): boolean {
			return user.password === password;
		}
	}


export default AuthService
