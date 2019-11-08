        let nummer = 1;
        function verwijder(child) {
            let id = child.parentNode.id;
            let el = document.getElementById(id);
            el.parentNode.removeChild(el);

            if (document.getElementsByTagName("article").length === 0) {
                document.getElementById("legetodo").style.display = 'block';
            }
        }
        function toevoegen() {
            let naam = document.getElementById("naam").value;
            let datum = document.getElementById("datum").value;
            if (new Date() > new Date(datum)) {
                alert("het toevoegen van de ToDo gaat vanzelfsprekend niet meer door!");
            } else {
                document.getElementById("legetodo").style.display = 'none';
                let container = document.getElementById("todoContainer");
                let boodschap = berekenDagen(datum);

                container.innerHTML += '<article id="nummer' + nummer + '"><button class="delete" type="button" onclick="verwijder(this)">X</button><h2>' + naam + '</h2><h3>' + datum + '</h3><h3>' + boodschap + '</h3></article>';

                document.getElementById("naam").value = '';
                document.getElementById("datum").value = '';
                nummer++;
            }
        }
        function berekenDagen(deadline) {
            let boodschap = "";
            let vandaag = new Date();
            let deadlineDatum = new Date(deadline);
            let timespan = deadlineDatum - vandaag;
            let dagen = Math.floor(timespan / (1000 * 60 * 60 * 24));
            if (dagen === 0) {
                boodschap =  "Oh nee, nog maar 1 dag te gaan";
            } else {
                if (dagen > 0 && dagen !== '') {
                    boodschap =  "Oef, nog " + dagen + " dagen te gaan";
                } else {
                    boodschap =  "";
                }
            }
            console.log(boodschap);
            return boodschap;
        }