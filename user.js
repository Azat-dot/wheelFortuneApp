
export class User {
    constructor(name, surname, balance = 0) {
        this.name = name;
        this.surname = surname;
        this.balance = balance;
    } 

    get photoURL() {
        return "https://i.pravatar.cc/300";
      }
}