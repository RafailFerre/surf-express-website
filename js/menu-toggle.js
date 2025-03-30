document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});
// Закрытие меню при клике вне его области
document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (!nav.contains(event.target) && navList.classList.contains('active')) {
        navList.classList.remove('active');
    }
});