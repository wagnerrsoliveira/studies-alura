import { Account } from "./Account.js";

export class SavingsAccount extends Account {

    constructor(initialBalance, customer, agency) {
        super(initialBalance, customer, agency);
    }

    /*@Overwrite*/
    withdrawm(amount) {
        let rate = 1.02;
        return this._withdrawm(amount, rate);
    }
}