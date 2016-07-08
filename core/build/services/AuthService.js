"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const LoginFailedException_1 = require('../domain/exceptions/LoginFailedException');
class AuthService {
    constructor(userRepository) {
        this._userRepository = userRepository;
    }
    login(username, password) {
        return __awaiter(this, void 0, Promise, function* () {
            //fetch user by username from repository
            var user = yield this._userRepository.fetchByUsername(username);
            if (!user)
                throw new LoginFailedException_1.default();
            //check if user password matches supplied one
            var passwordIsOk = this.passwordMatches(user, password);
            if (!passwordIsOk)
                throw new LoginFailedException_1.default();
            //update user login info
            user.lastLogin = new Date();
            yield this._userRepository.save(user);
            //return user
            return user;
        });
    }
    passwordMatches(user, password) {
        return user.password === password;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthService;
