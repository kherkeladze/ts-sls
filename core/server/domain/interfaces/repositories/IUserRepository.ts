import User from '../../User'

	interface IUserRepository {
		save(user: User): Promise<void>;
		delete(id: number): Promise<void>;
		fetch(id: number): Promise<User>;
		fetchByUsername(username: string): Promise<User>;
	}

export default IUserRepository