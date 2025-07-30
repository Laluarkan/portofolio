// resources/js/portofolio/contact.js

document.addEventListener('DOMContentLoaded', function () {
   console.log("DOMContentLoaded event fired."); // Log saat DOMContentLoaded

    // Mendapatkan elemen toggler dan navLinks
    const toggler = document.getElementById("navbarNavToggler");
    const navLinks = document.getElementById("navbarNav");

    // Menambahkan event listener untuk toggler navbar
    if (toggler && navLinks) {
        console.log("Navbar toggler and nav links found."); // Log jika elemen ditemukan
        toggler.addEventListener("click", function () {
            console.log("Navbar toggler clicked!"); // Log saat tombol diklik
            navLinks.classList.toggle("show");
            console.log("navLinks has 'show' class:", navLinks.classList.contains("show")); // Log status kelas 'show'
            // Mengatur atribut aria-expanded untuk aksesibilitas
            this.setAttribute(
                'aria-expanded',
                navLinks.classList.contains('show') ? 'true' : 'false'
            );
        });
    } else {
        console.log("Navbar toggler or nav links not found. Toggler:", toggler, "Nav Links:", navLinks); // Log jika elemen tidak ditemukan
    }

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
