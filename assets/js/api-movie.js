var MDBapikey = "be6f4eb72e4ac2c65624c92bdf3e6af8";

  //The movie DB
  function initMDB () {
    if(!sessionStorage.getItem('configuration'))
      $.get(
        "https://api.themoviedb.org/3/configuration",
        {
          api_key : MDBapikey
        },
        function(data,status) {
          sessionStorage.setItem('configuration', JSON.stringify(data));      
        },
        "jsonp"
      );
    }

function searchMovie() {
      mots = $('#boiteDeDialogueEnvoi').val();
      loadMDB(mots);
}



  function loadMDB(mots) {
    var query = mots;
    var config = JSON.parse(sessionStorage.getItem('configuration'));

    $('.carousel').hide().val('');

    $.get(
      "https://api.themoviedb.org/3/search/movie" ,
      {
        query : query,
        api_key : MDBapikey
      },
      function(data,status) {
        
        $.each(data.results, function (index, value){
        
          var htmlImg = ' <img src ="' + config.images.base_url+config.images.poster_sizes[4]+value.poster_path + '" class="w-25 rounded my-2" alt="" " /> ';
          removeAllBoiteDeDialogue();
          
          $('#body').removeClass('flex-column')
                    .addClass('flex-wrap')
                    .css({'position':'relative',
                          'right':'0'})
                    .fadeIn()
                    .append('<div class="d-flex flex-column flex-wrap width-18-100 h-25 styleBasic text-center justify-content-center align-items-center">' + 
                            ' <h6 class="text-white my-2"> ' + value.original_title + ' ' + data.results[index].vote_average + '/10 </h6> ' +
                            htmlImg + 
                            '</div>');

                            console.log(data.results[0].vote_average)
          
        });
      },
      "jsonp"
    );
  }

