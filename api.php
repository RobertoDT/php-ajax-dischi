<?php

  include "db.php";

  $arrayTempo = [];

  if(empty($_GET["author"]) || $_GET["author"] == "All"){

    $arrayTempo = $database;

  } else {

   $author = strtolower($_GET["author"]);

   foreach ($database as $discs) {
     //controllo se l'autore che sto cercando metcha con quello presente nel mio db
     if(strtolower($discs["author"]) == $author){

       $arrayTempo[] = $discs;

     }
   }
  }

  header('Content-Type: application/json');

  echo json_encode($arrayTempo);

 ?>
