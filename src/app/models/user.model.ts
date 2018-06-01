export class User {
    email: string;
    password: string;
    subscription: string;

    constructor(email, password, subscription) {
        this.email = email;
        this.password = password;
        this.subscription = subscription;
    }
}