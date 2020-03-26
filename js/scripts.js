$(document).ready(function() {
  $("#action").submit(function() {
    var animal = $("#animal").val();
    console.log(animal);
    event.preventDefault();

    if (animal === "quokka") {
      $("#chinchilla".hide();
      $("#sloth").hide();
      $("#quokka").show();
    } else if (animal === "chinchilla") {
      $("#quokka".hide();
      $("#sloth").hide();
      $("#chinchilla").show();
    } else if (animal === "sloth") {
       $("#chinchilla".hide();
      $("#quokka").hide();
      $("#sloth").show();
    }
  });
});
