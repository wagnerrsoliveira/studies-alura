class Customer {
    name;
    document;
}

class CurrentAccount {
    agency;
    //#balance =0; proposal class fields
    _balance = 0;

    withdrawm(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            return amount;
        }
    }

    deposit(amount) {
        if (amount <= 0) {
            return;
        }
        this._balance += amount;
    }
}


const customer1 = new Customer();
customer1.name = "Wagner";
customer1.document = 11122233309;

const customer2 = new Customer();
customer2.name = "Roberto";
customer2.document = 88822233309;

const currentAccountWagner = new CurrentAccount();
currentAccountWagner.agency = 1001;

currentAccountWagner.deposit(100);
currentAccountWagner.deposit(100);
currentAccountWagner.deposit(100);

const amountWithdrawm = currentAccountWagner.withdrawm(50);
console.log(amountWithdrawm);

console.log(currentAccountWagner);

