"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = exports.numberRegex = void 0;
exports.numberRegex = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegex.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
const zipCodeValidator = new ZipCodeValidator;
console.log(zipCodeValidator.isAcceptable('1234'));
