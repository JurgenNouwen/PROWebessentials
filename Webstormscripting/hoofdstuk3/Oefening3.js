function fibonacci( number ) {
    if ( number == 0 || number == 1 ){
        return 1;
    } else {
        return fibonacci( number - 2 ) + fibonacci( number - 1 );
    }
}
console.log(fibonacci(5));