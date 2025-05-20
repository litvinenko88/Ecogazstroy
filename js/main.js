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
      title: "Бурмистрова 94 Храм Александра Невского",
      images: [
        {
          src: "./assets/img/imgObject/1.png",
          alt: "Храм Александра Невского",
        },
        {
          src: "./assets/img/imgObject/2.png",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/3.png",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/4.jpg",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/5.png",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/6.png",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/7.png",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/8.jpg",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/9.jpg",
          alt: "Внутреннее убранство храма",
        },
        {
          src: "./assets/img/imgObject/10.jpg",
          alt: "Внутреннее убранство храма",
        },
      ],
      videoLink: "#",
    },
    {
      title: "Тухачевского 8 ТЦ Москва",
      images: [
        {
          src: "./assets/img/imgObject/11.jpg",
          alt: "Торговый центр Москва - главный вход",
        },
        {
          src: "./assets/img/imgObject/12.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/13.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/14.png",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/15.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/16.png",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/17.png",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/18.png",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/19.jpg",
          alt: "Интерьер торгового центра",
        },
      ],
      videoLink: "#",
    },
    {
      title: "Мичурина 62а",
      images: [
        {
          src: "./assets/img/imgObject/20.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/21.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/22.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/23.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/24.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/25.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/26.jpg",
          alt: "Интерьер торгового центра",
        },
      ],
      videoLink: "#",
    },
    {
      title: "пр-кт. Кулакова 24/1",
      images: [
        {
          src: "./assets/img/imgObject/27.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/28.jpg",
          alt: "Интерьер торгового центра",
        },
        {
          src: "./assets/img/imgObject/29.jpg",
          alt: "Интерьер торгового центра",
        },
      ],
      videoLink: "#",
    },
  ];

  const projectsContainer = document.getElementById("projectsContainer");
  const toggleButton = document.getElementById("toggleButton");

  // Создаем слайдеры на основе данных
  slidersData.forEach((sliderData, index) => {
    const sliderId = `slider${index + 1}`;
    const dotsId = `dots${index + 1}`;

    const sliderHTML = `
      <div class="project-slider">
        <div class="slider-container">
          <div class="slider" id="${sliderId}"></div>
          <div class="slider-nav">
            <div class="slider-arrow prev">
              <div class="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
              fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 
              5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/></svg>
              </div>
            </div>
            <div class="slider-arrow next">
              <div class="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" 
              height="16" fill="currentColor" class="bi bi-chevron-compact-right" 
              viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 
              1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 
              2.224a.5.5 0 0 1 .223-.671"/></svg></div>
            </div>
          </div>
          <div class="slider-dots" id="${dotsId}"></div>
        </div>
        <div class="project-info">
          <h3>${sliderData.title}</h3>
          <a href="${sliderData.videoLink}" class="watch-video">
            <div class="video-icon"><svg xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" fill="currentColor" class="bi bi-caret-right-square-fill" 
            viewBox="0 0 16 16"> <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 
            2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 
            0 0 0 5.5 4z"/></svg></div>
            Смотреть видео
          </a>
        </div>
      </div>
    `;

    projectsContainer.insertAdjacentHTML("beforeend", sliderHTML);

    const moveSlideFunc = initSlider(sliderId, dotsId, sliderData.images);

    const sliderContainer = document.querySelector(
      `#${sliderId}`
    ).parentElement;
    const prevArrow = sliderContainer.querySelector(".prev");
    const nextArrow = sliderContainer.querySelector(".next");

    prevArrow.addEventListener("click", () => moveSlideFunc(-1));
    nextArrow.addEventListener("click", () => moveSlideFunc(1));
  });

  // Инициализация состояния (по умолчанию свернуто, показываем только первые 2 слайда)
  function initSectionState() {
    const savedState = localStorage.getItem("projectsSectionCollapsed");
    if (savedState === null || savedState === "true") {
      projectsContainer.classList.add("collapsed");
      toggleButton.textContent = "Развернуть";
    } else {
      projectsContainer.classList.remove("collapsed");
      toggleButton.textContent = "Свернуть";
    }
  }

  // Кнопка сворачивания/разворачивания
  toggleButton.addEventListener("click", function () {
    projectsContainer.classList.toggle("collapsed");
    const isCollapsed = projectsContainer.classList.contains("collapsed");
    toggleButton.textContent = isCollapsed ? "Развернуть" : "Свернуть";

    // Сохраняем состояние в localStorage
    localStorage.setItem("projectsSectionCollapsed", isCollapsed);
  });

  // Инициализируем состояние при загрузке
  initSectionState();
});

function initSlider(sliderId, dotsId, images) {
  const slider = document.getElementById(sliderId);
  const dotsContainer = document.getElementById(dotsId);
  let currentSlide = 0;
  let timer;

  slider.innerHTML = "";
  dotsContainer.innerHTML = "";

  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";

    const img = new Image();
    img.src = image.src;
    img.alt = image.alt;
    img.onload = function () {
      slide.innerHTML = `
        <img src="${image.src}" alt="${image.alt}">
      `;
    };
    img.onerror = function () {
      slide.innerHTML = `
        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;">
          <p>Изображение не загружено</p>
        </div>
        <div class="slide-caption">${image.desc}</div>
      `;
    };

    slider.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = "slider-dot";
    dot.dataset.index = index;
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  });

  if (dotsContainer.children.length > 0) {
    dotsContainer.children[0].classList.add("active");
  }

  function goToSlide(index) {
    if (images.length === 0) return;

    currentSlide = (index + images.length) % images.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function moveSlide(direction) {
    goToSlide(currentSlide + direction);
    resetTimer();
  }

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

  slider.addEventListener("mouseenter", () => {
    clearInterval(timer);
  });

  slider.addEventListener("mouseleave", () => {
    startTimer();
  });

  goToSlide(0);

  return moveSlide;
}
