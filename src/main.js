const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){

  // var autore = "?author=";
  //
  // if (location.search != ""){
  //   //location.search ti restituisce come array tutto quello che c'è dopo l'index.php nell'url (esempio ?author=queen)
  //   //con substr(1) dico di togliere il punto interrogativo dall'url
  //   //con split divido l'elemento in array in base al simbolo =
  //   var url = location.search.substr(1).split("=");
  //
  //   autore += url[1];
  // }

  $.ajax(
  {
    "url": "http://localhost/php-ajax-dischi/api.php",
    "method": "GET",
    "success": function (data) {
      printAlbums(data);
      printSelectAlbum(data);
    },
    "error": function (errori) {
      // console.log(JSON.stringify(errori));
      alert("E' avvenuto un errore. " + errori);
    }
  }
  );

  $(".select-artist").change(function(){
    var selectVal = $(this).val();

    $.ajax(
      {
        "url": "http://localhost/php-ajax-dischi/api.php",
        "data": {
          "author" : selectVal
        },
        "method" : "GET",
        "success" : function (data){
          printAlbums(data);

        },
        "error" : function (errori){
          alert("E' avvenuto un errore. " + errori);
        }
      }
    );
  })

});


function printAlbums(result){

  $(".cards").html("");
  var source = $("#disc-template").html();
  var template = Handlebars.compile(source);

  for(var i = 0; i < result.length; i++){

    var context = {
      "poster": result[i]["poster"],
      "title": result[i]["title"],
      "author": result[i]["author"],
      "year": result[i]["year"]
    };

    var html = template(context);
    $(".cards").append(html);
  }
}

function printSelectAlbum(data){
  var authorArray = [];
  for(var i = 0; i < data.length; i++){

    var author = data[i]["author"];

    if(!authorArray.includes(author)){

      var source = $("#select-template").html();
      var template = Handlebars.compile(source);

      var context = {
        "author": author
      }

      var html = template(context);
      $(".select-artist").append(html);
      authorArray.push(author);
    }
  }
}
