//Abstract class
export class Account {

    constructor(initialBalance, customer, agency) {
        if (this.constructor === Account) {
            throw new Error("You should't instantiate an Account type object, This is a abstract class.");
        }

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

    /**Abstract Method */
    withdrawm(amount) {
       throw new   Error("The withdrawm is a abstract method.")
    }

    _withdrawm(amount, rate) {
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