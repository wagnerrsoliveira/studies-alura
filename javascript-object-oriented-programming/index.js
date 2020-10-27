import { Customer } from './Customer.js';
import { CurrentAccount } from './CurrentAccount.js';

const customer1 = new Customer("Wagner",11122233309);
const customer2 = new Customer("Roberto",88822233309);
console.log(customer2.cpf)

const currentAccountWagner = new CurrentAccount(customer1,1001);
currentAccountWagner.deposit(500);

const currentAccountRoberto = new CurrentAccount(customer2,1002);

let amount = 200;
currentAccountWagner.transfer(amount,currentAccountRoberto)

console.log("amount",amount);
console.log(currentAccountWagner);
console.log(currentAccountRoberto);
