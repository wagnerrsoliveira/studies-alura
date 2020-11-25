import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    static accountAmount = 0;

    constructor(customer, agency) {
        super(0, customer, agency);
        CurrentAccount.accountAmount += 1;
    }

    /*@Overwrite*/
    withdrawm(amount) {
        let rate = 1.1;
        return this._withdrawm(amount, rate);
    }
}