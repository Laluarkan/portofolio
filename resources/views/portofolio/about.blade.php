<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tentang Saya - Portofolio</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    @vite(['resources/css/portofolio/about.css'])
</head>

<body id="themeBody">
    <nav class="main-nav">
        <div class="container-custom">
            <a class="navbar-brand-custom" href="/">Portofolio Saya</a>
            <button class="navbar-toggler-custom" id="navbarNavToggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon-custom"></span>
            </button>
            <div class="nav-links-collapse" id="navbarNav">
                <ul class="navbar-nav-custom">
                    <li class="nav-item-custom">
                        <a class="nav-link-custom" href="/">Beranda</a>
                    </li>
                    <li class="nav-item-custom">
                        <a class="nav-link-custom active-custom" aria-current="page" href="/about">Tentang</a>
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

    <main class="container-custom my-5-custom p-4-custom main-content-custom shadow-sm-custom rounded-custom">
        <h2 class="content-title-custom mb-4-custom">Tentang Saya</h2>
        <p class="content-paragraph-custom mb-3-custom">
            Halo! Saya Lalu Naofal Arkan, mahasiswa Teknik Elektro dengan fokus pada bidang Teknik Komputer di Universitas Mataram. Saya memiliki ketertarikan besar dalam pengembangan web serta desain antarmuka pengguna (UI/UX) yang fungsional dan estetis.
        </p>
        <p class="content-paragraph-custom mb-4-custom">
            Saat ini, saya sedang aktif mempelajari berbagai teknologi web seperti PHP, Laravel, JavaScript, HTML, CSS, dan manajemen database. Saya senang mengeksplorasi cara-cara baru untuk menciptakan solusi digital yang sederhana namun berdampak.
        </p>

        <h3 class="sub-title-custom mb-3-custom">Keterampilan</h3>
        <ul class="list-group-custom">
            @foreach($skills as $skill)
            <li class="list-group-item-custom">{{ $skill }}</li>
            @endforeach
        </ul>
    </main>

    <footer class="footer-custom">
        <div class="container-custom">
            <p>&copy; {{ date('Y') }} Lalu Naofal Arkan. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
    </footer>

    @vite(['resources/js/portofolio/about.js']) {{-- Gunakan JS kustom --}}
</body>

</html>