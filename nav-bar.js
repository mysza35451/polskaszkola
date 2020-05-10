function drawNavBar(){

    document.write('\
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom static-top text-center">\
  <div class="container">\
  <a href="#" class="navbar-brand">\
  <img  src="logonobg.jpg" height="120" alt="CoolBrand">\
  </a>\
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">\
  <span class="navbar-toggler-icon"></span>\
  </button>\
  <div class="collapse navbar-collapse" id="navbarResponsive">\
  <ul class="navbar-nav ml-auto">\
  <li class="nav-item active">\
          <a class="nav-link" href="#"><b>Strona Główna</b>\
                <span class="sr-only">(current)</span>\
              </a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="#">Aktualności</a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="#">Administracja</a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="#">Kontakt</a>\
        </li>\
      </ul>\
    </div>\
  </div>\
</nav>\
    ');

}