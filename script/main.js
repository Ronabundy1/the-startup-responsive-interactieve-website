
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const slides = document.querySelector(".slides");
    const slideWidth = document.querySelector(".slide").offsetWidth;
    const slideCount = document.querySelectorAll(".slide").length;
    let currentSlide = 0;
  
    function updateSlider() {
      slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  
    function setActiveSlideButton() {
      const buttons = document.querySelectorAll("#slider-controls li");
      buttons.forEach((button, index) => {
        button.classList.toggle("active-slide", index === currentSlide);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
      setActiveSlideButton();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateSlider();
      setActiveSlideButton();
    }
  
    // Set automatic transition every 5 seconds
    setInterval(nextSlide, 5000);
  });
  

function showJiraProducts() {
  document.querySelectorAll('.product-slider__item').forEach(item => {
    item.classList.add('hidden');
    item.classList.remove('visible');
  });

  document.querySelectorAll('.product-slider__item.jira').forEach(item => {
    item.classList.remove('hidden');
    setTimeout(() => item.classList.add('visible'), 10);
  });
}

function showConfluenceProducts() {
  document.querySelectorAll('.product-slider__item').forEach(item => {
    item.classList.add('hidden');
    item.classList.remove('visible');
  });

  document.querySelectorAll('.product-slider__item.confluence').forEach(item => {
    item.classList.remove('hidden');
    setTimeout(() => item.classList.add('visible'), 10);
  });
}

function showAllProducts() {
  document.querySelectorAll('.product-slider__item').forEach(item => {
    item.classList.remove('hidden');
    setTimeout(() => item.classList.add('visible'), 10);
  });
}

