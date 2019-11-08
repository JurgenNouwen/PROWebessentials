// let date = new Date(2011,9,21);
// 21 oktober
// new Date(year, monthIndex [, day [, hours [, min [, sec [, millisec]]]]]);
//                jan ~ 0, feb ~ 1
// getMonth returns the month (0-11) in the specified date according to local time.
// The getFullYear() method returns the year of the specified date according to local time.
// The getDate() method returns the day of the month for the specified date according to local time.

let person={
	firstname:"tim",
	lastname:"geyskens",
	dateOfBirth: new Date(2011,9,21),
	calculateAge: function(){
			let now = new Date();
			let birthDayThisYear = 
				new Date(now.getFullYear(), 		
					this.dateOfBirth.getMonth(), 
					this.dateOfBirth.getDate()
				);	
			let differenceInYears = 
				now.getFullYear() - this.dateOfBirth.getFullYear();
			if (now < birthDayThisYear){
				differenceInYears--;
			}
			return differenceInYears;
	}
}
console.log(person.calculateAge());



