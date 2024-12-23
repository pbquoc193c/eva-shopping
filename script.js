"use strict";

///////////////// Product Section Variables
const categories = document.querySelectorAll(".category-item");
const sliderContainer = document.querySelector(".product-sliders");
const sliders = document.querySelectorAll(".product-slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const dotContainer = document.querySelector(".dots");

//////////////// Product Section
let categoryIndex = 0;
categories.forEach((category, i) => {
  category.addEventListener("click", () => {
    categories[categoryIndex].classList.remove("active");
    categoryIndex = i;
    category.classList.add("active");
  });
});

sliders.forEach(() => {
  dotContainer.insertAdjacentHTML("afterbegin", '<div class="dot"></div>');
});
const dots = document.querySelectorAll(".dot");
dots[0].classList.add("active");

let sliderWidth;
let currentSlider = 0;
let handleChangeSliderEvent;

const changeDotActive = function () {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlider].classList.add("active");
};

const handlerSlider = function () {
  sliderWidth = sliders[0].offsetWidth;

  if (currentSlider === sliders.length - 1) {
    currentSlider = 0;
    changeDotActive();
    sliderContainer.style.animation = "fadeInOut 1s ease-out";
  } else {
    currentSlider++;
    changeDotActive();
    sliderContainer.style.animation = "none";
  }

  sliderContainer.style.transform = `translateX(${
    sliderWidth * currentSlider * -1
  }px)`;
};
// handleChangeSliderEvent = setInterval(handlerSlider, 5000);

arrowLeft.addEventListener("click", () => {
  clearInterval(handleChangeSliderEvent);
  sliderWidth = sliders[0].clientWidth;

  if (currentSlider === 0) {
    currentSlider = sliders.length - 1;
    changeDotActive();
    sliderContainer.style.animation = "fadeInOut 1s ease-out";
  } else {
    currentSlider--;
    changeDotActive();
    sliderContainer.style.animation = "none";
  }

  sliderContainer.style.transform = `translateX(${
    sliderWidth * currentSlider * -1
  }px)`;
});

arrowRight.addEventListener("click", () => {
  clearInterval(handleChangeSliderEvent);
  handlerSlider();
});

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    sliderWidth = sliders[0].clientWidth;

    dots[currentSlider].classList.remove("active");
    currentSlider = index;
    dot.classList.add("active");

    clearInterval(handleChangeSliderEvent);
    handleChangeSliderEvent = setInterval(handlerSlider, 7000);

    sliderContainer.style.transform = `translateX(${
      sliderWidth * currentSlider * -1
    }px)`;
  })
);
