class InputError extends Error {}
class Vec{
	constructor(x, y){
		if(typeof x != 'number' || typeof y != 'number'){
			throw new InputError();
		}
		this._x=x;
		this._y=y;
	}
	plus(vec){
		if(typeof vec != 'object' || !vec instanceof Vec) {
			throw new InputError();
		}
		return new Vec(this._x+vec._x, this._y+vec._y);
	}
	minus(vec){
		if(typeof vec != 'object' || !vec instanceof Vec) {
			throw new InputError();
		}
		return new Vec(this._x-vec._x, this._y-vec._y);
	}
	get length(){
		return Math.sqrt(this._x*this._x+this._y*this._y);
	}	
	toString(){
		return `(${this._x},${this._y})';
	}
}

try{
	let v=new Vec(2,3);
	let v2=new Vec(3,4);
	let v3=v.plus(v2);
	console.log(v.toString());
	// console.log(String(v));
	console.log(v.length);
	let v4=new Vec("oops",1);
} catch(error){
	console.log("error");
}
console.log("done");

