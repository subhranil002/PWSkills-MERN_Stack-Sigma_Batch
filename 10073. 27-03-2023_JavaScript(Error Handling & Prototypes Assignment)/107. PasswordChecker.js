class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getPassword() {
        let newpassword = "";
        for (let i = 0; i < this.password.length; i++) {
            newpassword += "*";
        }
        return newpassword;
    }

    setPassword(pass) {
        try {
            if (/^(?=.*\d)(?=.*[A-Z]).{8,}$/.test(pass)) {
                this.password = pass;
                return "Password Changed"
            } else throw Error();
        } catch {
            return "Password must be at least 8 characters long and contains at least one number and one uppercase letter";
        }
    }
}

const user = new User("Mithun", "Password123");

console.log(user.getPassword());

console.log(user.setPassword("myPassword"));
console.log(user.setPassword("MyPassword"));
console.log(user.setPassword("Mypassword123"));

console.log(user.getPassword());
