function mobileNav() {
  const navBtnOpen = document.querySelector("#mobile-nav-btn");
  const navBtnClose = document.querySelector("#mobile-nav-btn-close");
  const backroundBodyBurger = document.querySelector(".mobile-nav-back");

  const nav = document.querySelector(".mobile-nav");

  navBtnOpen.onclick = function () {
    nav.classList.add("mobile-nav--open");
    backroundBodyBurger.classList.add("mobile-nav-back--open");
    document.body.classList.toggle("no-scroll");
  };

  navBtnClose.onclick = closeMobileNav;

  backroundBodyBurger.onclick = closeMobileNav;

  function closeMobileNav() {
    nav.classList.remove("mobile-nav--open");
    backroundBodyBurger.classList.remove("mobile-nav-back--open");
    document.body.classList.remove("no-scroll");
  }
}

export default mobileNav;
