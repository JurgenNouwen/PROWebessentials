// naam: Joey Henckens


class Persoon{
    constructor(id, naam) {
            this.id = id;
            this.naam = naam;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        if(value <= 0 && typeof value !== "number") {
            throw new InputError(`id must be bigger then 0 and must be a number`);
        }else {
            this._id = value;
        }
    }
    get naam() {
        return this._naam;
    }
    set naam(value) {
        if(typeof naam == "string")
        {
            this._naam = value;
        }

    }
    toString() {
        return `[${this.id}] ${this.naam}`;
    }
}
class Loonwerker extends Persoon{
    constructor(id, naam,loonPerUur,aantalUrenGewerkt) {
          super();
          super.id = id;
          super.naam = naam;
          this.loonPerUur = loonPerUur;
          this.aantalUrenGewerkt = aantalUrenGewerkt;
    }
    get loonPerUur() {
        return this._loonPerUur;
    }
    set loonPerUur(value) {
        if(value <= 0 && typeof value !== "number") {
            throw new InputError(`loonPerUur must be bigger then 0 and must be a number`);
        }else {
            this._loonPerUur = value;
        }
    }
    get aantalUrenGewerkt() {
        return this._aantalUrenGewerkt;
    }
    set aantalUrenGewerkt(value) {
        if(value <= 0 && typeof value !== "number") {
            throw new InputError(`aantalUrenGewerkt must be bigger then 0 and must be a number`);
        }else {
            this._aantalUrenGewerkt = value;
        }
    }
    berekenLoon(){
        let loon = this.aantalUrenGewerkt * this.loonPerUur;
        loon = Math.round(loon);
        return loon;
    }
    toString() {
        return `[${this.id}] ${this.naam} =  ${this.berekenLoon()} `;
    }

}
class Manager extends Persoon{
    constructor(id, naam) {
        super();
        super.id = id;
        super.naam = naam;
        let Loonwerkers = [];
    }
    voegLoonWerkerToe(value){
        if(value != null) {
            Loonwerker.push(value);
        }
        else
        {
            throw new InputError(`loonwerkers is empty`);
        }

    }
    berekenLoon(){
        let loon;
        for(let i=0; i<Loonwerker.length;i++) {
            loon =+ Loonwerker[i]
            loon = Math.round(loon);
        }
        loon = loon*0.2;
        return loon;
    }

    toString() {
        return `[${this.id}] ${this.naam} =  ${this.berekenLoon()} `;
    }

}
class InputError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }
}
let persoon = new Persoon(1,"mieke");
let manager=new Manager(2,"jan");
let werker1=new Loonwerker(3,"tim",11,13);
let werker2=new Loonwerker(4,"sofie",2,50);
manager.voegLoonWerkerToe(werker1);
manager.voegLoonWerkerToe(werker2);
console.log(persoon.toString());
// [1] mieke
console.log(werker1.toString());
// [3] tim = 143
console.log(werker2.toString());
// [4] sofie = 100
console.log(manager.toString());
// [2] jan = 49


