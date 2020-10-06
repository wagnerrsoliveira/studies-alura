console.log("Work with conditional");

const destinationList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const buyersAge = 18;
const isAccompanied = false;
const hasPurchasedTicket = true;

console.log("Possible destinations");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(destinationList);

// if (buyersAge >= 18) {
//     console.log("Adult buyer");
//     destinationList.splice(1, 1); //remove item
// } else if (isAccompanied) {
//     console.log("Buyer is accompanied");
//     destinationList.splice(1, 1); //remove item
// } else {
//     console.log("Buyer is not of legal age and cannot sell");
// }


if (buyersAge >= 18 || isAccompanied) {
    console.log("Good trip");
    destinationList.splice(1, 1); //remove item
} else {
    console.log("Buyer is not of legal age and cannot sell");
}
console.log("To board: \n\n");
if(buyersAge>=18 && hasPurchasedTicket){
    console.log("Good trip");
}else{
    console.log("You cannot board");
}


console.log(destinationList);

// console.log(buyersAge > 18);
// console.log(buyersAge < 18);
// console.log(buyersAge >= 18);
// console.log(buyersAge <= 18);
// console.log(buyersAge == 18);