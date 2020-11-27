import { Account } from "./Account.js";

export class SalaryAccount extends Account {

    constructor(customer) {
        super(0, customer, 100);
    }

    /*@Overwrite*/
    withdrawm(amount) {
        let rate = 1.01;
        return this._withdrawm(amount, rate);
    }
}