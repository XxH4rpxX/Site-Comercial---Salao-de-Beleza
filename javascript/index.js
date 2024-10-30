// Efeito de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = 7;

// Atualiza a posição do slider
function updateSlider() {
    const offset = -currentIndex * (150 + 10); // 150 (largura da imagem) + 10 (margem)
    document.querySelector('.slider-content').style.transform = `translateX(${offset}px)`;
}

// Move o slide
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages; // Move circularmente
    updateSlider();
}

// Rotação automática
setInterval(() => {
    moveSlide(1);
}, 5000);

// Inicializa o slider
updateSlider();

// Configura as setinhas
document.querySelector('.arrow-left').addEventListener('click', () => moveSlide(-1));
document.querySelector('.arrow-right').addEventListener('click', () => moveSlide(1));


const Limpezas = document.querySelectorAll('.cu-header');

        Limpezas.forEach(header => {
            header.addEventListener('click', function() {
                // Toggle a classe "active" para alterar o estilo se necessário
                this.classList.toggle('active');
                
                // Obtenha o conteúdo do acordeão
                const content = this.nextElementSibling;

                // Altere o display entre 'block' e 'none'
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        });
