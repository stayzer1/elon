// Custom scripts

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 4,
    gap: 16,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      650: {
        perPage: 2,
        arrows: false,
      },
      450: {
        perPage: 1,
      },
    },
  });
  splide.mount();
  new Splide("#slider2", {
    perMove: 1,
    pagination: false,
    perPage: 2,
    arrows: false,
    gap: 16,
    breakpoints: {
      450: {
        perPage: 1,
      },
    },
  }).mount();
});
