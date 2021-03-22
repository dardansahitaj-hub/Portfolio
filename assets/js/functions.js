// -------- DEBUT Menu ----------------
function clickSurProjets() {
    $('#body').css({'position':'relative',
    'right':'0'
    }).fadeOut('slow');
    $('#footer').css('visibility','visible');

    body.load('mes-projets.html');

}// Fin function clickSurProjets

function clickSurCV() {
    $('#body').css({'position':'relative',
    'right':'0'
    });
    $('#footer').css('visibility','hidden');

    body.load('mon-cv.html');
}// Fin function clickSurProjets

function clickSurAProposDeMoi() {
    $('#body').css({'position':'relative',
    'right':'0'
    });
    $('#footer').css('visibility','visible');

    body.load('a-propos-de-moi.html'); 
}// Fin function clickSurAProposDeMoi
function clickSurContact() {
    $('#body').css({'position':'relative',
                    'right':'0',
                    'justify-content' : 'start'
    });
    $('#footer').css('visibility','visible');
    body.load('contact.html'); 
}// Fin function clickSurContact
// -------- FIN Menu ----------------

function removeAllBoiteDeDialogue () {
        premierDialogue .hide()
                        .html('');                           
    }
function jeuxDude() {
    
    $('#body').load('includes/jeux2/index.html');
}

function typeDD(textReponseDude){
    $('#boiteDeDialogueEnvoi').val('');
        var typed2 = new Typed('#boiteDeDialogueReponse', {
            strings: [textReponseDude],
            typeSpeed: 0,
            backSpeed: 0,
            fadeOut: true,
            loop: false,
            showCursor:false
        });
        return typed2;
    }

function typeDD2(cibleType , textReponseIntro , textReponse1 , textReponse2 , textReponse3) {
    $('#boiteDeDialogueEnvoi').val('');

    var typed3 = new Typed(cibleType, {
        strings: [textReponseIntro+textReponse1, textReponseIntro+textReponse2, textReponseIntro+textReponse3],
        typeSpeed: 50,
        backSpeed: 50,
        smartBackspace: true, // this is a default
       
        loop: false,
        showCursor: false
      });
     
      return typed3;

     
}

function monAdresseIP(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {   
        var typed2 =  typeDD('Votre adresse ip est : ' + e.ip); // Adresse ip = e.ip
       
    });


}


function backgroundBlackWhite () { // Changer couleur actuelle
   
   couleurActuel = $('body').css('background-color');
    if(couleurActuel == "rgb(0, 0, 0)"){
        $("body").css({'background-color':'white',
        'color':'black'});
        
    }
    else  {
          $("body").css({'background-color':'black',
                        'color':'white'});
                        
         }

}

function boxShadowOnOff () {



    if(typeof boxShadowOnOffPosition == 'undefined') {
        $('header, #dashbord, .styleBasic').css('box-shadow','0 0 0');
        console.log('undefind');
        boxShadowOnOffPosition = true;
    }

    else if (boxShadowOnOffPosition == true) {
        $('header, #dashbord, .styleBasic').css('box-shadow','1px 4px 6px #00A3CF');
        console.log('true');

        boxShadowOnOffPosition = false;
    }
    else if (boxShadowOnOffPosition == false) {
        $('header, #dashbord, .styleBasic').css('box-shadow','0 0 0');
        console.log('false');
        boxShadowOnOffPosition = true;
    }
}

function faireUnCalcul(boiteDeDialogueEnvoi) {
            var value2 = eval($( "#boiteDeDialogueEnvoi" ).val());    // Fonction pour faire un calcul     
            var typed2 =  typeDD(boiteDeDialogueEnvoi + ' = ' + value2); // Affiche la réponse du calcul
}

function faireUneRotation(){
    $("jtoggler").css({
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "transform": "rotate(180deg)" /* For modern browsers(CSS3)  */
    });


}

function loadAjaxPhp() {
    var charge = new XMLHttpRequest();
    charge.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var boiteDeDialogueReponse = $('#boiteDeDialogueReponse');
            var boiteDeDialogueEnvoi = $('#boiteDeDialogueEnvoi').val().toLocaleLowerCase();         

            if(boiteDeDialogueEnvoi.includes("oui") == true ) { // Si le user introduit "oui"
            var typed2 =  typeDD(textReponseOui);   
            }

            // Par rapport à l'âge 
            else if ( boiteDeDialogueEnvoi.includes("dardan") && boiteDeDialogueEnvoi.includes("age") == true || boiteDeDialogueEnvoi.includes("dardan") && boiteDeDialogueEnvoi.includes('âge') ) {

                if(typeof(boiteDeDialogueReponse) == 'undefind' || typeof(boiteDeDialogueEnvoi) == '') {                              
                    $('#boiteDeDialogueEnvoi').val('');
                }
                else {       
                    removeAllBoiteDeDialogue();
                    var typed2 =  typeDD(textReponseAge); 
                } // Fin du Else                            
            }

            
            else if( boiteDeDialogueEnvoi.includes("compétences") ) { // Par rapport au compétences
                var typed2 =  typeDD(textMesCompetences); 
                $('#boiteDeDialogueEnvoi').val(''); //Vide le texte du user
            }// Fin du Else if

            else if( boiteDeDialogueEnvoi.includes(prenomExistant) ) {
                boiteDeDialogueReponse.html('prenom existant')
                $('#boiteDeDialogueEnvoi').val('');//Vide le texte du user
            }// Fin du Else if 


        
            else if( boiteDeDialogueEnvoi.includes('contact') ) { // Demande a me contacter
                clickSurContact();
            }

            else if( boiteDeDialogueEnvoi.includes('projets') || boiteDeDialogueEnvoi.includes('projet') ) { // Demande des infos sur mes projets
                clickSurProjets();
            }
            else if( boiteDeDialogueEnvoi.includes('cv') ) { // Demande des infos de contact
                clickSurCV();
            }

            else if (boiteDeDialogueEnvoi.includes('+') || boiteDeDialogueEnvoi.includes('-') || boiteDeDialogueEnvoi.includes('*') || boiteDeDialogueEnvoi.includes('/')  || boiteDeDialogueEnvoi.includes('%')  ) {
                faireUnCalcul(boiteDeDialogueEnvoi);
                console.log($.isNumeric(boiteDeDialogueEnvoi))
            }

            else if( boiteDeDialogueEnvoi.includes('ip') ) {
                monAdresseIP();   
            }
            else if( boiteDeDialogueEnvoi.includes('meteo') || boiteDeDialogueEnvoi.includes('temps') ) {
                OpenWeather();
                loadOW();             
            }

            else if(boiteDeDialogueEnvoi.includes('jeux')) {
                jeuxDude();
            }

            else if(boiteDeDialogueEnvoi.includes('movie')) {
                loadMDB ();
                searchMovie ();
            }
            
            
            else {// Si nous la phrase n'est pas compris
                boiteDeDialogueReponse.html('Je ne vous comprends pas')
                $('#boiteDeDialogueEnvoi').val(''); //Vide le texte du user
            }           
        }
    };
    // charge.open("GET", "data.txt", true);
    charge.open("GET", "assets/chatDude.php", true);
    charge.send();
}

