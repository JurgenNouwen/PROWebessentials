// naam: Joey Henckens

// hint: if( ! /^\d+$/.test(ingave) )


window.addEventListener("load", handleLoad);

function makeElementEmpty(element) {
    while (element.hasChildNodes()){
        element.removeChild(element.firstChild);
    }
}
function handleLoad () {
	let button_start_rekenen = document.getElementById("button_start_rekenen");
	button_start_rekenen.addEventListener("click",handleClick );
}


function handleClick () {
    let input = document.getElementById('input_aantal').value;
    let output = document.getElementById("vermenigvuldigingen");
    makeElementEmpty(output);
    let regualexpression = new RegExp("^(?=.*[0-9])");
    if(!regualexpression.test(input)) {
        alert("Gelieve een nummer in te geven!");
    }else{
    	for(let i=0;i<input;i++) {
            let hr = document.createElement("hr");
            let div = document.createElement("div")
            let getal1 = parseInt(10 * Math.random());
            let getal2 = parseInt(10 * Math.random());
            let input = document.createElement("input")
            let vraag = getal1 + " * " + getal2 + " =";
            div.appendChild(document.createTextNode(vraag));
            div.appendChild(input);
            output.appendChild(hr);
            output.appendChild(div);
            for (let j = 0; j < input; j++)
            {
                let input_event = document.getElementsByTagName("input");
                input_event.addEventListener("change", handleKeyupInput());
            }
        }
	}
}

function handleKeyupInput(event){




}

