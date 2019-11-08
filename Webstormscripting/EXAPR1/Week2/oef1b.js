function minimum ( ...waarden ){
	if(waarden.length === 0){
		return undefined;
	}
	let minimumWaarde=waarden[0];
	for (let i=1; i<waarden.length;i++){
		if (waarden[i]<minimumWaarde){
			minimumWaarde=waarden[i];
		}
	}
	return minimumWaarde;
}
console.log(minimum());
console.log(minimum(1));
console.log(minimum(-100,2,-1,3));
