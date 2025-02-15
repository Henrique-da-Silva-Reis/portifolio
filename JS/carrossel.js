let currentIndexCertificados = 0;
const certificadosContainer = document.querySelector('#certificados .certificados-container');
const certificados = document.querySelectorAll('#certificados .certificado');
const totalCertificados = certificados.length;

const prevButtonCertificado = document.getElementById('prev-certificado');
const nextButtonCertificado = document.getElementById('next-certificado');

function moveToSlideCertificado(index) {
    // Previne index fora do limite
    if (index < 0) {
        currentIndexCertificados = totalCertificados - 1;
    } else if (index >= totalCertificados) {
        currentIndexCertificados = 0;
    } else {
        currentIndexCertificados = index;
    }

    // Mover o slider
    certificadosContainer.style.transform = `translateX(-${currentIndexCertificados * 100}%)`;
}

prevButtonCertificado.addEventListener('click', () => {
    moveToSlideCertificado(currentIndexCertificados - 1);
});

nextButtonCertificado.addEventListener('click', () => {
    moveToSlideCertificado(currentIndexCertificados + 1);
});

/* Iniciar o carrossel automaticamente a cada 3 segundos
setInterval(() => {
    moveToSlideCertificado(currentIndexCertificados + 1);
}, 3000);
*/