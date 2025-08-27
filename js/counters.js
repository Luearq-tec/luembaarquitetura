document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-number');
    const countersSection = document.querySelector('.testimonials-counters');

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        const increment = target / 2500; // Ajuste este valor para mudar a velocidade da animação

        let currentCount = 0;
        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = Math.ceil(currentCount);
            }
        }, 10);
    };

    const handleScroll = () => {
        const sectionPosition = countersSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight * 0.8 && !countersSection.hasAttribute('data-animated')) {
            countersSection.setAttribute('data-animated', 'true');
            counters.forEach(animateCounter);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
});