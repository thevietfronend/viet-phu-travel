// fix menu top
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header__navs");
  var mobilemenu = this.document.querySelector(".header__navs__mobile");
  header.classList.toggle("active__menu", window.scrollY > 0);
  mobilemenu.classList.toggle("active__menu", window.scrollY > 0);
});

// open menu mobile
// seclect element html - chọn element cần xử lý js từ bên html
var headerMobile = document.querySelector(".navs__mobile__bar");
var menubarMobile = document.querySelector(".navs__mobile__menus");
var closeMenu = document.querySelector(".navs__mobile__menus__close i");
// xử lý sự kiện khi được click vài icon menubar
headerMobile.addEventListener("click", function () {
  menubarMobile.classList.add("open__menus__mobile");
});
// xử lý sự kiện khi được click vài icon close

closeMenu.addEventListener("click", function () {
  menubarMobile.classList.remove("open__menus__mobile");
});
