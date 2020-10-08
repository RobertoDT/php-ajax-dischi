<?php

  include "db.php";
  header('Content-Type: application/json');

  // ciclare db e prendermi cd di quel determinato autore
  $author = $_GET["author"];

  if(!empty($author)){
    //creo un array temporaneo che ospiterà il singolo disco
    $arrayTempo = [];
    foreach ($database as $discs) {
      //controllo se l'autore che sto cercando metcha con quello presente nel mio db
      if(strtolower($discs["author"]) == $author){

        $arrayTempo[] = $discs;

      }
    }
    echo json_encode($arrayTempo);
  } else {
    echo json_encode($database);
  }

 ?>
