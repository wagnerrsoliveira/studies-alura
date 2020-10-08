console.log("\nWork with conditional");

const destinationList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const buyersAge = 18;
const isAccompanied = true;
let hasPurchasedTicket = false;
const destination = "Salvador";

console.log("\nPossible destinations");
console.log(destinationList);

const canBuy = (buyersAge >= 18 || isAccompanied);

let counter = 0;

while (counter < 3) {
    
    if(destinationList[counter]==destination){
        console.log("Fate exists")
    }else{
        console.log("Fate doesn't exists")
    }
    counter = counter + 1;
}
