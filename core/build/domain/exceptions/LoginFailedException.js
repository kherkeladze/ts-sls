"use strict";
const Exception_1 = require("./Exception");
class LoginFailedException extends Exception_1.default {
    constructor() {
        super("login failed");
        this.name = "LoginFailedException";
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginFailedException;
