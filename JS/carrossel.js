document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carrosselItems = document.querySelector(".carrossel-items");
    const carrosselItem = document.querySelector(".carrossel-item");

    let totalItems = carrosselItems.children.length;
    let currentIndex = 0;
    let itemWidth = carrosselItem.offsetWidth;

    // Função para mover para o próximo item
    function moveNext() {
        currentIndex++;

        // Se atingir o último item, volta para o primeiro
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        // Atualiza a posição do carrossel
        updateCarrosselPosition();
    }

    // Função para mover para o item anterior
    function movePrev() {
        currentIndex--;

        // Se atingir o primeiro item, volta para o último
        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        }

        // Atualiza a posição do carrossel
        updateCarrosselPosition();
    }

    // Atualiza a posição do carrossel
    function updateCarrosselPosition() {
        carrosselItems.style.transition = "transform 0.5s ease-in-out"; // Reativa a transição suave
        carrosselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Adiciona os ouvintes de eventos para os botões
    nextButton.addEventListener("click", moveNext);
    prevButton.addEventListener("click", movePrev);

    // Recalcula o itemWidth ao redimensionar a janela
    window.addEventListener("resize", function() {
        itemWidth = carrosselItem.offsetWidth;
        updateCarrosselPosition();
    });
});
