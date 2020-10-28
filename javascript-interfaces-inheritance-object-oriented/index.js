import { Customer } from './Customer.js';
import { CurrentAccount } from './CurrentAccount.js';
import { SavingsAccount } from './SavingsAccount.js';

const customer1 = new Customer("Wagner",11122233309);

const currentAccountWagner = new CurrentAccount(customer1,1001);
currentAccountWagner.deposit(500);
currentAccountWagner.withdrawm(100);

const savingsAccountWagner = new SavingsAccount(50,customer1, 1001);

console.log(savingsAccountWagner);
console.log(currentAccountWagner);
