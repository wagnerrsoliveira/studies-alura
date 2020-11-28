import { AuthenticationSystem } from './AuthenticationSystem.js';
import { Customer } from './Customer.js';
import { Director } from './Employee/Director.js';
import { Manager } from './Employee/Manager.js';

const director = new Director("Rodrigo", 10000, 12345678900);
director.registerPassword("123456789");

const manager = new Manager("Ricardo", 5000, 12378945601);
manager.registerPassword("123")

const customer =  new Customer("Lais", 78945612379, "456");

const isDirectorLogged = AuthenticationSystem.login(director, "123456789");
const isManagerLogged = AuthenticationSystem.login(manager, "123");
const isCustomerLogged = AuthenticationSystem.login(customer, "456");

console.log(isDirectorLogged, isManagerLogged, isCustomerLogged);

