document.addEventListener("DOMContentLoaded", function () {
  // Мобильное меню
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navList.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Закрытие меню при клике на пункт
  document.querySelectorAll(".nav-item a").forEach((item) => {
    item.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      navList.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // Фильтрация новостей
  const filterButtons = document.querySelectorAll(".filter-btn");
  const filterSelect = document.querySelector(".filter-select");
  const newsCards = document.querySelectorAll(".news-card");

  function filterNews(category) {
    newsCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Обновление активной кнопки
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.category === category);
    });

    // Обновление выпадающего списка
    if (filterSelect) {
      filterSelect.value = category;
    }
  }

  // Обработчики для кнопок фильтра
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterNews(this.dataset.category);
    });
  });

  // Обработчик для выпадающего списка
  if (filterSelect) {
    filterSelect.addEventListener("change", function () {
      filterNews(this.value);
    });
  }

  // Инициализация анимаций
  const animateElements = document.querySelectorAll('[class*="animate-"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.getAttribute("data-delay") || 0;

          setTimeout(() => {
            element.style.animationDelay = delay + "s";
            element.classList.add("animated");
          }, delay * 1000);

          observer.unobserve(element);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animateElements.forEach((el) => observer.observe(el));

  // Ленивая загрузка изображений
  if ("loading" in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  } else {
    const lazyLoadObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          lazyLoadObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      lazyLoadObserver.observe(img);
    });
  }
});
