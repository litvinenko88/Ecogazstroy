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

document.addEventListener("DOMContentLoaded", function () {
  // Данные для слайдеров (пути к изображениям и описания)
  const slidersData = [
    {
      // Слайдер 1
      title: "Бурмистрова 94 Храм Александра Невского",
      images: [
        {
          src: "./assets/img/imgObject/1.png",
          alt: "Храм Александра Невского",
          desc: "Фасад храма Александра Невского на Бузиметровой 94",
        },
        {
          src: "./assets/img/imgObject/2.png",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/3.png",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/4.jpg",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/5.png",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/6.png",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/7.png",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/8.jpg",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/9.jpg",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
        {
          src: "./assets/img/imgObject/10.jpg",
          alt: "Внутреннее убранство храма",
          desc: "Роспись стен и купола внутри храма",
        },
      ],
      videoLink: "#",
    },
    {
      // Слайдер 2
      title: "Тухачевского 8 ТЦ Москва",
      images: [
        {
          src: "./assets/img/imgObject/11.jpg",
          alt: "Торговый центр Москва - главный вход",
          desc: "Современный дизайн главного входа ТЦ Москва",
        },
        {
          src: "./assets/img/imgObject/12.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/13.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/14.png",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/15.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/16.png",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/17.png",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/18.png",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/19.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
      ],
      videoLink: "#",
    },
    {
      // Слайдер 3
      title: "Мичурина 62а",
      images: [
        {
          src: "./assets/img/imgObject/20.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/21.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/22.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/23.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/24.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/25.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
        {
          src: "./assets/img/imgObject/26.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
      ],
      videoLink: "#",
    },
    {
      // Слайдер 4
      title: "пр-кт. Кулакова 24/1",
      images: [
        {
          src: "./assets/img/imgObject/27.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
         {
          src: "./assets/img/imgObject/28.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
         {
          src: "./assets/img/imgObject/29.jpg",
          alt: "Интерьер торгового центра",
          desc: "Просторные торговые залы с естественным освещением",
        },
      ],
      videoLink: "#",
    },
  ];

  const projectsContainer = document.getElementById("projectsContainer");

  // Создаем слайдеры на основе данных
  slidersData.forEach((sliderData, index) => {
    const sliderId = `slider${index + 1}`;
    const dotsId = `dots${index + 1}`;

    // Создаем HTML для слайдера
    const sliderHTML = `
                    <div class="project-slider">
                        <div class="slider-container">
                            <div class="slider" id="${sliderId}"></div>
                            <div class="slider-nav">
                                <div class="slider-arrow prev">
                                    <div class="arrow-icon"></div>
                                </div>
                                <div class="slider-arrow next">
                                    <div class="arrow-icon"></div>
                                </div>
                            </div>
                            <div class="slider-dots" id="${dotsId}"></div>
                        </div>
                        <div class="project-info">
                            <h2>${sliderData.title}</h2>
                            <a href="${sliderData.videoLink}" class="watch-video">
                                <div class="video-icon"></div>
                                Смотреть видео
                            </a>
                        </div>
                    </div>
                `;

    projectsContainer.insertAdjacentHTML("beforeend", sliderHTML);

    // Инициализируем слайдер
    const moveSlideFunc = initSlider(sliderId, dotsId, sliderData.images);

    // Назначаем обработчики для стрелок
    const sliderContainer = document.querySelector(
      `#${sliderId}`
    ).parentElement;
    const prevArrow = sliderContainer.querySelector(".prev");
    const nextArrow = sliderContainer.querySelector(".next");

    prevArrow.addEventListener("click", () => moveSlideFunc(-1));
    nextArrow.addEventListener("click", () => moveSlideFunc(1));
  });

  // Кнопка сворачивания/разворачивания
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    projectsContainer.classList.toggle("collapsed");
    toggleButton.textContent = projectsContainer.classList.contains("collapsed")
      ? "Развернуть"
      : "Свернуть";
  });
});

// Инициализация слайдера
function initSlider(sliderId, dotsId, images) {
  const slider = document.getElementById(sliderId);
  const dotsContainer = document.getElementById(dotsId);
  let currentSlide = 0;
  let timer;

  // Очищаем слайдер (на случай повторной инициализации)
  slider.innerHTML = "";
  dotsContainer.innerHTML = "";

  // Создаем слайды
  images.forEach((image, index) => {
    // Создаем слайд с изображением
    const slide = document.createElement("div");
    slide.className = "slide";

    // Создаем элемент изображения
    const img = new Image();
    img.src = image.src;
    img.alt = image.alt;
    img.onload = function () {
      // Убедимся, что изображение загружено
      slide.innerHTML = `
                        <img src="${image.src}" alt="${image.alt}">
                        <div class="slide-caption">${image.desc}</div>
                    `;
    };
    img.onerror = function () {
      // Если изображение не загрузилось, покажем placeholder
      slide.innerHTML = `
                        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;">
                            <p>Изображение не загружено</p>
                        </div>
                        <div class="slide-caption">${image.desc}</div>
                    `;
    };

    slider.appendChild(slide);

    // Создаем точки навигации
    const dot = document.createElement("div");
    dot.className = "slider-dot";
    dot.dataset.index = index;
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  });

  // Активируем первую точку
  if (dotsContainer.children.length > 0) {
    dotsContainer.children[0].classList.add("active");
  }

  // Функция переключения слайда
  function goToSlide(index) {
    if (images.length === 0) return;

    currentSlide = (index + images.length) % images.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Обновляем активную точку
    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  // Функция для переключения слайдов
  function moveSlide(direction) {
    goToSlide(currentSlide + direction);
    resetTimer();
  }

  // Автоматическое переключение
  function startTimer() {
    if (images.length <= 1) return;

    timer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  startTimer();

  // Остановка при наведении
  slider.addEventListener("mouseenter", () => {
    clearInterval(timer);
  });

  slider.addEventListener("mouseleave", () => {
    startTimer();
  });

  // Показываем первый слайд
  goToSlide(0);

  // Возвращаем функцию для ручного управления
  return moveSlide;
}
