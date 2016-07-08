import User from '../../User'

interface IAuthService {

    login(username: string, password: string): Promise<User>;
    passwordMatches(user: User, password: string): boolean

}

export default IAuthService