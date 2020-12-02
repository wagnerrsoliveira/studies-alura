const isACPFWithRepeatedNumbers = (cpf) => {
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

const calculateTotal = (multiplier) => (result, currentNumber) => result + currentNumber * multiplier--;


const calculateDigite = (partCpf, multiplier) => {
    const total = partCpf.reduce(calculateTotal(multiplier), 0);
    const rest = total % 11;
    const digit = 11 - rest;
    if (digit > 9) return 0;
    return digit;
};

export const validateCpf = input => {
    const cpfNumbers = input.value.replace(/\D/g, "");

    if (isACPFWithRepeatedNumbers(cpfNumbers)) {
        input.setCustomValidity("This is a invalid CPF");
        return;
    }

    const firstPartCPF = cpfNumbers.substr(0, 9).split("");
    const firstDigitCPF = Number(cpfNumbers.charAt(9));
    const firstDigitCalculeted = calculateDigite(firstPartCPF, 10);


    if (firstDigitCPF !== firstDigitCalculeted) {
        input.setCustomValidity("This is a invalid CPF");
        return;
    }

    const secondPartCPF = cpfNumbers.substr(0, 10).split("");
    const secondDigitCPF = Number(cpfNumbers.charAt(10));
    const secondDigitCalculeted = calculateDigite(secondPartCPF, 11);


    if (secondDigitCPF !== secondDigitCalculeted) {
        input.setCustomValidity("This is a invalid CPF");
        return;
    }

    input.setCustomValidity("");

};