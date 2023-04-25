"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRegex = void 0;
var EmailRegex = /** @class */ (function () {
    function EmailRegex() {
        this.EMAIL_REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    }
    EmailRegex.prototype.validate = function (regex) {
        return this.EMAIL_REGEX.test(regex);
    };
    return EmailRegex;
}());
exports.EmailRegex = EmailRegex;
var emailRegex = new EmailRegex();
var validEmail = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
var invalidEmail = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var email = validEmail_1[_i];
    var isvalid = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}
for (var _a = 0, invalidEmail_1 = invalidEmail; _a < invalidEmail_1.length; _a++) {
    var email = invalidEmail_1[_a];
    var isvalid = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}
