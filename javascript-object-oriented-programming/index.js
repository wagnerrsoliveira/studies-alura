import { Customer } from './Customer.js';
import { CurrentAccount } from './CurrentAccount.js';

const customer1 = new Customer();
customer1.name = "Wagner";
customer1.document = 11122233309;

const customer2 = new Customer();
customer2.name = "Roberto";
customer2.document = 88822233309;

const currentAccountWagner = new CurrentAccount();
currentAccountWagner.agency = 1001;
currentAccountWagner.customer = customer1;
currentAccountWagner.deposit(500);

const currentAccountRoberto = new CurrentAccount();
currentAccountRoberto.agency = 1002;
currentAccountRoberto.customer = customer2;

let amount = 200;
currentAccountWagner.transfer(amount,currentAccountRoberto)

console.log("amount",amount);
console.log(currentAccountWagner);
console.log(currentAccountRoberto);
