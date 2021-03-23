jQuery(document).ready(function($) {
    $('img').click(function(event) {
        // detect data-id for later
        var id = $(this).data('id');
        // grab src to replace #featured
        var src = $(this).attr('src');
        // set featured image
        var img = $('#featured img');
        // le titre du Projet
        var titreProjet = $('#titreProjet');
        // Les détails du projet
        var detailProjet = $('#detailProjet');

        img.fadeOut('fast', function() {
            $(this).attr({src: src,});
            $(this).fadeIn('slow');
        });

        if( id === 1 ) {      
            titreProjet.html('ARM Concept')    ;
            detailProjet.html('Achat & Vente Véhicule');
        }
        else if (id === 2 ){
            titreProjet.html('Jessica Couture');
            detailProjet.html('Couture');
        }
        else if (id === 3 ){
            titreProjet.html('DELUX Paint Protection');
            detailProjet.html('Carrosier');
        }
        else if (id === 4 ){
            titreProjet.html('ALL IN Bruxelles');
            detailProjet.html('Entreprise générale de rénovation');
        }
        else if (id === 5 ){
            titreProjet.html('Pollino');
            detailProjet.html('Restaurent Italien');
        }
        else if (id === 6 ){
            titreProjet.html('Jacothec');
            detailProjet.html('Entreprise générale de batiment');
        }
        else if (id === 7 ){
            titreProjet.html('SEO Design');
            detailProjet.html('Agence Web & Communication');
        }
        else if (id === 8 ){
            titreProjet.html('The Moon Lounge');
            detailProjet.html('Lounge');
        }
        else if (id === 9 ){
            
        }
    });
});