// ==========================================================================
// 1. SISTEMA DO MENU RESPONSIVO (Funciona em todas as páginas)
// ==========================================================================

// Busca dos elementos no HTML (Ajustado para buscar pelo ID 'menu-links')
const burguerBtn = document.getElementById('burguer');
const navLinksContainer = document.getElementById('menu-links');
const navItems = document.querySelectorAll('#menu-links li');

// Função que manipula a abertura/fechamento do menu
function toggleMenu(event) {
    event.stopPropagation();
    
    // Liga/Desliga a classe active no container do menu
    navLinksContainer.classList.toggle('active');

    // Faz o efeito de cascata (fade-in) nos links de maneira limpa
    navItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            // O index ajuda a dar um micro-atraso elegante entre cada link
            link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.2}s`;
        }
    });
}

// Aplica o ouvinte de clique com validação de segurança
if (burguerBtn && navLinksContainer) {
    burguerBtn.addEventListener('click', toggleMenu);
    console.log("Sucesso: Menu responsivo mapeado e pronto!");
} else {
    console.warn("Aviso: Elementos do menu não encontrados nesta página.");
}


// ==========================================================================
// 2. SISTEMA INTERATIVO DO ACCORDION (FAQ - Protegido com o IF)
// ==========================================================================

// Seleção de todas as perguntas do FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// Validação de Segurança: Só roda se encontrar perguntas do FAQ na página (Evita erro no Sobre Nós)
if (faqQuestions.length > 0) {
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
    
    console.log("Sucesso: Sistema de FAQ ativado!");
}