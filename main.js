let hideTimeout;

// Função para mostrar a barra de navegação
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("visible");

    // Limpar qualquer temporizador anterior
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }

    // Se a largura da janela for maior que 768px (não é um dispositivo móvel), iniciar um novo temporizador para esconder a barra de navegação após 1 segundo de inatividade
    if (window.innerWidth > 768) {
        hideTimeout = setTimeout(() => {
            sidebar.classList.remove("visible");
        }, 1000);
    }
}

// Adicionar evento de movimento do mouse se não for um dispositivo móvel
if (window.innerWidth > 768) {
    window.addEventListener("mousemove", showSidebar);
}

// Função para alternar a visibilidade das opções de navegação em dispositivos móveis
function toggleNavOptions(event) {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("visible");
    event.stopPropagation(); // Evitar que o clique na logo feche a barra de navegação imediatamente
}

// Adicionar evento de clique na logo para dispositivos móveis
document.querySelector(".logo img").addEventListener("click", toggleNavOptions);

// Função para fechar a barra de navegação ao clicar fora dela em dispositivos móveis
function closeSidebar(event) {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar.contains(event.target) && sidebar.classList.contains("visible")) {
        sidebar.classList.remove("visible");
    }
}

// Adicionar evento de clique no documento para fechar a barra de navegação ao clicar fora dela em dispositivos móveis
document.addEventListener("click", closeSidebar);

// Mostrar a barra de navegação sempre que a janela é redimensionada ou carregada
function ensureSidebarVisibility() {
    const sidebar = document.querySelector(".sidebar");
    if (window.innerWidth > 768) {
        sidebar.classList.add("visible");
    } else {
        sidebar.classList.remove("visible");
    }
}

// Garantir que a barra de navegação esteja visível ou oculta corretamente no carregamento e redimensionamento da janela
window.addEventListener("resize", ensureSidebarVisibility);
window.addEventListener("load", ensureSidebarVisibility);

// Inicializar a visibilidade correta ao carregar a página
ensureSidebarVisibility();
