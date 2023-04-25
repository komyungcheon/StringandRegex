var PhoneNumberRegex = /** @class */ (function () {
    function PhoneNumberRegex() {
        this.PHONE_NUMBER_REGEX = /^\(\d{2}\)-\(0\d{9}\)$/;
    }
    PhoneNumberRegex.prototype.validate = function (regex) {
        return this.PHONE_NUMBER_REGEX.test(regex);
    };
    return PhoneNumberRegex;
}());
var phoneNumberRegex = new PhoneNumberRegex();
var validPhoneNumber = ["(09)-(0123456789)", "(89)-(0323456789)", "(32)-(0325456789)"];
var invalidPhoneNumber = ["(a1)-(0123456789)", "(89)-(2323456789)", "32)-(0325456789)"];
for (var _i = 0, validPhoneNumber_1 = validPhoneNumber; _i < validPhoneNumber_1.length; _i++) {
    var string = validPhoneNumber_1[_i];
    console.log("PhoneNumber ".concat(string, " is valid: ").concat(phoneNumberRegex.validate(string)));
}
for (var _a = 0, invalidPhoneNumber_1 = invalidPhoneNumber; _a < invalidPhoneNumber_1.length; _a++) {
    var string = invalidPhoneNumber_1[_a];
    console.log("PhoneNumber ".concat(string, " is valid: ").concat(phoneNumberRegex.validate(string)));
}
