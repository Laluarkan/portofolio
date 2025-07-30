<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyek Saya - Portofolio</title>
    {{-- Hapus link Bootstrap CSS --}}
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> {{-- Font Awesome untuk ikon --}}
    @vite(['resources/css/portofolio/project.css'])
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
                        <a class="nav-link-custom" href="/about">Tentang</a>
                    </li>
                    <li class="nav-item-custom">
                        <a class="nav-link-custom active-custom" aria-current="page" href="/projects">Proyek</a>
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
        <h2 class="content-title-custom mb-4-custom">Proyek Portofolio</h2>

        <div class="row-custom"> 
            @foreach($projects as $project)
            <div class="col-custom col-md-2-custom col-lg-3-custom"> {{-- Ganti col, row-cols, g-4 Bootstrap --}}
                <div class="card-custom shadow-sm-custom"> {{-- Ganti card h-100 shadow-sm --}}
                    <img src="{{ $project['image'] }}" class="card-img-top-custom" alt="{{ $project['title'] }}"> {{-- Ganti card-img-top --}}
                    <div class="card-body-custom"> {{-- Ganti card-body --}}
                        <h5 class="card-title-custom">{{ $project['title'] }}</h5> {{-- Ganti card-title fw-semibold --}}
                        <p class="card-text-custom">{{ $project['description'] }}</p> {{-- Ganti card-text --}}
                        <a href="{{ $project['link'] }}" class="btn-primary-custom" target="_blank" rel="noopener noreferrer">Lihat Proyek &rarr;</a> {{-- Ganti btn btn-primary btn-sm --}}
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </main>

    <footer class="footer-custom">
        <div class="container-custom">
            <p>&copy; {{ date('Y') }} Lalu Naofal Arkan. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
    </footer>

    {{-- Hapus link Bootstrap JS --}}
    @vite(['resources/js/portofolio/project.js']) {{-- Gunakan JS kustom --}}
</body>
</html>