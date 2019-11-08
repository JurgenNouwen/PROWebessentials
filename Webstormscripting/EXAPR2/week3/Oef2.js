class persoon{
    constructor(firstname,lastname,dateOfBirth){
        this._firstname = firstname;
        this._lastname = lastname;
        this._dateOfBirth = dateOfBirth;
    }


    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    calculateAge(){
        let now = new Date();
        let birthDayThisYear=new Date(now.getFullYear(), this._dateOfBirth.getMonth(), this.dateOfBirth.getDate());
        let differenceInYears=now.getFullYear()-this._dateOfBirth.getFullYear();
        if (now < birthDayThisYear){
            differenceInYears--;
        }
        return differenceInYears;
    }
}
let person = new persoon("tim","geyskens",new Date(2011,9,21));
person.firstname="jan"; // setter wordt aangeroepen
console.log(person.firstname); // getter wordt aangeroepen
console.log(person.calculateAge());