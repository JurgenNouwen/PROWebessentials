let persoon={
    firstname: "jurgen",
    lastname:"nouwen",
    dateOfBirth:new Date(1998,11,13),
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
    },
    print:function(){
        console.log("voornaam", this.firstname, "achternaam", this.lastname,"age", this.calculateAge(this.dateOfBirth));
    }
}
persoon.print()