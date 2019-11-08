  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

function makeTr(object, header=false){
	let tr=document.createElement("tr");
	let keys=Object.keys(object);
	for(let key of keys){
		let type="td";
		let value = object[key];
		if(header){
			type="th";
			value=key;
		}
		let td=document.createElement(type);
		td.appendChild(document.createTextNode(value));
		if (typeof value=='number'){
			td.style.textAlign='right';
		}
		tr.appendChild(td);
	}
	return tr;
}

function handleLoad(){
	let table=document.createElement("table");
	let first=true;
	for (let mountain of MOUNTAINS){
		if (first){
			let tr=makeTr(mountain,first);	
			table.append(tr);
			first=false;
		}
		let tr=makeTr(mountain);	
		table.append(tr);
	}
	document.getElementById('mountains').appendChild(table);
}

window.addEventListener("load", handleLoad);

