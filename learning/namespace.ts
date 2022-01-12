namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    
    let letterRegex = /^[a-zA-Z]+$/;
    let numberRegex = /^[0-9]+$/;
    
    export class LettersValidator implements StringValidator {
        isAcceptable(s: string) {
            return letterRegex.test(s);
        }
    }
    
    export class NumberValidator implements NumberValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegex.test(s);
        }
    }
}

let strings = ['Hello', '98052', '101'];

let validators: {[s: string] : Validation.StringValidator} = {};

validators['ZIP Code'] = new Validation.LettersValidator();

validators['Letters only'] = new Validation.NumberValidator();

for(let string of strings) {
    for(let name in validators) {
        let isMatch = validators[name].isAcceptable(string);
        console.log(`'${string}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}

