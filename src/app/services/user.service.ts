import { User } from "../models/user.model";

export class UserService {

    addNewUser(user: User) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    login(email, password) {
        let user = JSON.parse(localStorage.getItem("user"));
        if(user.email === email && user.password === password) {
            localStorage.setItem("isLog", "true");
            return true;
        } else {
            return false;
        }
    }

    logOut() {
        localStorage.setItem("isLog", "false");

    }
}