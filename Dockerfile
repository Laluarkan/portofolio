FROM richarvey/nginx-php-fpm:1.7.2

# Set working directory
WORKDIR /var/www/html

# Copy composer.json and composer.lock first to leverage Docker cache
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader

# Copy package.json and package-lock.json for Node.js dependencies
COPY package.json package-lock.json ./
RUN npm install && npm run build

# Copy the rest of your application code
COPY . .

# Ensure storage and bootstrap/cache directories are writable
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Copy Nginx configuration
# Pastikan file nginx-site.conf ada di root proyek Anda
COPY nginx-site.conf /etc/nginx/sites-available/default.conf

# Expose port 80 for the web server
EXPOSE 80

# Command to run when the container starts
# Ini akan menjalankan script start.sh Anda
CMD ["/var/www/html/start.sh"]