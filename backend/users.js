"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    // matches(another: User): boolean {
    //   return (
    //     another === undefined &&
    //     another.email === this.email &&
    //     another.password === this.password
    //   );
    // }
    User.prototype.matches = function (another) {
        return (another !== undefined &&
            another.email === this.email &&
            another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "test@io.com": new User("test@io.com", "test", "123"),
};
