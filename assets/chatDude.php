
            <div class="col-6">
                <p id="boiteDeDialogueReponse"></p>
            </div>
            <div class="col-6 d-flex align-items-center float-right">     
                <button type="button" onclick="loadAjaxPhp()" class="btn btn-light float-right">Envoyer</button>
                <input type="text" id="boiteDeDialogueEnvoi" class="float-right">
            </div>

                

    <script src="../main.js"></script>
    <script>
var input = document.getElementById("boiteDeDialogueEnvoi");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   loadAjaxPhp();
   document.getElementById("boiteDeDialogueEnvoi").click();
  }
});
</script>