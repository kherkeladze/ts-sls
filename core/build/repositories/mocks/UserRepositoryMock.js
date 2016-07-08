"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const User_1 = require('../../domain/User');
class UserRepositoryMock {
    save(user) {
        return __awaiter(this, void 0, Promise, function* () {
            return;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, Promise, function* () {
            return;
        });
    }
    fetch(id) {
        return __awaiter(this, void 0, Promise, function* () {
            var user = new User_1.default();
            user.id = id;
            user.username = "user";
            user.password = "pwd123";
            return user;
        });
    }
    fetchByUsername(username) {
        return __awaiter(this, void 0, Promise, function* () {
            var user = new User_1.default();
            user.id = 123;
            user.username = username;
            user.password = "pwd123";
            return user;
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserRepositoryMock;
