// naam: vincent machiels

// hint: if( ! /^\d+$/.test(ingave) )


window.addEventListener("load", handleLoad);

function handleLoad () {
	let button_start_rekenen = document.getElementById("button_start_rekenen");
	button_start_rekenen.addEventListener("click",handleClick );
}


function handleClick () {
	let inputRek = document.getElementById('input_aantal').value,
		 output = document.getElementById("vermenigvuldigingen" );
	if (!/^\d+$/.test(button_start_rekenen) ) {



		output.textContent = "miss ingave voor aantal";
	}

		output.textContent = " "
		for (let i = 0 ; i < inputRek ; i++  ){
			let elementHr = document.createElement('hr');
			let elementDiv = document.createElement('div');
			let elementInput = document.createElement('input');
			elementInput.setAttribute("type", "text") ;
			elementDiv.textContent =   maakGetal(0,9) + "*" + maakGetal(0,9) +  "= " ;
			output.appendChild(elementHr);
			output.appendChild(elementDiv);
			elementDiv.appendChild(elementInput)

		}


}

const  maakGetal = (min, max) =>
	Math.floor(Math.random()*(max-min+1)+min);


document.body.addEventListener("keyUp", event => {
	if (event.target.nodeName == "input") {
		if (!/^\d+$/.test(event.key) ) {
			event.target.style.border = "1px solid red";
		}
	}
});



