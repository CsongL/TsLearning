import { StringValidator } from './StringValidator'

export const numberRegex = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegex.test(s)
    }
}

const zipCodeValidator = new ZipCodeValidator;

console.log(zipCodeValidator.isAcceptable('1234'));
