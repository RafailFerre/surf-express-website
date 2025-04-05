// Анимация появления
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.about-hero-content');
    
    setTimeout(() => {
        heroContent.classList.add('visible');
    }, 100);
    
    // Анимация при скролле
    window.addEventListener('scroll', function() {
        const heroPosition = heroContent.getBoundingClientRect();
        const screenPosition = window.innerHeight / 1.3;
        
        if(heroPosition.top < screenPosition) {
            heroContent.classList.add('scroll-in');
            heroContent.classList.remove('scroll-out');
        } else {
            heroContent.classList.add('scroll-out');
            heroContent.classList.remove('scroll-in');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.querySelector('.about-container');
    const aboutBlock = document.querySelector('.about-content-block');
    
    setTimeout(() => {
        aboutContainer.classList.add('visible');
    }, 100);
    
    setTimeout(() => {
        aboutBlock.classList.add('visible');
    }, 300); // Задержка для последовательной анимации
});

// Инициализация AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: true
    });
});

