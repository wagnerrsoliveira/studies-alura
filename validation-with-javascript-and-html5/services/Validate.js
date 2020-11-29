import { validateDateOfBirth } from './validateDateOfBirth.js';

export const inputValidate = (input) => {

    const type = input.dataset.type;
    console.log(type, input)
    const specificValidators = {
        dateOfBirth: input => validateDateOfBirth(input),
    };

    if (specificValidators[type]) {
        specificValidators[type](input);
    }
};