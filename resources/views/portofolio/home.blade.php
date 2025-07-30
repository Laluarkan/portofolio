<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio Lalu Naofal Arkan</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    @vite(['resources/css/portofolio/home.css'])
</head>

<body id="themeBody">
    <nav class="main-nav">
        <div class="container-custom">
            <a class="navbar-brand-custom" href="/">Portofolio Saya</a>
            <button class="navbar-toggler-custom" id="navbarNavToggler" type="button">
                ☰
            </button>
            <div class="nav-links-collapse" id="navbarNav">
                <ul class="navbar-nav-custom">
                    <li class="nav-item-custom">
                        <a class="nav-link-custom active-custom" aria-current="page" href="/">Beranda</a>
                    </li>
                    <li class="nav-item-custom">
                        <a class="nav-link-custom" href="/about">Tentang</a>
                    </li>
                    <li class="nav-item-custom">
                        <a class="nav-link-custom" href="/projects">Proyek</a>
                    </li>
                    <li class="nav-item-custom">
                        <a class="nav-link-custom" href="/contact">Kontak</a>
                    </li>
                    <li class="nav-item-custom theme-toggle-container">
                        <label class="theme-switch">
                            <input type="checkbox" id="themeToggleSwitch">
                            <span class="slider-switch"></span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="header-section-custom text-center-custom py-5-custom">
        <div class="container-custom">
            <h1 class="header-title-custom mb-3-custom">Halo, Saya Lalu Naofal Arkan</h1>
            <p class="header-lead-custom">{{ $title }}</p>
            <a href="/projects" class="btn-primary-custom mt-4-custom">Lihat Proyek Saya</a>
        </div>
    </header>

    <main class="main-content-custom container-custom my-5-custom p-4-custom shadow-sm-custom rounded-custom">
        <h2 class="content-title-custom mb-4-custom">Selamat Datang!</h2>
        <p class="content-paragraph-custom">Ini adalah halaman beranda portofolio saya. Jelajahi bagian-bagian lain untuk mengetahui lebih lanjut tentang saya dan proyek-proyek saya.</p>
    </main>

    <footer class="footer-custom text-center-custom">
        <div class="container-custom">
            <p>&copy; {{ date('Y') }} Lalu Naofal Arkan. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
    </footer>

    @vite(['resources/js/portofolio/home.js'])
</body>

</html>