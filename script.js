document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentSlide = 0;
    let slideInterval;

    // Función para mostrar una diapositiva específica
    function showSlide(index) {
        // Oculta la diapositiva actual
        slides[currentSlide].classList.remove('active-slide');

        // Calcula el índice de la nueva diapositiva (para un bucle infinito)
        currentSlide = (index + slides.length) % slides.length;

        // Muestra la nueva diapositiva
        slides[currentSlide].classList.add('active-slide');
    }

    // Función para pasar a la siguiente diapositiva
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Función que sirve para reiniciar el intervalo automático
    function resetInterval() {
        clearInterval(slideInterval); // Limpia el intervalo anterior
        slideInterval = setInterval(nextSlide, 3000); // Crea uno nuevo
    }

    // Event Listeners para los botones
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetInterval();
        });      
    
    });
    
