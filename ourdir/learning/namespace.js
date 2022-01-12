"use strict";
var Validation;
(function (Validation) {
    let letterRegex = /^[a-zA-Z]+$/;
    let numberRegex = /^[0-9]+$/;
    class LettersValidator {
        isAcceptable(s) {
            return letterRegex.test(s);
        }
    }
    Validation.LettersValidator = LettersValidator;
    class NumberValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegex.test(s);
        }
    }
    Validation.NumberValidator = NumberValidator;
})(Validation || (Validation = {}));
let strings = ['Hello', '98052', '101'];
let validators = {};
validators['ZIP Code'] = new Validation.LettersValidator();
validators['Letters only'] = new Validation.NumberValidator();
for (let string of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(string);
        console.log(`'${string}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}
