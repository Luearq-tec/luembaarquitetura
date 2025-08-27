document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de filtro e os cartões de projeto
    const filterButtons = document.querySelectorAll('.tab-button');
    const projectCards = document.querySelectorAll('.project-card');

    // Adiciona um "ouvinte de evento" de clique a cada botão
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Gerencia a classe 'active' para destacar o botão clicado
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' apenas ao botão que foi clicado
            button.classList.add('active');

            // 2. Filtra e exibe os cartões de projeto
            // Obtém o valor do filtro do atributo 'data-filter' do botão
            const filterValue = button.getAttribute('data-filter');

            // Itera sobre todos os cartões de projeto
            projectCards.forEach(card => {
                // Obtém a categoria do cartão de projeto
                const cardCategory = card.getAttribute('data-category');

                // Verifica se o cartão deve ser exibido
                // Se o filtro for 'all' OU a categoria do cartão corresponder ao filtro
                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Se a categoria corresponder, mostra o cartão com um pequeno atraso
                    card.style.display = 'block';
                    // Um pequeno atraso para permitir que a transição de opacidade aconteça
                    setTimeout(() => card.style.opacity = '1', 50); 
                } else {
                    // Se a categoria não corresponder, esconde o cartão
                    card.style.opacity = '0'; 
                    // Remove o cartão do fluxo da página após a transição
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});