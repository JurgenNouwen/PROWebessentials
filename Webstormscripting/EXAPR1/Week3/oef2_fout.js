class Person{
	constructor(firstname, lastname, dateOfBirth){
		this.firstname=firstname;
		this.lastname=lastname;
		this.dateOfBirth=dateOfBirth;
	}
	set firstname(firstname){
		this.firstname=firstname;
	}
	set lastname(lastname){
		this.lastname=lastname;
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



