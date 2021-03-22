jQuery(document).ready(function($) {
    $('img').click(function(event) {
        // detect data-id for later
        var id = $(this).data('id');
        // grab src to replace #featured
        var src = $(this).attr('src');
        // set featured image
        var img = $('#featured img');

        img.fadeOut('fast', function() {
            $(this).attr({src: src,});
            $(this).fadeIn('fast');
        });
    });
});