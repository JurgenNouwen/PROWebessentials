// naam: Joey Henckens
let country_id = 1;

window.addEventListener("load", handleWindowload);
function makeElementEmpty(element) {
    while (element.hasChildNodes()){
        element.removeChild(element.firstChild);
    }
}
function makeTable(matrix,id) {
    let ul = document.createElement("ul");
    for(let i=0;i<matrix.length;i++){
        let li = document.createElement("li");
        if(i > id.length){
            li.style.color = "black";
        }
        else{
            if(matrix[i] == id[i]) {
                li.style.color = "red";
            }
            else{
                li.style.color = "black";
            }
        }
        console.log(matrix[i]   );
        li.appendChild(document.createTextNode(matrix[i]))
        ul.appendChild(li);
    }

    return ul;
}
function makeSelect(matrix) {
    let select = document.createElement("select");
    for(let i=0;i<matrix.length;i++){
        let option = document.createElement("option");
        for(let j=0;j<matrix[i].length;j++){
            option.appendChild(document.createTextNode(matrix[i][j]))
        }
        select.appendChild(option);
    }
    return select;
}
function handleWindowload() {
    let buttonShips = document.getElementById("get_ships");
    buttonShips.addEventListener("click",handleGetShips);
    let url = 'http://localhost:3000/country/';
    let output = document.getElementById("div_select");
    fetch(url)
        .then((response)=>{
            if(response.status === 200){
                return response.json();
            }else{
                throw 'error with status ${response.status}';
            }
        })
        .then((allcountry) =>{
            let data = [];
            for(let country of allcountry){
                data.push(country.name);
            }
            let table = makeSelect(data);
            output.appendChild(table);
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });
}

function handleGetShips() {
    let url = 'http://localhost:3000/ship/?country_id=' + country_id;
    let output = document.getElementById("div_output");
    makeElementEmpty(output);
    fetch(url)
        .then((response)=>{
            if(response.status === 200){
                return response.json();
            }else{
                throw 'error with status ${response.status}';
            }
        })
        .then((ships) =>{
            let data = [];
            let dataship = [];
            for(let ship of ships){
                let snelstesneldheid=5;
                data.push([ship.id,ship.name]);
                if(ship.speed > snelstesneldheid ){
                    if(ship.speed === snelstesneldheid){
                        dataship.push(ship.id);
                    }else{
                    dataship = [];
                    dataship.push(ship.id,ship.name);}
                }

            }
            let table = makeTable(data,dataship);

            output.appendChild(table);
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });
}
