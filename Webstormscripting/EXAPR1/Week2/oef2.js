function isEven(getal){
	if (getal === 0) {
		return true;
	}
	if (getal === 1) {
		return false;
	}
	return isEven( getal-2 );
}
console.log(isEven(4));
// probeer ook de onderstaande regel
// console.log(isEven(100000));

// 	niet-recursieve uitwerking is veel efficienter
// 	const isEven = (getal) => getal % 2 == 0;
// 

