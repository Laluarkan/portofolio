// resources/js/portofolio/contact.js

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('themeToggleSwitch');
    const themeBody = document.getElementById('themeBody');
    const navbarToggler = document.getElementById('navbarNavToggler');
    const navCollapse = document.getElementById('navbarNav');

    // Inisialisasi tema dari localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeBody.classList.add('dark-theme');
        if (themeSwitch) themeSwitch.checked = true;
    } else {
        themeBody.classList.remove('dark-theme');
        if (themeSwitch) themeSwitch.checked = false;
    }

    // Event listener untuk switch tema
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function () {
            if (this.checked) {
                themeBody.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                themeBody.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Toggler navbar collapse
    if (navbarToggler && navCollapse) {
        navbarToggler.addEventListener('click', function () {
            navCollapse.classList.toggle('show');
            this.setAttribute(
                'aria-expanded',
                navCollapse.classList.contains('show') ? 'true' : 'false'
            );
        });
    }
});
