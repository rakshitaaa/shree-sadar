// Simple slider for testimonials
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);
