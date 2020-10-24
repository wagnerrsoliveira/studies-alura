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
let fateExists = false;

while (counter < 3) {

    if (destinationList[counter] == destination) {
        fateExists = true;
        break;
    }

    counter = counter + 1;
}

console.log("Fate exists: ", fateExists)

if (canBuy && fateExists) {
    console.log("Good trip");
} else {
    console.log("Sorry has an error");
}


for (let i = 0; i < 3; i++) {
    if (destinationList[i] == destination) {
        fateExists = true;
    }
}