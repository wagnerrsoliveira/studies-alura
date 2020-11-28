import { Employee } from "./Employee.js";

export class Manager extends Employee{
    constructor(name, salary, document){
        super(name, salary, document)
        this._bonus = 1.1;
    }
}