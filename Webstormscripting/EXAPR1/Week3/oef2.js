class Person{
	constructor(firstname, lastname, dateOfBirth){
		this._firstname=firstname;
		this._lastname=lastname;
		this._dateOfBirth=dateOfBirth;
	}
	set firstname(firstname){
		this._firstname=firstname;
	}
	set lastname(lastname){
		this._lastname=lastname;
	}
	set dateOfBirth(dateOfBirth){
		this._dateOfBirth=dateOfBirth;
	}
	get firstname(){
		return this._firstname;
	}
	get lastname(){
		return this._lastname;
	}
	get dateOfBirth(){
		return this._dateOfBirth;
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
let person = new Person("tim","geyskens",new Date(2011,9,21));
person.firstname="jan"; // setter wordt aangeroepen
console.log(person.firstname); // getter wordt aangeroepen
console.log(person.calculateAge());



