function handleChangeLayout (event){
	let linkStylesheet=document.getElementById('stylesheet');
	// event.target = node die het event triggerd
	// <input type="button" id="knopOpmaak1" value="Opmaak 1"/>
	//                                       ****************
	if (event.target.value=='Opmaak 1'){
		linkStylesheet.href='style/opmaak1.css';
		//<link rel="stylesheet" href="style/opmaak1.css" id="stylesheet"/>
		//                       ************************
	} else {
		linkStylesheet.href='style/opmaak2.css';
	}
}

function handleLoad() {
	let btnOpmaak1=document.getElementById('knopOpmaak1');
	let btnOpmaak2=document.getElementById('knopOpmaak2');
	btnOpmaak1.addEventListener('click', handleChangeLayout);
	btnOpmaak2.addEventListener('click', handleChangeLayout);
	// btn.addEventListener('click', (event)=> {...});
}

window.addEventListener('load', handleLoad);

