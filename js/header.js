document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const content = document.querySelector('.content-overlay');
    const logoImg = document.querySelector('.logo img');
    const logoText = document.querySelector('.logo-text');
    
    // Устанавливаем начальный отступ для контента
    content.style.paddingTop = header.offsetHeight + 'px';
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.height = '80px'; // Уменьшаем высоту хедера
            content.style.paddingTop = '80px'; // Уменьшаем отступ контента
            logoImg.style.height = '50px';
            logoText.style.fontSize = '1.5rem';
        } else {
            header.classList.remove('scrolled');
            header.style.height = '100px'; // Возвращаем исходную высоту
            content.style.paddingTop = '100px';
            logoImg.style.height = '70px';
            logoText.style.fontSize = '3.5rem';
        }
    });
});