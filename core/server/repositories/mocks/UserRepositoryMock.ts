import IUserRepository from '../../domain/interfaces/repositories/IUserRepository'
import User from '../../domain/User'


class UserRepositoryMock implements IUserRepository {
		async save(user: User): Promise<void> {
			return;
		}

		async delete(id: number): Promise<void> {
			return;
		}

		async fetch(id: number): Promise<User> {
			var user = new User();
			user.id = id;
			user.username = "user";
			user.password = "pwd123";
			return user;
		}

		async fetchByUsername(username: string): Promise<User> {
			var user = new User();
			user.id = 123;
			user.username = username;
			user.password = "pwd123";
			return user;
		}
}

export default UserRepositoryMock

