$(document).ready(function() {

    $(petitCroixDude).click(function() {

        if(positionDude == true) { //reduire le bonhomme
            $("#dude").hide('slow');                    
            $(petitCroixDude).attr('src','assets/img/logo.png').fadeIn('slow').addClass("croixMini");
            $('label, iframe').hide('slow');
            $('#dashbord').css('width','2%');
            $('#body').css('width','92%');

            positionDude = false;
            
        } // fin du if pour réduire le bonhomme

        else if(positionDude == false) { // Aggrandir le bonhomme
            $(dude).show('fast')
                        // .removeClass("dudeMini");
                        $('label, iframe').show('slow');
                        $('#dashbord').css('width','10%');
                        $('#body').css('width','84%');
                        $(boiteDeDialogue).load(chatDude);                    
            $(petitCroixDude).attr('src','assets/icon/bouton-moins.png').fadeIn('5000');

            positionDude = true;         
        } // Fin Else if pour aggrandir le bonhomme
    }); // Fin function click dude et petit croix

    $(dude).click(function(){
            $(boiteDeDialogue).show('slow').load(chatDude);    
            $('#premierDialogue').hide();

    }); // Fin du click sur dude

});//Fin document ready