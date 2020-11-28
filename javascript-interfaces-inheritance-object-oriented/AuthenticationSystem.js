export class AuthenticationSystem{
    static login(authentic, password){
         return authentic.authenticate(password);   
    }
}