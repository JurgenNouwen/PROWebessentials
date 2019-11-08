// naam: Jurgen Nouwen

if( ! /^\d+$/.test(ingave) )


window.addEventListener("load", handleLoad);

function handleLoad () {
    let button_start_rekenen = document.getElementById("button_start_rekenen");
    button_start_rekenen.addEventListener("click", handleClick);

}
function handleClick () {
    let startGetal = document.getElementById("input_aantal");
    if ( isNaN(startGetal)){
        document.createElement(alert("Foutieve ingave voor aantal"));
    } else {
        for ( let i = 0; i < startGetal; i++){
            createNewExercises()
        }
    }
}

function createNewExercises() {
    let ingaveVak = document.getElementById("vermenigvuldigen");
    let getal1 = parseInt(10*Math.random());
    let getal2 = parseInt(10*Math.random());
    document.createElement("hr");
    let rekensom =(getal1 + " * " + getal2 + " = " );
    rekensom.appendChild(document.createElement("div"));
    let weergave =parseFloat( rekensom.value );

    if (isNaN(event.target.textContent.weergave)){
        event.target.textContent.color = "red"
    }

}


function handleKeyupInput(event){

}

