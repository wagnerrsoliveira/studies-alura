console.log("Work with lists");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const destinationList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

destinationList.push(`Curitiba`)//adding an item to the list

console.log("Possible destinations");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(destinationList);

destinationList.splice(1,1);
console.log(destinationList);
console.log(destinationList[1],destinationList[0]);