document.addEventListener("DOMContentLoaded", function () {
  // Initialize animations with Intersection Observer
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

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Share buttons functionality
  const shareButtons = {
    vk: function () {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      window.open(
        `https://vk.com/share.php?url=${url}&title=${title}`,
        "_blank",
        "width=550,height=400"
      );
    },
    tg: function () {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(document.title);
      window.open(
        `https://t.me/share/url?url=${url}&text=${text}`,
        "_blank",
        "width=550,height=400"
      );
    },
    wa: function () {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(document.title);
      window.open(
        `https://wa.me/?text=${text}%20${url}`,
        "_blank",
        "width=550,height=400"
      );
    },
  };

  document.querySelectorAll(".share-button").forEach((button) => {
    const platform = button.classList[1];
    if (shareButtons[platform]) {
      button.addEventListener("click", shareButtons[platform]);
    }
  });

  // Enhanced lazy loading for images
  const lazyLoadImages = () => {
    // If browser supports native lazy loading
    if ("loading" in HTMLImageElement.prototype) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      lazyImages.forEach((img) => {
        // Make sure image is in viewport to trigger loading
        if (img.getBoundingClientRect().top < window.innerHeight + 100) {
          img.src = img.getAttribute("src");
        }
      });
    } else {
      // Fallback for browsers without native lazy loading
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');

      const lazyLoadObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.getAttribute("src");
              lazyLoadObserver.unobserve(img);
            }
          });
        },
        {
          rootMargin: "200px 0px", // Load images 200px before they enter viewport
        }
      );

      lazyImages.forEach((img) => {
        // If image is already in viewport, load it immediately
        if (img.getBoundingClientRect().top < window.innerHeight) {
          img.src = img.getAttribute("src");
        } else {
          lazyLoadObserver.observe(img);
        }
      });
    }
  };

  // Initial load
  lazyLoadImages();

  // Load images on scroll/resize
  let lazyLoadTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(lazyLoadTimeout);
    lazyLoadTimeout = setTimeout(lazyLoadImages, 200);
  });
  window.addEventListener("resize", lazyLoadImages);
});
