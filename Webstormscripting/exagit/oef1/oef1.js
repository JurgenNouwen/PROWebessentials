// naam: vincent machiels
class InputError extends Error {}
class Persoon{
    constructor(id, name, ){
        if (id < 0){
            throw new InputError();
        }
        if (typeof name != 'string'  || name.length <= 0) {
            throw new InputError();
        }
        this._id=id;
        this._name=name;

    }
    set id(id){
        this._id=id;
    }
    set name(name){
        this._name=name;
    }

    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    toString(){
        return `[${this._id}]${this._name}`;
    }


}


class  Loonwerker extends Persoon {
    constructor(id, name, loonPerUur, aantalUrenGewerkt){
        if (loonPerUur < 0){
            throw new InputError();
        }
        if (aantalUrenGewerkt < 0){
            throw new InputError();
        }

        super(id,name);
        this._loonPerUur = loonPerUur;
        this._aantalUrenGewerkt = aantalUrenGewerkt;
    }
    set loonPerUur(loonPerUur){
        this._loonPerUur=loonPerUur;
    }
    set aantalUrenGewerkt(aantalUrenGewerkt){
        this._aantalUrenGewerkt=aantalUrenGewerkt;
    }
    get loonPerUur(){
        return this._loonPerUur;
    }
    get aantalUrenGewerkt(){
        return this._aantalUrenGewerkt;
    }
    berekenLoon (){
        return this._aantalUrenGewerkt * this._loonPerUur ;
    }
    toString(){
        return `[${this._id}]${this._name} = ${this.berekenLoon()}`;
    }

}

class  Manager extends Persoon {
    constructor(id, name, loonwerkers){
        super(id,name);
        this._loonwerkers = [];
    }
    voegLoonWerkerToe (loonwerker){
        if(typeof loonwerker != 'object' || !loonwerker instanceof Loonwerker) {
            throw new InputError();
        }
        this._loonwerkers.push(loonwerker);

    }
    berekenLoon (){
        let loon = 0;
        for (let i = 1 ; i < this._loonwerkers.length ; i++){
            loon += this._loonwerkers[i].berekenLoon();
        }
        return Math.round(loon * 0.2);

    }
    toString(){
        return `[${this._id}]${this._name} = ${this.berekenLoon()}`;
    }

}

try {
    let persoon = new Persoon(1, "mieke");
    let manager = new Manager(2, "jan");
    let werker1 = new Loonwerker(1, "tim", 11, 13);
    let werker2 = new Loonwerker(4, "sofie", 2, 50);
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
}
catch (e) {
    console.log(e);
}
