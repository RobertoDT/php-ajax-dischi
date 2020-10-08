const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){
  $.ajax(
  {
    "url": "http://localhost/php-ajax-dischi/api.php",
    "method": "GET",
    "success": function (data, stato) {
      print(data);
    },
    "error": function (richiesta, stato, errori) {
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
