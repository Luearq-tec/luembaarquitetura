document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.tab-button');
    const projectCards = document.querySelectorAll('.project-card');

    const applyFilter = (filterValue) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.tab-button[data-filter="${filterValue}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            applyFilter(filterValue);
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const urlFilter = urlParams.get('filtro');

    if (urlFilter) {
        applyFilter(urlFilter);
    } else {
        applyFilter('all');
    }
});