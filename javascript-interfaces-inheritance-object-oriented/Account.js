export class Account{

    constructor(initialBalance, customer, agency){
        this._balance = initialBalance;
        this._customer = customer;
        this._agency = agency;
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
        const amountWithdrawn = rate * amount;

        if (this._balance >= amountWithdrawn) {
            this._balance -= amountWithdrawn;
            return amountWithdrawn;
        }
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

    test(){
        console.log('Test into Account class...')
    }
}