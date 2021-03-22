function loadOW() {
  if(Cookies.get('meteoj')){
    var meteoj = Cookies.getJSON('meteoj');
    // console.log(meteoj);
    showMeteo(meteoj);
  }else{
    // console.log("request OW api");
  	var ville = "brussels,be";
  	var apikey = "d9239f5562299e8f32d4ceafcead79c4";
    $.get(
       "http://api.openweathermap.org/data/2.5/weather",
      {
          q: ville,
          appid: apikey,
          units: "metric",
          lang: "fr"
      },
      function(data, status){
        // console.log("create cookie");
      	Cookies.set('meteoj', data, { expires: 1, path: '/' });
        showMeteo(data);
    	},
    	"jsonp"
    );
  }
}

function showMeteo(data){
  var angle = data.wind.deg;
  var rose = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  var angleRose = rose[Math.floor((angle+22.5)/45)];

  $('.meteo-circle').html('<i class="owf owf-'+data.weather[0].id+'"></i>');

  // var ligneMeteo = 
  //   "<li>"+data.name+", "+data.sys.country+"</li>"+
  //   "<li>"+data.weather[0].description+"</li>"+
  //   "<li>"+data.main.temp+"°C</li>"+
  //   "<li>vent "+
  //     '<div class="fleche"><img class="img-fluid" style="transform: rotate('+angle+'deg); fill:#A5C400;" class="fl" alt=""></div>'+
  //     angleRose+" ("+data.wind.deg+"°)"+
  //     " ("+data.wind.speed+"km/h)"+
  //   "</li>";

    var ligneMeteo = "ville "+data.name +
        data.sys.country +
        data.weather[0].description +
        data.main.temp +
        angle +
        angleRose +
        data.wind.deg +
        data.wind.speed

  $('#boiteDeDialogueReponse').val('')
  
  var typed2 =  typeDD(ligneMeteo); // Affiche la meteo De bruxelles
}