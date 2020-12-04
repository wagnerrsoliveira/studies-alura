import { inputValidate } from "./Validate.js";

window.onload = () =>{
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        if(input.dataset.type === "price"){
            SimpleMaskMoney.setMask(input,{
                allowNegative: false,
                negativeSignAfter: false,
                prefix: 'R$ ',
                suffix: '',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: "end"
            })
            input.formatToNumber();
        }

        input.addEventListener('input', ()=>{
            inputValidate(input, false);
        });

        input.addEventListener('blur',()=>{
            inputValidate(input);
        })
    });
};