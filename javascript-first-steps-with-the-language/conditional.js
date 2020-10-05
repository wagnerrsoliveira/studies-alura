console.log("Work with conditional");

const destinationList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const buyersAge = 17;
console.log("Possible destinations");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(destinationList);

if (buyersAge >= 18) {
    console.log("Adult buyer");
    destinationList.splice(1, 1); //remove item
} else {
    console.log("Buyer is not of legal age and cannot sell");
}


console.log(destinationList);

console.log(buyersAge > 18);
console.log(buyersAge < 18);
console.log(buyersAge >= 18);
console.log(buyersAge <= 18);
console.log(buyersAge == 18);