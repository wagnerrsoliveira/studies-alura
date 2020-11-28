export class AuthenticationSystem {
    static login(authentic, password) {
        if (AuthenticationSystem.isAuthentic(authentic)) {
            return authentic.authenticate(password);
        } else {
            return false;
        }
    }

    static isAuthentic(authentic) {
        return "authenticate" in authentic && authentic.authenticate instanceof Function;
    }
}