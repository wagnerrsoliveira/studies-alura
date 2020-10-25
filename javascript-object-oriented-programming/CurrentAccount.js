export class CurrentAccount {
    agency;
    //#balance =0; proposal class fields
    _balance = 0;

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
}