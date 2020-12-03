export const getAddress = (input) => {
    const zipCodeNumbers = input.value.replace(/\D/g, "");

    if (input.validity.valid) {

        const url = `https://viacep.com.br/ws/${zipCodeNumbers}/json/`;
        const options = {
            method: 'GET',
            mode: "cors",
            headers: {
                "content-type": "application/jason;charset=utf-8"
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    input.setCustomValidity("Zip Code is invalid");
                    return;
                }
                console.log(data)
                fillFields(data);
                input.setCustomValidity("");
                return;
            })
    }
};

const fillFields = (data) => {
    const publicPlaceField = document.getElementById("publicPlace");
    const cityField = document.getElementById("city");
    const stateField = document.getElementById("state");

    publicPlaceField.value = data.logradouro;
    cityField.value = data.localidade;
    stateField.value = data.uf;
}