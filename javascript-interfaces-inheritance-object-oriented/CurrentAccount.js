import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    static accountAmount = 0;

    constructor(customer, agency) {
        super(0, customer, agency);
        CurrentAccount.accountAmount += 1;
    }

    withdrawm(amount) {

        let rate = 1.1;
        const amountWithdrawn = rate * amount;

        if (this._balance >= amountWithdrawn) {
            this._balance -= amountWithdrawn;
            return amountWithdrawn;
        }
    }

    test(){
        super.test();
        console.log("Test into CurrentAcount class...")
    }
}