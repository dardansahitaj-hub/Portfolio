function setWpoint(page) {
    var monCheck = new Waypoint({
        
        element: document.getElementById('waypointp'),
        handler: function(direction) {
            if(direction == "down"){
                $('#waypointp').removeAttr('id');
                monCheck.destroy();
                loadScroll(page);
            }

        }
        
      })
      
}

function loadScroll(page) {

    $.get(
        
        articlesdata,
        {  
            pagenum : page
        },

        function(data, status){
                   
            $('.articles').append(data);
            setWpoint(page+1);
           
        }
        
    );

}

