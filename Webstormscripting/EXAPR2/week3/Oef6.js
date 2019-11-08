class PolyLine{
    constructor(vecs = []) {
        this._vecs = vecs;
    }

    addVec(value) {
        try {
            this._vecs.push(value);
        } catch (error) {
            if (error instanceof inputError){
                console.log("inputError")
            }
        }
    }

    toString(){
        for (i = 1; i < this._vecs.length; i++){
            console.log("waardenr: ",i, "waarde: ", this._vecs.value(i))
        }
    }

}

PolyLine test1 = new PolyLine;

test1.addVec(5);
test1.addVec(7);
test1.addVec(9);

test1.toString();