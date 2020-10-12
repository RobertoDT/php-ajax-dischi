<!-- usare ajax -->
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
        <select class="select-artist" name="">
          <option value="All">All</option>
          
        </select>
      </div>
    </header>

    <main>
      <div class="wrapper">
        <div class="cards">

        </div>
      </div>
    </main>

    <!-- template dischi-->
    <script id="disc-template" type="text/x-handlebars-template">
      <div class="card">
        <img class="disc-img" src="{{poster}}" alt="logo_album">
        <h2 class="disc-title">{{title}}</h2>
        <h4 class="disc-author">{{author}}</h4>
        <p class="year">{{year}}</p>
      </div>
    </script>
    <!-- /template dischi-->

    <!-- template select -->
    <script id="select-template" type="text/x-handlebars-template">
      <option value="{{author}}">{{author}}</option>
    </script>
    <!-- /template select -->

  <script src="dist/main.js" charset="utf-8"></script>
  </body>
</html>
