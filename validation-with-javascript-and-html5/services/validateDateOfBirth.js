export const validateDateOfBirth = input => {
    const dateOfBirth = new Date(input.value);
    const currentDate = new Date();

    const dateIs18 = new Date(
        dateOfBirth.getUTCFullYear() + 18,
        dateOfBirth.getUTCMonth(),
        dateOfBirth.getUTCDate()
    );

    if(dateIs18> currentDate ){
        input.setCustomValidity("The minimal age is 18 years old");
        return;
    }
    
    input.setCustomValidity("");
    return;
};