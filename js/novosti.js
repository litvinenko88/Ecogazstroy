document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navList = document.querySelector(".nav-list");
  const body = document.body;

  // Создаем элемент для крестика
  const closeIcon = document.createElement("i");
  closeIcon.className = "fas fa-times";
  menuToggle.appendChild(closeIcon);

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
    this.classList.toggle("active");
    body.classList.toggle("no-scroll");

    // Переключаем иконку между бургером и крестиком
    const icon = this.querySelector("i");
    if (navList.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Закрытие меню при клике на пункт
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function () {
      navList.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("no-scroll");

      // Возвращаем иконку бургера
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
});
