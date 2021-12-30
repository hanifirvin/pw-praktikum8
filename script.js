function tampilkanAllMenu() {
  $.getJSON("menu.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftarMenu").append(
        '<div class="col-md-4 d-flex justify-content-evenly"><div class="card mt-2 mb-4" style="width: 20rem"><img src="img/' +
          data.gambar +
          '" class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text" style="height: 110px;">' +
          data.deskripsi +
          '<div class="d-flex flex-row-reverse"></h5><p class="card-text">' +
          data.estimasi +
          '</div></p><h5 class="card-title">' +
          data.harga +
          '</p><a href="#" class="btn btn-primary">Beli Sekarang!</a></div></div></div>'
      );
    });
  });
}

tampilkanAllMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let jenis = $(this).html();

  $.getJSON("menu.json", function (data) {
    let menu = data.menu;
    let content = "";

    if (jenis == "All Menu") {
      tampilkanAllMenu();
    }

    $.each(menu, function (i, data) {
      if (data.jenis == jenis) {
        content +=
          '<div class="col-md-4 d-flex justify-content-evenly"><div class="card mt-2 mb-4" style="width: 20rem"><img src="img/' +
          data.gambar +
          '" class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text" style="height: 110px;">' +
          data.deskripsi +
          '<div class="d-flex flex-row-reverse"></h5><p class="card-text">' +
          data.estimasi +
          '</div></p><h5 class="card-title">' +
          data.harga +
          '</p><a href="#" class="btn btn-primary">Beli Sekarang!</a></div></div></div>';
      }
    });

    $("#daftarMenu").html(content);
  });
});
