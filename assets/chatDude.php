                <button type="button" onclick="loadAjaxPhp()" class="bg-color2 text-white rounded p-1">Envoyer</button>
                <input type="text" id="boiteDeDialogueEnvoi" class="rounded p-1 text-center" onfocus="this.value=''" placeholder="Une question?"> 
           
               
           

    <script>
        var input = document.getElementById("boiteDeDialogueEnvoi");
        input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        loadAjaxPhp();
        document.getElementById("boiteDeDialogueEnvoi").click();
        }
        });
    </script>