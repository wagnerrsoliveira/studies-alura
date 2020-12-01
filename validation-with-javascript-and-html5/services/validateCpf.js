const isACPFWithRepeatedNumbers=(cpf)=>{
    const invalidCpfs = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",        
    ];
    return invalidCpfs.includes(cpf);
};

export const validateCpf = input => {
    const cpfNumbers = input.value.replace(/\D/g,"");

    if(isACPFWithRepeatedNumbers(cpfNumbers)){
        input.setCustomValidity("This is a invalid CPF");
        return;
    }
    input.setCustomValidity("");

};