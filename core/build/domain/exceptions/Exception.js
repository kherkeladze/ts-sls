"use strict";
class Error {
    constructor(message) {
        this.message = message;
    }
}
class Exception extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'Exception';
        this.message = message;
        this.stack = (new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Exception;
