<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kontak Saya - Portofolio</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    @vite(['resources/css/portofolio/contact.css'])
</head>

<body id="themeBody">
    <nav class="main-nav">
        <div class="container-custom">
            <a class="navbar-brand-custom" href="/">Portofolio Saya</a>
            <button class="navbar-toggler-custom" id="navbarNavToggler" type="button">
                <span class="toggler-icon-custom"></span>
            </button>
            <div class="nav-links-collapse" id="navbarNav">
                <ul class="navbar-nav-custom">
                    <li class="nav-item-custom"><a class="nav-link-custom" href="/">Beranda</a></li>
                    <li class="nav-item-custom"><a class="nav-link-custom" href="/about">Tentang</a></li>
                    <li class="nav-item-custom"><a class="nav-link-custom" href="/projects">Proyek</a></li>
                    <li class="nav-item-custom"><a class="nav-link-custom active-custom" href="/contact">Kontak</a></li>
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

    <main class="container-custom my-5-custom">
        <div class="main-content-custom">
            <div class="rgb-content"> <!-- Perbaikan utama: pembungkus konten -->
                <h2 class="content-title-custom mb-4-custom">Hubungi Saya</h2>
                <p class="content-paragraph-custom mb-4-custom">
                    Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui formulir di bawah ini atau email langsung.
                </p>

                <form action="#" method="POST" class="mt-4-custom">
                    {{-- @csrf --}}
                    <div class="form-group-custom mb-3-custom">
                        <label for="name" class="form-label-custom">Nama:</label>
                        <input type="text" class="form-control-custom" id="name" name="name" required />
                    </div>
                    <div class="form-group-custom mb-3-custom">
                        <label for="email" class="form-label-custom">Email:</label>
                        <input type="email" class="form-control-custom" id="email" name="email" required />
                    </div>
                    <div class="form-group-custom mb-4-custom">
                        <label for="message" class="form-label-custom">Pesan:</label>
                        <textarea class="form-control-custom" id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn-success-custom">Kirim Pesan</button>
                </form>

                <p class="mt-4-custom email-instruction">
                    Atau kirim email ke:
                    <a href="mailto:lalunafaiqarkan21@gmail.com" class="text-accent-custom">lalunaufalarkan21@gmail.com</a>
                </p>
            </div>
        </div>
    </main>

    <footer class="footer-custom">
        <div class="container-custom">
            <p>&copy; {{ date('Y') }} Lalu Naofal Arkan. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
    </footer>

    @vite(['resources/js/portofolio/contact.js'])
</body>

</html>