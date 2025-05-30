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
/*******************слайдер проектов******************************** */
document.addEventListener("DOMContentLoaded", function () {
  // Данные для слайдеров (пути к изображениям и описания)
  const slidersData = [
    {
      title: "Храм Александра Невского",
      images: [
        {
          src: "./assets/img/imgObject/1_1_11zon.webp",
          alt: "Котельная в храме Александра Невского",
        },
        {
          src: "./assets/img/imgObject/2_2_11zon.webp",
          alt: "Вентиляция в котельной",
        },
        {
          src: "./assets/img/imgObject/3_3_11zon.webp",
          alt: "Информационный стенд котельной",
        },
        {
          src: "./assets/img/imgObject/4_4_11zon.webp",
          alt: "Котлы навиен в котельной",
        },
        {
          src: "./assets/img/imgObject/5_5_11zon.webp",
          alt: "Газовый шкаф открытый",
        },
        {
          src: "./assets/img/imgObject/6_6_11zon.webp",
          alt: "Новый газовый шкаф",
        },
        {
          src: "./assets/img/imgObject/7_7_11zon.webp",
          alt: "Газовый счетчик",
        },
        {
          src: "./assets/img/imgObject/8_8_11zon.webp",
          alt: "Устройство котельной внутри",
        },
        {
          src: "./assets/img/imgObject/9_9_11zon.webp",
          alt: "Газовый стояк с приборами контроля",
        },
        {
          src: "./assets/img/imgObject/10_10_11zon.webp",
          alt: "Фасад котельной",
        },
      ],
      videoLink: "/assets/video/Бурмистрова.mp4",
    },
    {
      title: "Тухачевского 8 ТЦ Москва",
      images: [
        {
          src: "./assets/img/imgObject/11_11_11zon.webp",
          alt: "Газовый шкаф в ТЦ Москва",
        },
        {
          src: "./assets/img/imgObject/12_12_11zon.webp",
          alt: "Подключение газового шкафа",
        },
        {
          src: "./assets/img/imgObject/13_13_11zon.webp",
          alt: "Подключения газа к котельной",
        },
        {
          src: "./assets/img/imgObject/14_14_11zon.webp",
          alt: "Пайка газовых труб",
        },
        {
          src: "./assets/img/imgObject/15_15_11zon.webp",
          alt: "Газовая труба",
        },
        {
          src: "./assets/img/imgObject/16_16_11zon.webp",
          alt: "Траншея с газовой трубой",
        },
        {
          src: "./assets/img/imgObject/17_17_11zon.webp",
          alt: "Траншея выкопаная под газификацию",
        },
        {
          src: "./assets/img/imgObject/18_18_11zon.webp",
          alt: "ПВХ труба газовая",
        },
        {
          src: "./assets/img/imgObject/19_19_11zon.webp",
          alt: "Пояльный аппрат протва",
        },
      ],
      videoLink: "/assets/video/Москва.mp4",
    },
    {
      title: "Мичурина 62а",
      images: [
        {
          src: "./assets/img/imgObject/20_20_11zon.webp",
          alt: "Газовый счетчик",
        },
        {
          src: "./assets/img/imgObject/21_21_11zon.webp",
          alt: "Маленький газовый шкаф",
        },
        {
          src: "./assets/img/imgObject/22_22_11zon.webp",
          alt: "Газовая труба",
        },
        {
          src: "./assets/img/imgObject/23_23_11zon.webp",
          alt: "Естествинная винтиляция в доме под газ",
        },
        {
          src: "./assets/img/imgObject/24_24_11zon.webp",
          alt: "Фасад дома с газовыми трубами",
        },
        {
          src: "./assets/img/imgObject/25_25_11zon.webp",
          alt: "Труба винтиляции",
        },
        {
          src: "./assets/img/imgObject/26_26_11zon.webp",
          alt: "Настенный кател Навиен",
        },
      ],
      videoLink: "/assets/video/Мичурина.mp4",
    },
    {
      title: "пр-кт. Кулакова 24/1",
      images: [
        {
          src: "./assets/img/imgObject/27_27_11zon.webp",
          alt: "Разводка газовых труб",
        },
        {
          src: "./assets/img/imgObject/28_28_11zon.webp",
          alt: "Разводка труб в газовой кательной",
        },
        {
          src: "./assets/img/imgObject/29_29_11zon.webp",
          alt: "Котельная газовая",
        },
      ],
      videoLink: "#",
    },
  ];

  const projectsContainer = document.getElementById("projectsContainer");
  const toggleButton = document.getElementById("toggleButton");

  // Элементы видеоплеера
  const dsVideoModal = document.getElementById("dsVideoModal");
  const dsVideoPlayer = document.getElementById("dsVideoPlayer");
  const dsCloseModal = document.getElementById("dsCloseModal");
  const dsPlayPauseBtn = document.getElementById("dsPlayPauseBtn");
  const dsProgressBar = document.getElementById("dsProgressBar");
  const dsProgressFilled = document.getElementById("dsProgressFilled");
  const dsCurrentTime = document.getElementById("dsCurrentTime");
  const dsTotalTime = document.getElementById("dsTotalTime");
  const dsFullscreenBtn = document.getElementById("dsFullscreenBtn");

  // Функция для инициализации слайдера
  // Замените функцию initSlider в вашем коде на эту улучшенную версию:
  function initSlider(sliderId, dotsId, images) {
    const slider = document.getElementById(sliderId);
    const dotsContainer = document.getElementById(dotsId);
    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let autoSlideInterval;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    // Создаем слайды
    images.forEach((image, index) => {
      // Создаем слайд
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.style.width = "100%";
      slide.style.height = "100%";
      slide.style.flexShrink = "0";

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.draggable = false; // Предотвращаем перетаскивание изображений

      slide.appendChild(img);
      slider.appendChild(slide);

      // Создаем точку для навигации
      const dot = document.createElement("div");
      dot.className = "dot";
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(index);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });

    // Получаем все слайды
    const slides = slider.querySelectorAll(".slide");

    // Функция для перехода к конкретному слайду
    function goToSlide(index) {
      if (index < 0 || index >= images.length) return;

      currentSlide = index;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
      currentTranslate = -currentSlide * slider.offsetWidth;
      prevTranslate = currentTranslate;

      // Обновляем активную точку
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        if (i === currentSlide) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    // Функция для перемещения слайда
    function moveSlide(direction) {
      let newSlide = currentSlide + direction;

      if (newSlide < 0) {
        newSlide = images.length - 1;
      } else if (newSlide >= images.length) {
        newSlide = 0;
      }

      goToSlide(newSlide);
    }

    // Функция для автоматического переключения слайдов
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        moveSlide(1);
      }, 4000);
    }

    // Функция для сброса автоматического переключения
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    // Анимация перетаскивания
    function animation() {
      slider.style.transform = `translateX(${currentTranslate}px)`;
      if (isDragging) requestAnimationFrame(animation);
    }

    // Обработчики событий для сенсорных устройств
    slider.addEventListener("touchstart", touchStart, { passive: false });
    slider.addEventListener("touchmove", touchMove, { passive: false });
    slider.addEventListener("touchend", touchEnd);

    // Обработчики событий для мыши (для тестирования на десктопе)
    slider.addEventListener("mousedown", touchStart);
    slider.addEventListener("mousemove", touchMove);
    slider.addEventListener("mouseup", touchEnd);
    slider.addEventListener("mouseleave", touchEnd);

    function touchStart(e) {
      if (e.type === "touchstart") {
        touchStartX = e.touches[0].clientX;
      } else {
        touchStartX = e.clientX;
        e.preventDefault(); // Только для mouse events
      }
      startPos = touchStartX;
      isDragging = true;
      clearInterval(autoSlideInterval);
      animationID = requestAnimationFrame(animation);
      slider.style.cursor = "grabbing";
      slider.style.transition = "none";
    }

    function touchMove(e) {
      if (!isDragging) return;

      let currentPos;
      if (e.type === "touchmove") {
        currentPos = e.touches[0].clientX;
        e.preventDefault(); // Предотвращаем скролл страницы
      } else {
        currentPos = e.clientX;
        e.preventDefault();
      }

      currentTranslate = prevTranslate + currentPos - startPos;
    }

    function touchEnd() {
      if (!isDragging) return;
      isDragging = false;
      cancelAnimationFrame(animationID);
      slider.style.cursor = "grab";
      slider.style.transition = "transform 0.3s ease-out";

      const movedBy = currentTranslate - prevTranslate;

      if (movedBy < -100 && currentSlide < images.length - 1) {
        // Свайп влево
        currentSlide += 1;
      } else if (movedBy > 100 && currentSlide > 0) {
        // Свайп вправо
        currentSlide -= 1;
      }

      goToSlide(currentSlide);
      startAutoSlide();
    }

    // Запускаем автоматическое переключение
    startAutoSlide();

    // Возвращаем функцию для внешнего использования
    return moveSlide;
  }

  // Функция для форматирования времени в мм:сс
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  // Инициализация видеоплеера
  function initVideoPlayer() {
    // Открытие модального окна с видео
    document.querySelectorAll(".watch-video").forEach((link) => {
      link.addEventListener("click", function (e) {
        if (this.getAttribute("href") === "#") {
          e.preventDefault();
          return;
        }

        e.preventDefault();
        const videoSrc = this.getAttribute("href");

        dsVideoPlayer.src = videoSrc;
        dsVideoModal.classList.add("show");
        dsVideoPlayer.play();
        dsPlayPauseBtn.textContent = "❚❚";
      });
    });

    // Закрытие модального окна
    dsCloseModal.addEventListener("click", function () {
      dsVideoModal.classList.remove("show");
      dsVideoPlayer.pause();
    });

    // Закрытие при клике вне плеера
    dsVideoModal.addEventListener("click", function (e) {
      if (e.target === this) {
        dsVideoModal.classList.remove("show");
        dsVideoPlayer.pause();
      }
    });

    // Управление воспроизведением
    dsPlayPauseBtn.addEventListener("click", function () {
      if (dsVideoPlayer.paused) {
        dsVideoPlayer.play();
        this.textContent = "❚❚";
      } else {
        dsVideoPlayer.pause();
        this.textContent = "▶";
      }
    });

    // Обновление прогресс-бара
    dsVideoPlayer.addEventListener("timeupdate", function () {
      const percent =
        (dsVideoPlayer.currentTime / dsVideoPlayer.duration) * 100;
      dsProgressFilled.style.width = `${percent}%`;
      dsCurrentTime.textContent = formatTime(dsVideoPlayer.currentTime);
    });

    // Установка времени при клике на прогресс-бар
    dsProgressBar.addEventListener("click", function (e) {
      const clickPosition = e.offsetX;
      const progressBarWidth = this.offsetWidth;
      const percentClicked = clickPosition / progressBarWidth;
      dsVideoPlayer.currentTime = percentClicked * dsVideoPlayer.duration;
    });

    // Обновление общего времени при загрузке метаданных
    dsVideoPlayer.addEventListener("loadedmetadata", function () {
      dsTotalTime.textContent = formatTime(dsVideoPlayer.duration);
    });

    // Кнопка полноэкранного режима
    dsFullscreenBtn.addEventListener("click", function () {
      if (!document.fullscreenElement) {
        dsVideoModal.requestFullscreen().catch((err) => {
          console.error(
            `Ошибка при переходе в полноэкранный режим: ${err.message}`
          );
        });
      } else {
        document.exitFullscreen();
      }
    });

    // Обновление кнопки play/pause при окончании видео
    dsVideoPlayer.addEventListener("ended", function () {
      dsPlayPauseBtn.textContent = "▶";
    });
  }

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
                            <a href="${
                              sliderData.videoLink
                            }" class="watch-video">
                                <div class="video-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
                                    </svg>
                                </div>
                                ${
                                  sliderData.videoLink &&
                                  sliderData.videoLink !== "#"
                                    ? "Смотреть видео"
                                    : "Просмотр недоступен"
                                }
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

    prevArrow.addEventListener("click", () => {
      moveSlideFunc(-1);
      resetAutoSlide();
    });
    nextArrow.addEventListener("click", () => {
      moveSlideFunc(1);
      resetAutoSlide();
    });
  });

  // Инициализация видеоплеера
  initVideoPlayer();

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
/**********************квиз****************************** */
document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quizForm");
  const currentQuestionEl = document.getElementById("currentQuestion");
  const progressFill = document.querySelector(".progress-fill");
  const errorModal = document.getElementById("errorModal");
  const thankModal = document.getElementById("thankModal");

  const questions = [
    {
      question: "Какой объект планируете газифицировать?",
      answers: [
        "Жилой дом",
        "Садовый дом",
        "Коммерческий или промышленный объект",
        "Другое",
      ],
    },
    {
      question:
        "На каком расстоянии от границы земельного участка расположен газопровод, к которому возможно осуществить подключение?",
      answers: [
        "Газопровод проходит по участку",
        "В пределах 5 метров",
        "От 10 до 20 метров от участка",
        "От 30 до 50 метров от участка",
        "Подземный газопровод",
        "Нет информации",
      ],
    },
    {
      question: "Давление газа в точке подключения?",
      answers: [
        "Низкое давление Г1",
        "Среднее давление Г2",
        "Высокое давление Г3",
        "Нет информации",
      ],
    },
    {
      question:
        "Вы уже определились с газовым оборудованием, которое хотите установить?",
      answers: ["Да", "Выбираем, нужна помощь", "Нет"],
    },
    {
      question: "В каком населенном пункте расположен Ваш объект?",
      answers: [
        "Ставрополь",
        "Невинномысск",
        "Михайловск",
        "Изобильный",
        "Ближайшие 100 километров",
      ],
    },
  ];

  let currentQuestion = 0;
  const answers = {};

  // Инициализация квиза
  function initQuiz() {
    renderQuestion();

    // Обработчики модальных окон
    document.querySelectorAll(".close-modal").forEach((btn) => {
      btn.addEventListener("click", function () {
        errorModal.style.display = "none";
        thankModal.style.display = "none";
      });
    });

    window.addEventListener("click", function (e) {
      if (e.target === errorModal || e.target === thankModal) {
        errorModal.style.display = "none";
        thankModal.style.display = "none";
      }
    });
  }

  // Рендер текущего вопроса
  function renderQuestion() {
    currentQuestionEl.textContent = currentQuestion + 1;
    progressFill.style.width = `${(currentQuestion + 1) * 20}%`;

    const question = questions[currentQuestion];

    let html = `
            <div class="question-container">
                <h3 class="question-title">${question.question}</h3>
                <select class="answer-select" name="question${currentQuestion}" required>
                    <option value="" selected disabled>Выберите ответ</option>
        `;

    question.answers.forEach((answer) => {
      html += `<option value="${answer}">${answer}</option>`;
    });

    html += `</select>`;

    // Навигационные кнопки
    html += `<div class="quiz-navigation">`;

    if (currentQuestion > 0) {
      html += `<button type="button" class="quiz-btn btn-back">Назад</button>`;
    } else {
      html += `<div></div>`;
    }

    if (currentQuestion < questions.length - 1) {
      html += `<button type="button" class="quiz-btn btn-next" disabled>Далее</button>`;
    } else {
      html += `<button type="button" class="quiz-btn btn-submit" disabled>Получить результат</button>`;
    }

    html += `</div></div>`;

    quizForm.innerHTML = html;

    // Обработчики событий
    const select = quizForm.querySelector(".answer-select");
    select.addEventListener("change", function () {
      answers[`question${currentQuestion}`] = this.value;

      const nextBtn = quizForm.querySelector(".btn-next");
      const submitBtn = quizForm.querySelector(".btn-submit");

      if (nextBtn) nextBtn.disabled = false;
      if (submitBtn) submitBtn.disabled = false;
    });

    if (currentQuestion > 0) {
      quizForm
        .querySelector(".btn-back")
        .addEventListener("click", prevQuestion);
    }

    if (currentQuestion < questions.length - 1) {
      quizForm
        .querySelector(".btn-next")
        .addEventListener("click", nextQuestion);
    } else {
      quizForm
        .querySelector(".btn-submit")
        .addEventListener("click", showResultForm);
    }
  }

  // Следующий вопрос
  function nextQuestion() {
    const select = quizForm.querySelector(".answer-select");

    if (!select.value) {
      errorModal.style.display = "flex";
      return;
    }

    currentQuestion++;
    renderQuestion();
  }

  // Предыдущий вопрос
  function prevQuestion() {
    currentQuestion--;
    renderQuestion();
  }

  // Показать форму результата
  function showResultForm() {
    const select = quizForm.querySelector(".answer-select");

    if (!select.value) {
      errorModal.style.display = "flex";
      return;
    }

    quizForm.innerHTML = `
            <form class="question-container">
                <h3 class="question-title">Оставьте контактные данные для получения расчета</h3>
                
                <div class="quiz-form-group">
                    <label for="name">Ваше имя</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="quiz-form-group">
                    <label for="phone">Ваш телефон</label>
                    <input type="tel" id="phone" name="phone" required pattern="[+]{0,1}[0-9]{10,15}" title="Введите корректный номер телефона">
                    <small class="error-message" style="display:none;color:red;">Пожалуйста, введите корректный номер телефона</small>
                </div>
                
                <div class="quiz-checkbox-group">
                    <div class="quiz-checkbox-item">
                        <input type="checkbox" id="consent" name="consent" required>
                        <label for="consent">Я согласен на обработку персональных данных</label>
                    </div>
                </div>
                
                <button type="submit" class="quiz-btn btn-submit">Получить расчет</button>
            </form>
        `;

    // Валидация телефона
    const phoneInput = quizForm.querySelector("#phone");
    const errorMessage = quizForm.querySelector(".error-message");

    phoneInput.addEventListener("input", function () {
      const isValid = this.checkValidity();
      if (!isValid) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }
    });

    // Обработчик отправки формы
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!phoneInput.checkValidity()) {
        errorMessage.style.display = "block";
        return;
      }

      // Формируем сообщение для Telegram
      let message = `📌 Новая заявка 🔥🔥🔥\n\n`;
      message += `👤 Имя: ${this.name.value}\n`;
      message += `📞 Телефон: ${this.phone.value}\n\n`;
      message += `📋 Ответы на вопросы:\n`;

      // Добавляем все вопросы и ответы
      questions.forEach((q, i) => {
        const answerKey = `question${i}`;
        message += `\n${i + 1}. ${q.question}\n➡ ${
          answers[answerKey] || "Нет ответа"
        }\n`;
      });

      message += `\n🌐 Квиз опросник`;

      // Данные Telegram бота
      const botToken = "8178591992:AAEv1_IhHBIWNBET9_xI0cJL4iZI-MF4gA4";
      const chatIds = [682859146, 258608199]; // Массив с chat_id
      const promises = chatIds.map((chatId) => {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          message
        )}`;
        return fetch(url);
      });

      // Отправляем в Telegram одновременно по всем ID
      Promise.all(promises)
        .then((responses) => {
          // Проверяем все ответы
          responses.forEach((response) => {
            if (!response.ok) {
              throw new Error("Ошибка при отправке в Telegram");
            }
          });

          thankModal.style.display = "flex";

          // Очистка формы
          this.reset();
          currentQuestion = 0;
          Object.keys(answers).forEach((key) => delete answers[key]);

          // Через 5 секунд перезагружаем квиз
          setTimeout(() => {
            thankModal.style.display = "none";
            renderQuestion();
          }, 5000);
        })
        .catch((error) => {
          console.error("Ошибка:", error);
          alert(
            "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
          );
        });
    });
  }

  // Запуск квиза
  initQuiz();
});
/*******************слайдер документов**************************** */
document.addEventListener("DOMContentLoaded", function () {
  // Элементы слайдера
  const marqueeContent = document.querySelector(".documents-marquee-content");
  const modal = document.getElementById("documentsModal");
  const modalImg = document.getElementById("documentsExpandedImage");
  const closeModal = document.querySelector(".documents-modal-close");

  // Клонируем элементы для бесконечной прокрутки
  const items = marqueeContent.querySelectorAll("li");
  const itemsCount = items.length;
  const displayedItems = 5;

  for (let i = 0; i < displayedItems; i++) {
    marqueeContent.appendChild(items[i].cloneNode(true));
  }

  // Обработчики событий для модального окна
  document.querySelectorAll(".documents-marquee-content img").forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  // Закрытие модального окна
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Закрытие по ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Пауза при наведении
  marqueeContent.addEventListener("mouseenter", function () {
    this.style.animationPlayState = "paused";
  });

  marqueeContent.addEventListener("mouseleave", function () {
    this.style.animationPlayState = "running";
  });
});
/**********************как найти нас ***************************** */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactHelpForm");
  const phoneInput = document.getElementById("contactHelpPhone");
  const errorMsg = document.querySelector(".contact-help-error-msg");
  const modal = document.getElementById("contactHelpModal");
  const closeModal = document.querySelector(".contact-help-close-modal");

  // Валидация телефона
  phoneInput.addEventListener("input", function () {
    const phoneRegex =
      /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (this.value.match(phoneRegex)) {
      this.classList.remove("contact-help-input-error");
      errorMsg.style.display = "none";
    } else {
      this.classList.add("contact-help-input-error");
      errorMsg.textContent = "Введите корректный номер телефона";
      errorMsg.style.display = "block";
    }
  });

  // Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Проверка валидности
    if (
      !phoneInput.value.match(
        /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
      )
    ) {
      phoneInput.classList.add("contact-help-input-error");
      errorMsg.textContent = "Пожалуйста, введите корректный номер телефона";
      errorMsg.style.display = "block";
      return;
    }

    if (!document.getElementById("contactHelpAgreement").checked) {
      alert("Пожалуйста, дайте согласие на обработку данных");
      return;
    }

    // Здесь можно добавить AJAX отправку формы
    console.log("Форма отправлена:", {
      name: document.getElementById("contactHelpName").value,
      phone: document.getElementById("contactHelpPhone").value,
    });

    // Показываем модальное окно
    modal.style.display = "block";

    // Очищаем форму
    form.reset();
  });

  // Закрытие модального окна
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Закрытие при клике вне окна
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
/***********************частые вопросы************************** */
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-custom-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-custom-question");

    question.addEventListener("click", () => {
      // Закрываем все открытые вопросы
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Открываем/закрываем текущий вопрос
      item.classList.toggle("active");
    });
  });
});
/****************якорные ссылки плавная анимация********************** */
// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Отменяем стандартное поведение
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Рассчитываем позицию с учетом фиксированного хедера
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      // Плавная прокрутка
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Обновляем URL без перезагрузки страницы
      if (history.pushState) {
        history.pushState(null, null, targetId);
      } else {
        location.hash = targetId;
      }

      // Для мобильного меню (если нужно закрыть меню после клика)
      const mobileMenu = document.querySelector(".mobile-menu.active");
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    }
  });
});

// Прокручиваем страницу к началу при загрузке
window.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});

/**************Главная форма**************************************** */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const thankYouOverlay = document.getElementById("calcThankYouOverlay");
  const thankYouBtn = document.getElementById("calcThankYouBtn");

  // Функция для форматирования телефона
  function formatPhone(phone) {
    return phone
      .replace(/\D/g, "")
      .replace(/^(\d)/, "+7")
      .replace(/^(\+\d{3})(\d)/, "$1 ($2")
      .replace(/^(\+\d{3}\s\(\d{2})(\d)/, "$1) $2")
      .replace(/^(\+\d{3}\s\(\d{2}\)\s\d{3})(\d)/, "$1-$2")
      .replace(/^(\+\d{3}\s\(\d{2}\)\s\d{3}-\d{2})(\d)/, "$1-$2");
  }

  // Обработчик отправки формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const consent = document.getElementById("consent").checked;

    // Валидация
    if (!name) {
      alert("Пожалуйста, введите ваше имя");
      return;
    }

    if (!phone) {
      alert("Пожалуйста, введите ваш телефон");
      return;
    }

    if (!consent) {
      alert("Пожалуйста, дайте согласие на обработку персональных данных");
      return;
    }

    // Форматируем телефон
    const cleanPhone = phone.replace(/\D/g, "");
    let formattedPhone;
    if (cleanPhone.startsWith("8")) {
      formattedPhone = "+7" + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith("7")) {
      formattedPhone = "+" + cleanPhone;
    } else if (cleanPhone.startsWith("9")) {
      formattedPhone = "+7" + cleanPhone;
    } else {
      formattedPhone = "+7" + cleanPhone;
    }

    // Отправка данных в Telegram
    const botToken = "8178591992:AAEv1_IhHBIWNBET9_xI0cJL4iZI-MF4gA4";
    const chatId = "682859146";
    const message = `📌 Новая заявка на расчет:\n\n👤 Имя: ${name}\n📞 Телефон: ${formattedPhone}\n🌐 Источник: Форма "Заказать расчет"`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Показываем окно благодарности
          thankYouOverlay.style.display = "flex";
          document.body.classList.add("calc-modal-open");
          // Очищаем форму
          form.reset();
        } else {
          throw new Error("Ошибка при отправке");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
        );
      });
  });

  // Закрытие окна благодарности
  thankYouBtn.addEventListener("click", function () {
    thankYouOverlay.style.display = "none";
    document.body.classList.remove("calc-modal-open");
  });

  // Закрытие по клику вне окна
  thankYouOverlay.addEventListener("click", function (e) {
    if (e.target === thankYouOverlay) {
      thankYouOverlay.style.display = "none";
      document.body.classList.remove("calc-modal-open");
    }
  });
});
/***********************кнопка консультации******************************** */

document.addEventListener("DOMContentLoaded", function () {
  // Элементы модального окна
  const modalOverlay = document.getElementById("consultModalOverlay");
  const consultationBtns = document.querySelectorAll(
    ".consultation-btn, .mobile-btn"
  );
  const closeBtn = document.querySelector(".consult-modal-close-btn");
  const form = document.getElementById("consultModalForm");
  const phoneInput = document.getElementById("consult-phone");
  const phoneError = document.getElementById("consult-phone-error");
  const formContent = document.getElementById("consultFormContent");
  const thankYouContent = document.getElementById("consultThankYou");
  const thankYouCloseBtn = document.getElementById("consultThankYouBtn");

  // Функция закрытия модального окна
  function closeModal() {
    modalOverlay.style.display = "none";
    document.body.classList.remove("consult-modal-open");
    form.reset();
    formContent.style.display = "block";
    thankYouContent.style.display = "none";
  }

  // Маска для телефона
  phoneInput.addEventListener("input", function (e) {
    let value = this.value.replace(/\D+/g, "");
    let formattedValue = "";

    if (value.startsWith("7") || value.startsWith("8")) {
      value = value.substring(1);
      formattedValue = "+7 (";
    } else if (value.startsWith("9")) {
      formattedValue = "+7 (";
    } else {
      formattedValue = value;
    }

    if (value.length > 0) {
      formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += ") " + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += "-" + value.substring(6, 8);
    }
    if (value.length > 8) {
      formattedValue += "-" + value.substring(8, 10);
    }

    this.value = formattedValue;
  });

  // Валидация телефона
  function validatePhone(phone) {
    const phoneRegex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone);
  }

  // Открытие модального окна
  consultationBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.style.display = "flex";
      document.body.classList.add("consult-modal-open");
    });
  });

  // Закрытие модального окна
  closeBtn.addEventListener("click", closeModal);
  thankYouCloseBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Валидация
    const name = document.getElementById("consult-name").value.trim();
    const phone = phoneInput.value.trim();
    const privacyChecked = document.getElementById(
      "consult-privacy-policy"
    ).checked;

    let isValid = true;

    if (name === "") {
      isValid = false;
      document.getElementById("consult-name").style.borderColor = "red";
    } else {
      document.getElementById("consult-name").style.borderColor = "#ddd";
    }

    if (!validatePhone(phone)) {
      isValid = false;
      phoneInput.style.borderColor = "red";
      phoneError.textContent = "Введите корректный номер телефона";
      phoneError.style.display = "block";
    } else {
      phoneInput.style.borderColor = "#ddd";
      phoneError.style.display = "none";
    }

    if (!privacyChecked) {
      isValid = false;
      document.getElementById(
        "consult-privacy-policy"
      ).nextElementSibling.style.color = "red";
    } else {
      document.getElementById(
        "consult-privacy-policy"
      ).nextElementSibling.style.color = "";
    }

    if (!isValid) return;

    // Форматирование телефона для отправки
    let cleanPhone = phone.replace(/\D+/g, "");
    if (cleanPhone.startsWith("8")) {
      cleanPhone = "7" + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith("9")) {
      cleanPhone = "7" + cleanPhone;
    }

    // Отправка данных в Telegram
    const botToken = "8178591992:AAEv1_IhHBIWNBET9_xI0cJL4iZI-MF4gA4";
    const chatIds = ["682859146", "258608199"]; // Массив с chat_id получателей
    const message = `Новая заявка 🔥🔥🔥:\n\n👤 Имя: ${name}\n📞 Телефон: +${cleanPhone} \n🌐 Источник: Кнопка консультация`;

    // Функция для отправки сообщения
    const sendMessage = (chatId) => {
      return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    };

    // Отправляем сообщения всем получателям
    Promise.all(chatIds.map(sendMessage))
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((dataArray) => {
        // Проверяем, что хотя бы одно сообщение отправилось успешно
        const isSuccess = dataArray.some((data) => data.ok);
        if (isSuccess) {
          formContent.style.display = "none";
          thankYouContent.style.display = "block";
        } else {
          throw new Error("Не удалось отправить ни одного сообщения");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
        );
      });
  });
});
/**********************кнопка второго блока оставить заявку********************************** */
document.addEventListener("DOMContentLoaded", function () {
  // Элементы модального окна
  const modalOverlay = document.getElementById("requestModalOverlay");
  const requestBtn = document.querySelector(".cta-button");
  const closeBtn = document.querySelector(".request-modal-close-btn");
  const form = document.getElementById("requestModalForm");
  const phoneInput = document.getElementById("request-phone");
  const phoneError = document.getElementById("request-phone-error");
  const formContent = document.getElementById("requestFormContent");
  const thankYouContent = document.getElementById("requestThankYou");
  const thankYouBtn = document.getElementById("requestThankYouBtn");

  // Функция закрытия модального окна
  function closeModal() {
    modalOverlay.style.display = "none";
    document.body.classList.remove("request-modal-open");
    // Сбрасываем форму и показываем её снова
    form.reset();
    formContent.style.display = "block";
    thankYouContent.style.display = "none";
  }

  // Маска для телефона
  phoneInput.addEventListener("input", function (e) {
    let value = this.value.replace(/\D+/g, "");
    let formattedValue = "";

    if (value.startsWith("7") || value.startsWith("8")) {
      value = value.substring(1);
      formattedValue = "+7 (";
    } else if (value.startsWith("9")) {
      formattedValue = "+7 (";
    } else {
      formattedValue = value;
    }

    if (value.length > 0) {
      formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += ") " + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += "-" + value.substring(6, 8);
    }
    if (value.length > 8) {
      formattedValue += "-" + value.substring(8, 10);
    }

    this.value = formattedValue;
  });

  // Валидация телефона
  function validatePhone(phone) {
    const phoneRegex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone);
  }

  // Открытие модального окна
  requestBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalOverlay.style.display = "flex";
    document.body.classList.add("request-modal-open");
    // Убедимся, что показывается форма
    formContent.style.display = "block";
    thankYouContent.style.display = "none";
  });

  // Закрытие модального окна
  closeBtn.addEventListener("click", closeModal);
  thankYouBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Валидация
    const name = document.getElementById("request-name").value.trim();
    const phone = phoneInput.value.trim();
    const privacyChecked = document.getElementById(
      "request-privacy-policy"
    ).checked;

    let isValid = true;

    if (name === "") {
      isValid = false;
      document.getElementById("request-name").style.borderColor = "red";
    } else {
      document.getElementById("request-name").style.borderColor = "#ddd";
    }

    if (!validatePhone(phone)) {
      isValid = false;
      phoneInput.style.borderColor = "red";
      phoneError.textContent = "Введите корректный номер телефона";
      phoneError.style.display = "block";
    } else {
      phoneInput.style.borderColor = "#ddd";
      phoneError.style.display = "none";
    }

    if (!privacyChecked) {
      isValid = false;
      document.getElementById(
        "request-privacy-policy"
      ).nextElementSibling.style.color = "red";
    } else {
      document.getElementById(
        "request-privacy-policy"
      ).nextElementSibling.style.color = "";
    }

    if (!isValid) return;

    // Форматирование телефона для отправки
    let cleanPhone = phone.replace(/\D+/g, "");
    if (cleanPhone.startsWith("8")) {
      cleanPhone = "7" + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith("9")) {
      cleanPhone = "7" + cleanPhone;
    }

    // Отправка данных в Telegram
    const botToken = "8178591992:AAEv1_IhHBIWNBET9_xI0cJL4iZI-MF4gA4";
    const chatIds = ["682859146", "258608199"]; // Массив с ID получателей
    const message = `Новая заявка 🔥🔥🔥:\n\n👤 Имя: ${name}\n📞 Телефон: +${cleanPhone}\n🌐 Источник: Карточка "Остались вопросы"`;

    // Создаем массив промисов для отправки сообщений
    const sendPromises = chatIds.map((chatId) => {
      return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    });

    // Отправляем все сообщения
    Promise.all(sendPromises)
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((results) => {
        // Проверяем, что хотя бы одно сообщение отправилось успешно
        const isSuccess = results.some((result) => result.ok);
        if (isSuccess) {
          // Показываем окно благодарности и скрываем форму
          formContent.style.display = "none";
          thankYouContent.style.display = "block";
        } else {
          throw new Error("Не удалось отправить ни одно сообщение");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
        );
      });
  });
});
/*****************блок с призидентом ************************* */
document.addEventListener("DOMContentLoaded", function () {
  // Элементы модального окна
  const modalOverlay = document.getElementById("detailsModalOverlay");
  const detailsBtn = document.querySelector(".president-btn");
  const closeBtn = document.querySelector(".details-modal-close-btn");
  const form = document.getElementById("detailsModalForm");
  const phoneInput = document.getElementById("details-phone");
  const phoneError = document.getElementById("details-phone-error");
  const thankYouSection = document.getElementById("detailsThankYou");
  const thankYouBtn = document.getElementById("detailsThankYouBtn");
  const formSection = document.querySelector(".details-modal-content");

  // Маска для телефона
  phoneInput.addEventListener("input", function (e) {
    let value = this.value.replace(/\D+/g, "");
    let formattedValue = "";

    if (value.startsWith("7") || value.startsWith("8")) {
      value = value.substring(1);
      formattedValue = "+7 (";
    } else if (value.startsWith("9")) {
      formattedValue = "+7 (";
    } else {
      formattedValue = value;
    }

    if (value.length > 0) {
      formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += ") " + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += "-" + value.substring(6, 8);
    }
    if (value.length > 8) {
      formattedValue += "-" + value.substring(8, 10);
    }

    this.value = formattedValue;
  });

  // Валидация телефона
  function validatePhone(phone) {
    const phoneRegex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone);
  }

  // Открытие модального окна
  detailsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalOverlay.style.display = "flex";
    document.body.classList.add("details-modal-open");
  });

  // Закрытие модального окна
  function closeModal() {
    modalOverlay.style.display = "none";
    document.body.classList.remove("details-modal-open");
    // Сбрасываем форму и показываем её снова
    form.reset();
    formSection.style.display = "block";
    thankYouSection.style.display = "none";
  }

  closeBtn.addEventListener("click", closeModal);
  thankYouBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Валидация
    const name = document.getElementById("details-name").value.trim();
    const phone = phoneInput.value.trim();
    const privacyChecked = document.getElementById(
      "details-privacy-policy"
    ).checked;

    let isValid = true;

    if (name === "") {
      isValid = false;
      document.getElementById("details-name").style.borderColor = "red";
    } else {
      document.getElementById("details-name").style.borderColor = "#ddd";
    }

    if (!validatePhone(phone)) {
      isValid = false;
      phoneInput.style.borderColor = "red";
      phoneError.textContent = "Введите корректный номер телефона";
      phoneError.style.display = "block";
    } else {
      phoneInput.style.borderColor = "#ddd";
      phoneError.style.display = "none";
    }

    if (!privacyChecked) {
      isValid = false;
      document.getElementById(
        "details-privacy-policy"
      ).nextElementSibling.style.color = "red";
    } else {
      document.getElementById(
        "details-privacy-policy"
      ).nextElementSibling.style.color = "";
    }

    if (!isValid) return;

    // Форматирование телефона для отправки
    let cleanPhone = phone.replace(/\D+/g, "");
    if (cleanPhone.startsWith("8")) {
      cleanPhone = "7" + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith("9")) {
      cleanPhone = "7" + cleanPhone;
    }

    // Отправка данных в Telegram
    const botToken = "8178591992:AAEv1_IhHBIWNBET9_xI0cJL4iZI-MF4gA4";
    const chatIds = ["682859146", "258608199"]; // Массив с chat_id получателей
    const message = `Новая заявка 🔥🔥🔥:\n\n👤 Имя: ${name}\n📞 Телефон: +${cleanPhone} \n🌐 Источник: О бесплатной газификации`;

    // Функция для отправки сообщения
    const sendMessage = (chatId) => {
      return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    };

    // Отправляем сообщения всем получателям
    Promise.all(chatIds.map(sendMessage))
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((dataArray) => {
        // Проверяем, что хотя бы одно сообщение отправилось успешно
        const isSuccess = dataArray.some((data) => data.ok);
        if (isSuccess) {
          // Показываем окно благодарности и скрываем форму
          formSection.style.display = "none";
          thankYouSection.style.display = "block";
        } else {
          throw new Error("Не удалось отправить ни одного сообщения");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
        );
      });
  });
});
/*********************карточка что нужно кнопка заявки *********************************** */
document.addEventListener("DOMContentLoaded", function () {
  // Элементы модального окна
  const modalOverlay = document.getElementById("gasStepModalOverlay");
  const requestBtn = document.querySelector(".gas-step-button");
  const closeBtn = document.querySelector(".gas-step-modal-close-btn");
  const form = document.getElementById("gasStepModalForm");
  const phoneInput = document.getElementById("gas-step-phone");
  const phoneError = document.getElementById("gas-step-phone-error");
  const formContent = document.getElementById("gasStepFormContent");
  const thankYouContent = document.getElementById("gasStepThankYou");
  const thankYouBtn = document.getElementById("gasStepThankYouBtn");

  // Функция закрытия модального окна
  function closeModal() {
    modalOverlay.style.display = "none";
    document.body.classList.remove("gas-step-modal-open");
    // Сбрасываем форму и показываем её снова
    form.reset();
    formContent.style.display = "block";
    thankYouContent.style.display = "none";
  }

  // Маска для телефона
  phoneInput.addEventListener("input", function (e) {
    let value = this.value.replace(/\D+/g, "");
    let formattedValue = "";

    if (value.startsWith("7") || value.startsWith("8")) {
      value = value.substring(1);
      formattedValue = "+7 (";
    } else if (value.startsWith("9")) {
      formattedValue = "+7 (";
    } else {
      formattedValue = value;
    }

    if (value.length > 0) {
      formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += ") " + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += "-" + value.substring(6, 8);
    }
    if (value.length > 8) {
      formattedValue += "-" + value.substring(8, 10);
    }

    this.value = formattedValue;
  });

  // Валидация телефона
  function validatePhone(phone) {
    const phoneRegex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone);
  }

  // Открытие модального окна
  requestBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalOverlay.style.display = "flex";
    document.body.classList.add("gas-step-modal-open");
    // Убедимся, что показывается форма
    formContent.style.display = "block";
    thankYouContent.style.display = "none";
  });

  // Закрытие модального окна
  closeBtn.addEventListener("click", closeModal);
  thankYouBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Отправка формы
  // Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Валидация
    const name = document.getElementById("gas-step-name").value.trim();
    const phone = phoneInput.value.trim();
    const privacyChecked = document.getElementById(
      "gas-step-privacy-policy"
    ).checked;

    let isValid = true;

    if (name === "") {
      isValid = false;
      document.getElementById("gas-step-name").style.borderColor = "red";
    } else {
      document.getElementById("gas-step-name").style.borderColor = "#ddd";
    }

    if (!validatePhone(phone)) {
      isValid = false;
      phoneInput.style.borderColor = "red";
      phoneError.textContent = "Введите корректный номер телефона";
      phoneError.style.display = "block";
    } else {
      phoneInput.style.borderColor = "#ddd";
      phoneError.style.display = "none";
    }

    if (!privacyChecked) {
      isValid = false;
      document.getElementById(
        "gas-step-privacy-policy"
      ).nextElementSibling.style.color = "red";
    } else {
      document.getElementById(
        "gas-step-privacy-policy"
      ).nextElementSibling.style.color = "";
    }

    if (!isValid) return;

    // Форматирование телефона для отправки
    let cleanPhone = phone.replace(/\D+/g, "");
    if (cleanPhone.startsWith("8")) {
      cleanPhone = "7" + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith("9")) {
      cleanPhone = "7" + cleanPhone;
    }

    // Отправка данных в Telegram
    const botToken = "8178591992:AAEv1_IhHBIWNBET9_xI0cJL4iZI-MF4gA4";
    const chatIds = ["682859146", "258608199"]; // Массив с ID чатов
    const message = `Новая заявка 🔥🔥🔥:\n\n👤 Имя: ${name}\n📞 Телефон: +${cleanPhone} \n🌐 Источник: Что нужно для работы (блок) нужна консультация `;

    // Функция отправки сообщения
    const sendMessageToChat = (chatId) => {
      return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    };

    const sendPromises = chatIds.map((chatId) => sendMessageToChat(chatId));

    Promise.all(sendPromises)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((dataArray) => {
        const allSuccess = dataArray.every((data) => data.ok);

        if (allSuccess) {
          // Показываем окно благодарности и скрываем форму
          formContent.style.display = "none";
          thankYouContent.style.display = "block";
        } else {
          alert(
            "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
        );
      });
  });
});
/****************контакты************************** */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactHelpForm");
  const submitBtn = document.querySelector(".js-contact-help-submit");
  const phoneInput = document.getElementById("contactHelpPhone");
  const phoneError = document.querySelector(".js-contact-help-phone-error");
  const thankyouModal = document.querySelector(
    ".js-contact-help-thankyou-modal"
  );
  const closeThankyou = document.querySelector(
    ".js-contact-help-thankyou-close"
  );

  // Валидация телефона
  function validatePhone(phone) {
    const regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
  }

  // Форматирование телефона
  function formatPhone(phone) {
    let cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 11) {
      if (cleaned[0] === "8") {
        cleaned = "7" + cleaned.slice(1);
      }
      return "+" + cleaned;
    } else if (cleaned.length === 10) {
      return "+7" + cleaned;
    }
    return phone;
  }

  // Обработчик ввода телефона
  phoneInput.addEventListener("input", function (e) {
    const value = e.target.value;
    if (!validatePhone(value)) {
      phoneError.style.display = "block";
      phoneError.textContent =
        "Введите корректный номер телефона (начинается с 8 или +7)";
      phoneInput.classList.add("error");
    } else {
      phoneError.style.display = "none";
      phoneInput.classList.remove("error");
    }
  });

  // Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Проверяем валидность формы
    if (!form.checkValidity()) {
      return;
    }

    // Проверяем телефон
    const phoneValue = phoneInput.value;
    if (!validatePhone(phoneValue)) {
      phoneError.style.display = "block";
      phoneError.textContent =
        "Введите корректный номер телефона (начинается с 8 или +7)";
      phoneInput.classList.add("error");
      return;
    }

    // Форматируем телефон
    const formattedPhone = formatPhone(phoneValue);
    const nameValue = document.getElementById("contactHelpName").value;

    // Отправляем данные в Telegram
    sendToTelegram(nameValue, formattedPhone);
  });

  // Функция отправки в Telegram
  function sendToTelegram(name, phone) {
    const botToken = "8178591992:AAEv1_IhHBIWNBET9_xI0cJL4iZI-MF4gA4";
    const chatIds = ["682859146", "258608199"]; // Массив ID чатов
    const text = `Новая заявка 🔥🔥🔥:\n\n👤 Имя: ${name}\n📞 Телефон: +${phone} \n🌐 Источник: Блок контакты `;

    const sendPromises = chatIds.map((chatId) =>
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      })
    );

    submitBtn.disabled = true;
    submitBtn.textContent = "Отправка...";

    Promise.all(sendPromises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((dataArray) => {
        const allSuccess = dataArray.every((data) => data.ok);

        if (allSuccess) {
          // Показываем окно благодарности
          thankyouModal.style.display = "flex";
          // Очищаем форму
          form.reset();
        } else {
          alert(
            "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже."
        );
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Нужна помощь";
      });
  }

  // Закрытие модального окна
  closeThankyou.addEventListener("click", function () {
    thankyouModal.style.display = "none";
  });

  // Закрытие при клике вне окна
  window.addEventListener("click", function (e) {
    if (e.target === thankyouModal) {
      thankyouModal.style.display = "none";
    }
  });
});

/********************ватсап*********************************** */
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.querySelector(".js-egs-whatsapp-btn");
  const benefitsSection = document.querySelector(".benefits-section");

  if (whatsappBtn && benefitsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            whatsappBtn.style.display = "block";
          } else {
            // Если хотите, чтобы кнопка скрывалась при скролле вверх
            // whatsappBtn.style.display = 'none';
          }
        });
      },
      {
        threshold: 0.1, // Срабатывает, когда 10% секции видно
      }
    );

    observer.observe(benefitsSection);

    // Плавное появление через 3 секунды после загрузки страницы (опционально)
    setTimeout(() => {
      if (
        window.scrollY >=
        benefitsSection.offsetTop - window.innerHeight * 0.9
      ) {
        whatsappBtn.style.display = "block";
      }
    }, 3000);
  }
});
/***********прайс************************** */
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".price-toggle-btn");
  const hiddenRows = document.querySelectorAll(".price-table-row.hidden");
  let isExpanded = false;

  toggleBtn.addEventListener("click", function () {
    isExpanded = !isExpanded;

    // Обновляем атрибут доступности
    this.setAttribute("aria-expanded", isExpanded);

    // Обновляем текст кнопки
    const toggleText = this.querySelector(".price-toggle-text");
    toggleText.textContent = isExpanded ? "Свернуть" : "Показать все услуги";

    // Анимируем показ/скрытие строк
    if (isExpanded) {
      hiddenRows.forEach((row, index) => {
        setTimeout(() => {
          row.classList.add("expanded");
          row.style.display = "table-row";
        }, index * 50);
      });
    } else {
      hiddenRows.forEach((row) => {
        row.classList.remove("expanded");
        row.style.display = "none";
      });
    }
  });

  // Для SEO: скрытые строки должны быть доступны поисковым ботам
  // Поэтому мы просто скрываем их визуально, но оставляем в DOM
  hiddenRows.forEach((row) => {
    row.style.display = "none";
  });
});
/******************выподающие меню услуг********************** */
