class ClassNameRegex {
    private CLASSNAME_REGEX: RegExp = /^[CAP]\d{4}[GHIKLM]$/
    validate(regex: string): boolean {
        return  this.CLASSNAME_REGEX.test(regex);
    }
}
let classNameRegex = new ClassNameRegex();

let validClassName: string[] = ["C0223G", "A3456H", "P0112M"];
let invalidClassName: string[] = ["C0_223G", "B3456H", "P0112A"];

for (let className of validClassName) {
    let isvalid: boolean = classNameRegex.validate(className);
    console.log(`ClassName is ${className} is valid: ${isvalid}`)
}
for (let className of invalidClassName) {
    let isvalid: boolean = classNameRegex.validate(className);
    console.log(`ClassName is ${className} is valid: ${isvalid}`)
}