var ClassNameRegex = /** @class */ (function () {
    function ClassNameRegex() {
        this.CLASSNAME_REGEX = /^[CAP]\d{4}[GHIKLM]$/;
    }
    ClassNameRegex.prototype.validate = function (regex) {
        return this.CLASSNAME_REGEX.test(regex);
    };
    return ClassNameRegex;
}());
var classNameRegex = new ClassNameRegex();
var validClassName = ["C0223G", "A3456H", "P0112M"];
var invalidClassName = ["C0_223G", "B3456H", "P0112A"];
for (var _i = 0, validClassName_1 = validClassName; _i < validClassName_1.length; _i++) {
    var className = validClassName_1[_i];
    var isvalid = classNameRegex.validate(className);
    console.log("ClassName is ".concat(className, " is valid: ").concat(isvalid));
}
for (var _a = 0, invalidClassName_1 = invalidClassName; _a < invalidClassName_1.length; _a++) {
    var className = invalidClassName_1[_a];
    var isvalid = classNameRegex.validate(className);
    console.log("ClassName is ".concat(className, " is valid: ").concat(isvalid));
}
