export class Account{

    constructor(initialBalance, customer, agency){
        this._balance = initialBalance;
        this._customer = customer;
        this._agency = agency;
    }

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

    transfer(amount, account) {
        const amountWithdrawn = this.withdrawm(amount);
        account.deposit(amountWithdrawn);
    }
}