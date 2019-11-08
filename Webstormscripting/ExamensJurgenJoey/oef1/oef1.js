// naam: Jurgen Nouwen
'use strict'

class Persoon {
    constructor(ID, naam) {
        if (persoon._ID < 1){
            throw new Error("Error: ID kleiner als 1")
        }
        if (typeof persoon._naam != typeof String){
            throw new Error("Error: naam moet een String zijn")
        }
        this._naam = naam;
        this._ID = ID;
    }
    toString(){
        return '(${this._ID},${this._naam})';
    }
}

class Loonwerker extends Persoon{
    constructor(ID, naam, loonPerUur, aantalUrenGewerkt){
        if (persoon._ID < 1){
            throw new Error("Error: ID kleiner als 1")
        }
        if (typeof persoon._naam != typeof String){
            throw new Error("Error: naam moet een String zijn")
        }
        if (Loonwerker._loonPerUur < 1){
            throw new Error("Error: loonPerUur kleiner als 1")
        }
        if (Loonwerker._aantalUrenGewerkt < 1){
            throw new Error("Error: aantalUrenGewerkt kleiner als 1")
        }
        super(ID,naam);
        this._loonPerUur = loonPerUur;
        this._aantalUrenGewerkt = aantalUrenGewerkt;
    }
    get loonPerUur(){
        return loonPerUur;
    }
    get aantalUrenGewerkt(){
        return aantalUrenGewerkt;
    }
    berekenLoon(){
        return aantalUrenGewerkt * loonPerUur;
    }
    toString(){
        return super.toString() + " = " + Loonwerker.berekenLoon();
    }
}

class Manager extends Persoon{
    constructor(ID, naam, loonWerkers){
        if (persoon._ID < 1){
            throw new Error("Error: ID kleiner als 1")
        }
        if (typeof persoon._naam != typeof String){
            throw new Error("Error: naam moet een String zijn")
        }
        super(ID,naam);
        this._loonWerkers = loonWerkers;
        loonWerkers = [];
    }
    voegLoonWerkerToe(loonWerker){
        if (voegLoonWerkerToe(loonWerker != null)) {
            loonWerkers[loonWerker.ID + 1].push(loonWerker.ID);
        } else {
            throw new Error("Error: Loonwerker bevat geen inhoud")
        }
    }
    berekenLoon(){
        let startloon;
        for ( let i = 1; i < loonWerkers.length; i++){
            startloon = startloon + loonWerker.berekenLoon();
        }
        let eindloon = startloon * 0.2;
        return eindloon.round(3.0);
    }
    toString(){
        super.toString() + " = " + Manager.berekenLoon;
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

try {

} catch (Error){
    console.log(Error)
}