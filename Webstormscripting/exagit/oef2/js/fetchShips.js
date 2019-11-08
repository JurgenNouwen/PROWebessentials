// naam: vincent machiels

window.addEventListener("load", handleWindowload);

function handleWindowload() {
    let url = 'http://localhost:3000/country/',
        eersteClick = false



    getAllCountrys(url);

    document.getElementById("get_ships").addEventListener('click', function(){

        handleGetShips(document.getElementById("select_country").value);
    });


}

function getAllCountrys(url) {
    fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => {
            resStatus = res.status;
            return res.json();
        })
        .then(response => {
            switch (resStatus) {
                case 200:


                    let elementSelect = document.createElement('select');
                    elementSelect.setAttribute("id", "select_country") ;
                    document.getElementById('div_select').appendChild(elementSelect);
                    for(let i = 0; i < response.length; i++){
                        let element = document.createElement('option');
                        let content =  response[i].name;
                        element.textContent = content;
                        element.setAttribute("value", response[i].id) ;
                        element.value = response[i].id;
                        document.getElementById('select_country').appendChild(element);
                    }

                    break
                case 400:
                    alert("error");
                    break
                case 500:

                default:
                    console.log('unhandled');
                    break
            }
        })
        .catch(err => {
            console.error(err)
        })

}


function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}


function handleGetShips(id) {
    let url = 'http://localhost:3000/ship/';

    makeElementEmpty(document.getElementById('div_output'));
        fetch(url + `?country_id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => {
                resStatus = res.status;
                return res.json();
            })
            .then(response => {
                switch (resStatus) {
                    case 200:
                        let speed = response[0].speed
                        for (let i = 0; i < response.length; i++) {
                             if (speed < response[i].speed){
                                 speed = response[i].speed ;
                             }
                        }

                        let elementSelect = document.createElement('ul');
                        elementSelect.setAttribute("id", "ul") ;
                        document.getElementById('div_output').appendChild(elementSelect);
                        for (let i = 0; i < response.length; i++) {
                            let element = document.createElement('li');
                            if (speed == response[i].speed){
                                element.style.color = "red";
                            }
                            let content = response[i].name;
                            element.textContent = content;
                            document.getElementById('ul').appendChild(element);
                        }

                        break
                    case 400:
                        alert("error");
                        break
                    case 500:

                    default:
                        console.log('unhandled');
                        break
                }
            })
            .catch(err => {
                console.error(err)
            })



}
