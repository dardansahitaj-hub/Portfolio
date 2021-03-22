function OpenWeather() {
		// $(#titre).load(chemin+"/data.json");

    $.get(
    	"http://api.openweathermap.org/data/2.5/weather",
       {
       	q: "Brussels, BE",
       	appid: "c1282aeddb82bf297c55c70d852390af",
       	units: "metric",
       	lang: "fr"
       },
        function(data, status){
            // var infos = JSON.parse(data);
            
            // document.getElementById("titre").innerHTML = data;
            $('.ville').html(data['name']);
            $('.temps').html(data['weather'][0]['description']);
            $('.temperature').html(data['main']['temp']);
            $('.vent').html(data['wind']);

        }
    );
}





