import { validateDateOfBirth } from './validateDateOfBirth.js';
import { validateCpf } from './validateCpf.js';
import { getAddress } from './getAddress.js';

const returnErrorMessage = (type, validity) => {
    console.log(validity, type)
    let errorMessage = "";
    const typeError = ["valueMissing", "typeMismatch", "tooShort", "rangeUnderFlow", "customError", "patternMismatch"];

    const errorMessages = {
        email: {
            valueMissing: "E-mail is required",
            typeMismatch: "This is a invalid e-mail",
        },
        password: {
            valueMissing: "Password is required",
            tooShort: "The password should have more than 4 characters."
        },
        dateOfBirth: {
            valueMissing: "Date of birth is required",
            rangeUnderFlow: "Date should have more than 01-01-1901",
            customError: "The minimal age is 18 years old"
        },
        cpf: {
            valueMissing: "CPF is required",
            customError: "CPF is invalid"
        },
        rg: {
            valueMissing: "RG is required",
        },
        zipCode: {
            valueMissing: "Zip Code is required",
            patternMismatch: "Zip Code is invalid",
            customError:"Zip Code is invalid"
        },
        publicPlace: {
            valueMissing: "Public place is required",
        },
        city: {
            valueMissing: "City is required",
        },
        state: {
            valueMissing: "State is required",
        }
    };

    typeError.forEach(erro => {
        if (validity[erro]) {
            errorMessage = errorMessages[type][erro];
        }
    });

    return errorMessage;
}

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
        cpf: input => validateCpf(input),
        zipCode: input => getAddress(input)
    };

    if (specificValidators[type]) {
        specificValidators[type](input);
    }

    if (!elementIsValid) {
        // is invalid
        elementError.className = classElementError;
        elementError.textContent = returnErrorMessage(
            type, input.validity
        );
        if (addError) {
            input.after(elementError);
            input.classList.add(classInputError);
        }
    } else {
        // is valid
        elementError.remove();
        input.classList.remove(classInputError);
    }
};