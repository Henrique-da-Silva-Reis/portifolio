let currentIndex = 0;
const projetosContainer = document.querySelector('.projetos-container');
const projetos = document.querySelectorAll('.projeto');
const totalProjetos = projetos.length;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function moveToSlide(index) {
    // Previne index fora do limite
    if (index < 0) {
        currentIndex = totalProjetos - 1;
    } else if (index >= totalProjetos) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Mover o slider
    projetosContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
});

// Navegação automática (a cada 5 segundos)
setInterval(() => {
    moveToSlide(currentIndex + 1);
}, 5000);
