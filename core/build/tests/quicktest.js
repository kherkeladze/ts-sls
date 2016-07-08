"use strict";
const UserRepositoryMock_1 = require('../repositories/mocks/UserRepositoryMock');
const AuthService_1 = require('../services/AuthService');
console.log("Hello World");
var authService = new AuthService_1.default(new UserRepositoryMock_1.default());
var user = authService.login("admin", "pwd123").then(user => {
    console.log("Hello " + user.fullName);
});
