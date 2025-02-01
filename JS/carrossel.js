document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carouselItems = document.querySelector(".carousel-items");
    const totalItems = document.querySelectorAll(".carousel-item").length;
    const itemWidth = document.querySelector(".carousel-item").offsetWidth + 15; // Considerando o gap

    let currentIndex = 0;

    // Função para mover para o próximo item
    function moveNext() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Se atingir o final, volta para o primeiro
        }
        updateCarouselPosition();
    }

    // Função para mover para o item anterior
    function movePrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Se estiver no início, vai para o último
        }
        updateCarouselPosition();
    }

    // Atualiza a posição dos itens no carrossel
    function updateCarouselPosition() {
        carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Adicionando os ouvintes de eventos para os botões
    nextButton.addEventListener("click", moveNext);
    prevButton.addEventListener("click", movePrev);
});
