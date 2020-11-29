import { inputValidate } from "./Validate.js";

window.onload = () =>{
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            inputValidate(input, false);
        });

        input.addEventListener('blur',()=>{
            inputValidate(input);
        })
    });
};