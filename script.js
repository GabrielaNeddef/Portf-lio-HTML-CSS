document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active'); // Alterna a classe 'active' para mostrar/ocultar o menu
});

// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Obtém o ID do alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        // Se o elemento alvo existir, rola suavemente até ele
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

