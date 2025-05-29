document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o perfil ativo é Cliente
    const activeProfile = Array.from(document.querySelectorAll('a.dropdown-item.active'))
        .find(a => a.textContent.trim().toLowerCase() === 'cliente');
    if (!activeProfile) return;

    setTimeout(function() {
        const satisfactionTab = Array.from(document.querySelectorAll('.nav-link[title]'))
            .find(tab => tab.title.trim().toLowerCase() === 'satisfação');
        if (satisfactionTab) {
            satisfactionTab.click();
        }
    }, 5); // Ajuste o tempo se necessário
});