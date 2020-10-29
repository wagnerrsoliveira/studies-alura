import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    static accountAmount = 0;

    constructor(customer, agency) {
        super(0, customer, agency);
        CurrentAccount.accountAmount += 1;
    }
}