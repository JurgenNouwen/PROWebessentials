const handleClick = () => { 
    let inputGetal1 = document.getElementById("input_getal1");
    let inputGetal2 = document.getElementById("input_getal2");
    let inputUitkomst = document.getElementById("input_uitkomst");

    let getal1=parseFloat( inputGetal1.value );
    let getal2=parseFloat( inputGetal2.value );

    if ( isNaN(getal1) || isNaN(getal2)){
        inputUitkomst.value = "oops";
    } else {
        inputUitkomst.value = getal1 * getal2 ;
    }
}

const handleLoad = () => {
    let buttonBereken = document.getElementById("button_bereken");
    buttonBereken.addEventListener("click",handleClick );
}

window.addEventListener("load", handleLoad);























