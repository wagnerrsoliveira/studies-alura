import { Customer } from './Customer.js';
import { CurrentAccount } from './CurrentAccount.js';
import { SavingsAccount } from './SavingsAccount.js';
import { Account } from './Account.js';

const customer1 = new Customer("Wagner",11122233309);

const currentAccountWagner = new CurrentAccount(customer1,1001);
const savingsAccountWagner = new SavingsAccount(50,customer1, 1001);
const account = new Account(0, customer1, 1001);


console.log(account)