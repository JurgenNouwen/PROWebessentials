function fibonnaci(number) {
    if (number == 0 ) {
        return 1;
    } if (number ==1){
        return 1;
    }else {
        return ((number - 2 ) + (number - 1));
    }
}

console.log(fibonnaci(7));