"use strict";
class User {
    get fullName() {
        return this.forename || this.surname ?
            (this.forename + " " + this.surname).trim() :
            this.alias || this.username || this.id.toString();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
