
export class User {
    constructor(name, surname, balance = 0) {
        this.name = name;
        this.surname = surname;
        this.balance = balance;
    } 

    get photoURL() {
        return "https://i.pravatar.cc/300";
      }

      toJSON() {
        return {
          name: this.name,
          surname: this.surname,
          balance: this.balance,
          photoURL: this.photoURL
        }}


}