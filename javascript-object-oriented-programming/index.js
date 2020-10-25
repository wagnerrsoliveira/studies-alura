class Customer {
    name;
    document;
}

class CurrentAccount {
    agency;
    balance;

    withdrawm(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
    }
}


const customer1 = new Customer();
customer1.name = "Wagner";
customer1.document = 11122233309;

const customer2 = new Customer();
customer2.name = "Roberto";
customer2.document = 88822233309;

const currentAccountWagner = new CurrentAccount();
currentAccountWagner.balance = 0;
currentAccountWagner.agency = 1001;
console.log(currentAccountWagner.balance);

currentAccountWagner.balance = 100;
console.log(currentAccountWagner.balance);

currentAccountWagner.withdrawm(50);
console.log(currentAccountWagner.balance);


console.log(customer1);
console.log(customer2);

