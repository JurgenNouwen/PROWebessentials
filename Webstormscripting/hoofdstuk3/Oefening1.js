function vergelijking( a,b ) {
    if ( a < b ) {
        return "a is kleiner als b"
    } else {
        if (a == b) {
            return " a is gelijk aan b"
        }
        else {
            return "b is kleiner als a"
        }
    }
}
console.log(vergelijking( 4, 5));