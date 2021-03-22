console.log('hello');

function loadAjaxTxt() {
    var charge = new XMLHttpRequest();
    charge.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("titre").innerHTML = this.responseText;
        }
    };
    // charge.open("GET", "data.txt", true);
    charge.open("GET", chemin+"/data.txt", true); //True pour async -- False pour sync
    charge.send();
}

// readyState : Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// status
// 200: "OK"
// 403: "Forbidden"
// 404: "Page not found"

function loadAjaxJson() {
    var charge = new XMLHttpRequest();
    charge.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('titre').innerHTML = this.responseText;
            // var texte = JSON.parse(this.responseText);
            // document.getElementById("titre").innerHTML = texte[0] + " " + texte[1] + " " + texte[2];

        }
    };
    // charge.open("GET", "data.txt", true);
    charge.open("POST", chemin+"/data.json", true);
    charge.send();
}


function loadAjaxPhp() {
    var charge = new XMLHttpRequest();
    charge.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var texte = JSON.parse(this.responseText);
            document.getElementById("titre").innerHTML = texte[0] + " " + texte[1] + " " + texte[2];

        }
    };
    // charge.open("GET", "data.txt", true);
    charge.open("GET", chemin+"/data.php", true);
    charge.send();
}


function loadAjaxJQ() {
		// $(#titre).load(chemin+"/data.json");

    $.post(
        chemin+"/data.php",
        {
            prenom: "Will",
            nom: "Smith"
        },
        function(data, status){
            var infos = JSON.parse(data);
            console.log(infos);
            // document.getElementById("titre").innerHTML = data;
           $("#titre").html(infos[0]);

        }
    );
}