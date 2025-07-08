/* Modal para agendar reunión */
const openModalBtns = document.querySelectorAll(".open-modal-btn");
const calendarModal = document.getElementById("calendarModal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtns.forEach(button => {
    button.addEventListener("click", function() {
        calendarModal.style.display = "block";
    });
});

closeModalBtn.addEventListener("click", function() {
    calendarModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == calendarModal) {
        calendarModal.style.display = "none";
    }
});

/* Slider de Testimonios */
const slider = document.querySelector('.slider');
const sliderItems = Array.from(document.querySelectorAll('.testimonial'));
const totalItems = sliderItems.length;
const itemWidth = sliderItems[0].offsetWidth + 20;
let index = 0;
let autoSlide;

// Clonar los items al final del slider para crear el bucle continuo
function cloneItems() {
    sliderItems.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });
}

// Función para mover el slider manualmente
function moveSlide(direction) {
    index += direction;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${index * itemWidth}px)`;

    if (index >= totalItems) {
        setTimeout(() => {
            slider.style.transition = 'none';
            index = 0;
            slider.style.transform = `translateX(0px)`;
        }, 500);
    }

    if (index < 0) {
        setTimeout(() => {
            slider.style.transition = 'none';
            index = totalItems - 1;
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
        }, 500);
    }
}

// Iniciar auto desplazamiento
function startAutoSlide() {
    autoSlide = setInterval(() => {
        moveSlide(1);
    }, 4000);
}

// Detener auto desplazamiento
function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Eventos para las flechas de navegación
document.querySelector('.arrow-left').addEventListener('click', () => {
    stopAutoSlide();
    moveSlide(-1);
    startAutoSlide();
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    stopAutoSlide();
    moveSlide(1);
    startAutoSlide();
});

// Iniciar clonación y desplazamiento automático
cloneItems();
startAutoSlide();