document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.querySelector('.toggle-menu-button');
    const headerSiteMenu = document.querySelector('.header-site-menu');

    toggleMenuButton.addEventListener('click', function () {
        headerSiteMenu.classList.toggle('is-show');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
