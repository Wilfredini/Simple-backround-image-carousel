const slides = document.querySelectorAll(".imgSlider");
const btnNext = document.querySelector("#sliderNext");
const btnPrev = document.querySelector("#sliderPrev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

btnNext.addEventListener("click", nextSlide);

btnPrev.addEventListener("click", prevSlide);
