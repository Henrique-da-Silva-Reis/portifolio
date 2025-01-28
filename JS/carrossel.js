let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Atualiza o índice atual
    currentIndex += direction;

    // Se for o último item, volta para o primeiro
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Se for o primeiro item, vai para o último
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    // Move os itens no carrossel
    const carousel = document.querySelector('.carousel-items');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
