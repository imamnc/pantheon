FROM adhocore/phpfpm:8.3rc

LABEL maintainer="R&D Team ITPI Technology <contact@imamnc.com>"

# App directory name
ENV APP_DIRECTORY=pantheon

# Configure php extensions
RUN docker-php-ext-install sockets
# RUN docker-php-ext-install sockets \
#     && docker-php-ext-disable psr

# Install Software
RUN \
    # prepare alpine repository
    echo @legacy https://dl-cdn.alpinelinux.org/alpine/v3.12/community >> /etc/apk/repositories \
    # install
    && apk add -U --no-cache libssl1.1 \
    nano \
    vim \
    nodejs \
    npm \
    yarn \
    git \
    supervisor \
    # cleanup after installation
    && rm -rf /var/cache/apk/* /tmp/* /var/tmp/* /usr/share/doc/* /usr/share/man/*

# Rename html folder
RUN mv /var/www/html /var/www/${APP_DIRECTORY}

# Set default work directory
WORKDIR /var/www/${APP_DIRECTORY}

# Copy file
COPY --chown=www-data:www-data . .
RUN chown -R www-data:www-data /var/www/
USER www-data

# Composer install
RUN composer install
RUN composer dump-autoload

# Create .env file
RUN cp .env.example .env
RUN php artisan key:generate

# Install node dependencies (Need chokidar to run octane --watch)
RUN yarn

# Optimize and clearing project
RUN php artisan optimize:clear; \
    php artisan package:discover --ansi; \
    php artisan event:cache; \
    php artisan config:cache; \
    php artisan route:cache;

# Link storage
RUN php artisan storage:link

# Roadrunner Binary
RUN if composer show | grep spiral/roadrunner-cli >/dev/null; then \
    ./vendor/bin/rr get-binary; else \
    echo "spiral/roadrunner-cli package is not installed. exiting..."; exit 1; \
    fi

# Copy supervisor files
USER root
COPY docker/supervisor/octane.ini \
    docker/supervisor/inertia.ini \
    docker/supervisor/php-fpm.ini \
    /etc/supervisor.d/

# Expose ports (Octane, PHP-FPM, WebSockets, Inertia, Socketio)
EXPOSE 8000 9000 6001 5173 5174

# Start all registered config in supervisor
CMD ["supervisord", "-n", "-j", "/supervisord.pid"]
