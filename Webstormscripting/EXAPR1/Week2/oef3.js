function fibonacci(getal){
	if (getal === 0) {
		return 1;
	}
	if (getal === 1) {
		return 1;
	}
	return fibonacci(getal-1)+fibonacci(getal-2);
}

console.log("fibonacci(5)=" + fibonacci(5));

console.log("fibonacci(100)...");
console.log("fibonacci(100)=" + fibonacci(100));


