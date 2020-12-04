export const validatePrice = (input) =>{
    const price = input.formatToNumber();

    if(price === 0){
        input.setCustomValidity("The price have to be more than R$ O");
        return;
    }
    input.setCustomValidity("");
    return;
}