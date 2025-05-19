document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navList = document.querySelector(".list-nav");
  const body = document.body;

  // Создаем элемент для крестика
  const closeIcon = document.createElement("i");
  closeIcon.className = "fas fa-times";
  menuToggle.appendChild(closeIcon);

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
    this.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  // Закрытие меню при клике на пункт
  document.querySelectorAll(".list-nav__item").forEach((item) => {
    item.addEventListener("click", function () {
      navList.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
});
