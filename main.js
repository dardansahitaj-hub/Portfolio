$(document).ready(function() {

    var boiteDeDialogue = $('#boiteDeDialogue');
    var boiteDeDialogueReponse = $('#boiteDeDialogueReponse');
    var boiteDeDialogueTextarea = $('#boiteDeDialogueTextarea');
    var dude = $('#dude');
    var petitCroixDude = $('#petitCroixDude');
    var positionDude = true;
    var chatDude = "assets/chatDude.php";
    
    $('#dude,#petitCroixDude').click(function() {

        if(positionDude == true) { //reduire le bonhomme
            $("#dude")  .hide()
                        .addClass("dudeMini");
                        
            $('#petitCroixDude').attr('src','assets/img/logo.png').hide().fadeIn(800).addClass("croixMini");
            $('#boiteDeDialogue').hide();

            positionDude = false;
            ContenuDuTextDialogue = boiteDeDialogue[0].textContent;
            console.log(ContenuDuTextDialogue);
        }

        else if(positionDude === false) { // Aggrandir le bonhomme
            $("#dude")  .show()
                        .fadeIn(800)
                        .css({  'height':'550px',
                                'right':'-40px',
                                'top' :'70px'
                            })
                        .removeClass("dudeMini");
            
            $('#boiteDeDialogue').load(chatDude);
            $('#petitCroixDude').attr('src','assets/icon/bouton-moins.png').hide().fadeIn(800).addClass("croixMini");
            positionDude = true;
            ContenuDuTextDialogue = boiteDeDialogueTextarea.val;
            
            console.log(boiteDeDialogueTextarea);
        }

    });

    $('#contact').click(function(){
        boiteDeDialogue.removeClass('bg-color1');
        boiteDeDialogue.html('');
        boiteDeDialogue.load('contact.html')
                        
    })
    

});

function loadAjaxPhp() {

    var charge = new XMLHttpRequest();
    charge.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var boiteDeDialogueReponse = $('#boiteDeDialogueReponse');
            var boiteDeDialogueEnvoi = $('#boiteDeDialogueEnvoi').val().toLocaleLowerCase();         

            if(boiteDeDialogueEnvoi.includes("oui") == true ) {

                var typed2 = new Typed('#boiteDeDialogueReponse', {
                    strings: {boiteDeDialogueReponse},
                    typeSpeed: 0,
                    backSpeed: 0,
                    fadeOut: true,
                    loop: false
                });
    
            }

            // Par rapport à l'âge 
            else if ( boiteDeDialogueEnvoi.includes("dardan") && boiteDeDialogueEnvoi.includes("age") == true || boiteDeDialogueEnvoi.includes("dardan") && boiteDeDialogueEnvoi.includes('âge') ) {

                if(typeof(boiteDeDialogueReponse) == 'undefind' || typeof(boiteDeDialogueEnvoi) == '') {

                   
                    
                    $('#boiteDeDialogueEnvoi').val('');
                    console.log(boiteDeDialogueEnvoi)
                }
                else {

                    
                    var typed2 = new Typed('#boiteDeDialogueReponse', {
                        strings: ['Dardan est née le 28 Décembre 1994, Aujourd\'hui agée de 27 ans'],
                        typeSpeed: 20,
                        backSpeed: 0,
                        fadeOut: true,
                        loop: false
                    });
                    $('#boiteDeDialogueEnvoi').val(''); //Vide le texte du user

                }
                               
            }

            // Par rapport au compétences
            else if( boiteDeDialogueEnvoi.includes("compétences")) {

                boiteDeDialogueReponse.val('Ses compétences sont')
                $('#boiteDeDialogueEnvoi').val(''); //Vide le texte du user

            }

            else if(boiteDeDialogueEnvoi.includes(prenomExistant))
            {
                boiteDeDialogueReponse.html('prenom existant')
                $('#boiteDeDialogueEnvoi').val('');
            }


            // Si nous la phrase n'est pas compris
            else {

                boiteDeDialogueReponse.html('Je ne vous comprends pas')
                $('#boiteDeDialogueEnvoi').val(''); //Vide le texte du user

            }
            

        }
    };
    // charge.open("GET", "data.txt", true);
    charge.open("GET", "assets/chatDude.php", true);
    charge.send();
}