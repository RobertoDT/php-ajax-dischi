<?php include "db.php" ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/style.css">
    <title>Dischi</title>
  </head>
  <body>

    <header>
      <div class="wrapper">
        <img class="logo-spoti" src="img/logo_spotify.png" alt="logo_spotify">
      </div>
    </header>

    <main>
      <div class="wrapper">
        <div class="cards">

          <?php foreach ($database as $discs) { ?>
            <div class="card">
              <img class="disc-img" src="<?php echo $discs["poster"]; ?>" alt="img-dischi">
              <h2 class="disc-title"><?php echo $discs["title"]; ?></h2>
              <h4 class="disc-author"><?php echo $discs["author"]; ?></h4>
              <p class="year"><?php echo $discs["year"]; ?></p>
            </div>
          <?php } ?>

        </div>
      </div>
    </main>

  <script src="dist/main.js" charset="utf-8"></script>
  </body>
</html>
