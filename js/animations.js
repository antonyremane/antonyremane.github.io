document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate');

    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });

    window.addEventListener('scroll', () => {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('slide-up');
            }
        });
    });
});