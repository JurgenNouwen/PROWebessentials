  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"}
  ];

function handleLoad(){
	let mountain1=MOUNTAINS[0];
	let keysMountain1=Object.keys(mountain1);
	let row = '';
	for(let key of keysMountain1){
		row=row+'\t'+key;
	}
	console.log(row);
	for (let mountain of MOUNTAINS){
		let keysMountain=Object.keys(mountain);
		let row = '';	
		for(let key of keysMountain1){
				// console.log(mountain.name);
				// let key='name';  
				// console.log(mountain[key]);
			row=row+'\t'+mountain[key];
		}
		console.log(row);
	}
}

window.addEventListener("load", handleLoad);

