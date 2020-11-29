import { validateDateOfBirth } from './validateDateOfBirth.js';

export const inputValidate = (input, addError = true) => {
    const classElementError = "error-validation";
    const classInputError = "has-error-validation";

    const parentElement = input.parentNode;
    const elementErrorExists = parentElement.querySelector(
        `.${classElementError}`
    );

    const elementError = elementErrorExists || document.createElement("div");

    const elementIsValid = input.validity.valid;

    const type = input.dataset.type;
    console.log(type, input)
    const specificValidators = {
        dateOfBirth: input => validateDateOfBirth(input),
    };

    if (specificValidators[type]) {
        specificValidators[type](input);
    }

    if (!elementIsValid) {
        // is invalid
        elementError.className = classElementError;
        elementError.textContent = "There is an error here!";
        if(addError){
            input.after(elementError);
            input.classList.add(classInputError);
        }
    } else {
        // is valid
        elementError.remove();
        input.classList.remove(classInputError);
    }
};