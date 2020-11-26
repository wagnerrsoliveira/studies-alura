export class Account{

    constructor(initialBalance, customer, agency){
        this._balance = initialBalance;
        this._customer = customer;
        this._agency = agency;
        if(this.constructor== Account){
            console.log("You should't instantiate an Account type object");
        }
    }

    set customer(newCustomer) {
        if (newCustomer instanceof Customer) {
            this._customer = newCustomer;
        }
    }

    get customer() {
        return this._customer;
    }

    get balance() {
        return this._balance;
    }

    withdrawm(amount) {
        let rate = 1;
        return this._withdrawm(amount, rate);
    }

    _withdrawm(amount, rate){
        const amountWithdrawn = rate * amount;

        if (this._balance >= amountWithdrawn) {
            this._balance -= amountWithdrawn;
            return amountWithdrawn;
        }

        return 0;
    }

    deposit(amount) {
        if (amount <= 0) {
            return;
        }
        this._balance += amount;
    }

    transfer(amount, account) {
        const amountWithdrawn = this.withdrawm(amount);
        account.deposit(amountWithdrawn);
    }
}