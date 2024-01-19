
document.addEventListener("DOMContentLoaded", function () {
const slider = document.getElementById("slider");
const slides = document.querySelector(".slides");
const slideWidth = document.querySelector(".slide").offsetWidth;
const slideCount = document.querySelectorAll(".slide").length;
let currentSlide = 0;

// Functie om de slider bij te werken
function updateSlider() {
slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Functie om de actieve knop voor de huidige dia in te stellen
function setActiveSlideButton() {
const buttons = document.querySelectorAll("#slider-controls li");
buttons.forEach((button, index) => {
 button.classList.toggle("active-slide", index === currentSlide);
});
}

// Functie om naar de volgende dia te gaan
function nextSlide() {
currentSlide = (currentSlide + 1) % slideCount;
updateSlider();
setActiveSlideButton();
}

// Functie om naar de vorige dia te gaan
function prevSlide() {
currentSlide = (currentSlide - 1 + slideCount) % slideCount;
updateSlider();
setActiveSlideButton();
}

// Event listeners voor knoppen Volgende en Vorige
document.getElementById("button-prev").addEventListener("click", prevSlide);
document.getElementById("button-next").addEventListener("click", nextSlide);

// Automatische overgang naar de volgende dia elke 5 seconden
setInterval(nextSlide, 5000);
});




function showJiraProducts() {
// laat niet zien Confluence products
document.querySelectorAll('.product-slider__item.confluence').forEach(item => {
item.classList.add('hidden');
});

// laat zien Jira products
document.querySelectorAll('.product-slider__item.jira').forEach(item => {
item.classList.remove('hidden');
});
}

function showConfluenceProducts() {
// laat niet zien Jira products
document.querySelectorAll('.product-slider__item.jira').forEach(item => {
item.classList.add('hidden');
});

// laat zien Confluence products
document.querySelectorAll('.product-slider__item.confluence').forEach(item => {
item.classList.remove('hidden');
});
}

