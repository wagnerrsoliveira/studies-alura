import { Customer } from "./Customer.js";

export class CurrentAccount {
    agency;
    _customer;
    
    set customer(newCustomer){
        if(newCustomer instanceof Customer){
            this._customer = newCustomer;
        }
    }

    get customer(){
        return this._customer;
    }
    //#balance =0; proposal class fields
    _balance = 0;

    get balance(){
        return this._balance;
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

    transfer(amount, account){
        account.city = "São Paulo";
        const amountWithdrawn = this.withdrawm(amount);
        account.deposit(amountWithdrawn);
    }
}