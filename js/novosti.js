/**************мобильное меню***************************** */
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
// Фильтрация новостей
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const filterSelect = document.querySelector(".filter-select");
  const newsCards = document.querySelectorAll(".news-card");

  // Функция фильтрации
  function filterNews(category) {
    newsCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Обработчики для кнопок
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      filterNews(this.dataset.category);
    });
  });

  // Обработчик для выпадающего списка
  filterSelect.addEventListener("change", function () {
    const category = this.value;
    filterNews(category);

    // Обновляем активную кнопку (для синхронизации состояний)
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.category === category);
    });
  });

  // Анимация при наведении на карточку
  newsCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });
});
