const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){

  var autore = "?author=";

  if (location.search != ""){
    //location.search ti restituisce come array tutto quello che c'è dopo l'index.php nell'url (esempio ?author=queen)
    //con substr(1) dico di togliere il punto interrogativo dall'url
    //con split divido l'elemento in array in base al simbolo =
    var url = location.search.substr(1).split("=");

    autore += url[1];
  }

  $.ajax(
  {
    "url": "api.php" + autore,
    "method": "GET",
    "success": function (data) {
      print(data);
    },
    "error": function (errori) {
      // console.log(JSON.stringify(errori));
      alert("E' avvenuto un errore. " + errori);
    }
  }
  );

});

function print(result){
  var source = $("#disc-template").html();
  var template = Handlebars.compile(source);

  for(var i = 0; i < result.length; i++){

    var context = {
      "poster": result[i]["poster"],
      "tile": result[i]["title"],
      "author": result[i]["author"],
      "year": result[i]["year"]
    };

    var html = template(context);
    $(".cards").append(html);
  }

}
