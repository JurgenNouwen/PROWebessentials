function minimum(...numberarray){
    let minvalue = numberarray[0];
    if (numberarray.length ==0) {
        minvalue = 0;
    }
    for (let i = 1; i < numberarray.length; i++){
        if (numberarray[i] < minvalue) {
            minvalue = numberarray[i]
        }
    }
    return minvalue;
}

console.log(minimum(16,18,19));
console.log(minimum(5))
console.log(minimum(5,9,18,7,39))