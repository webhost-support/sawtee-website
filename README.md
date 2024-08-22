
## About SAWTEE CMS

  <p align="center"><a href="https://laravel.com" target="_blank"><img src="https://ankursingh.com.np/assets/logo-sawtee.svg" width="400" alt="Laravel Logo"></a></p>

SAWTEE CMS is a custom content management system built using [Laravel](https://laravel.com/) and [Inertia](https://inertiajs.com/) to suit the needs of [SAWTEE](https://sawtee.org).

The app has two parts, a [backend](https://ankursingh.com.np/admin) necessary to manage content for the website and a [frontend](https://ankursingh.com.np)(website).


# Setup local development

These are the steps required to setup the local development.

This is a Laravel application. That means it requires this setup:

- PHP 8.1 or newer
- HTTP server with PHP support (eg: Apache, Nginx, Caddy)
- Composer
- MySQL


You can find more details on the [Laravel documentation website](https://laravel.com/docs/master/installation).

Here are the steps that we suggest you to follow:

1. Install PHP and a web server like Nginx. If you are on macOS, or linux we recommend [Valet](https://laravel.com/docs/9.x/valet) or [Linux Valet](https://cpriego.github.io/valet-linux/) and [Linux Valet Plus](https://valetlinux.plus/).
2. Install MySQL.
3. Clone the repo into your local machine

```bash
git clone https://github.com/SAWTEE/sawtee-website.git && cd sawtee-website
```

4. install composer dependencies

```bash
# inside the projects root folder 
composer install --no-progress --no-interaction --prefer-dist --optimize-autoloader
```

5. install node dependencies

```bash
# using npm, pnpm or yarn
npm install
```

6. generate and configure `.env` file
	1. `cp .env.example .env`
    2. `php artisan key:generate --no-interaction` (generates APP_KEY)
8. run database migrations `php artisan migrate --force`
9. generate dummy data
    1. `php artisan db:seed`
10. `npm run build` to generate the proper JS and CSS files
11. `npm run dev` and head to your browser and enter http://localhost:3000 for the frontend and http://localhost:3000/admin for backend.

## License

The project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
