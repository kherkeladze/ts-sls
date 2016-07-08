import IUserRepository from '../domain/interfaces/repositories/IUserRepository'
import User from '../domain/User'


class UserRepository implements IUserRepository {
		save(user: User): Promise<void> {
			return null;
		}

		delete(id: number): Promise<void> {
			return null;
		}

		fetch(id: number): Promise<User> {
			return null;
		}

		fetchByUsername(username: string): Promise<User> {
			return null;
		}
}

export default UserRepository
