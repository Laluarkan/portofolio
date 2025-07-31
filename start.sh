#!/usr/bin/env bash

echo "Running composer install..."
# Composer install sudah dilakukan di Dockerfile, tapi tidak ada salahnya di sini juga jika ada perubahan
composer install --no-dev --optimize-autoloader

echo "Optimizing Laravel..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
# php artisan event:cache # Opsional jika Anda menggunakan event caching

echo "Running migrations..."
php artisan migrate --force

# Run any seeders if necessary (hati-hati di produksi)
# echo "Running seeders..."
# php artisan db:seed --force

echo "Starting Nginx and PHP-FPM..."
# Ini adalah perintah yang akan memulai web server dan PHP-FPM
# Pastikan ini sesuai dengan cara image Docker Anda memulai layanan
/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf