<p align="center">
    <a href="https://itpi.co.id" target="_blank">
        <img src="https://itpi.co.id/wp-content/uploads/2020/07/ITPI-THEME-THUMBNAIL.jpg" width="250" alt="Logo">
    </a>
</p>


# About Patheon

Welcome! It's pantheon greetings for you. This is a starter framework for agora app. It's build on top of laravel framework using Inertia and React (Typescript). It's easy to develop, clean, and handy. Let's go create something big from this.

## How to use it on local ?

Clone this project

```bash
  git clone https://lab.itpi.co.id/research/pantheon.git
```

Go to the cloned project directory

```bash
  cd pantheon
```

Build docker images from this repository **(replace image_name with yours)**

```bash
  docker build -f docker/Dockerfile -t images_name:tag .
```

Run a container from created images directly using docker commands **(replace container_name & image_name with yours)**

```bash
  docker run -d --name container_name -p 8000:8000 -p 5173:5173 -p 5174:5174 images_name:tag
```

After your container created and running, you can visit this url : [http://localhost:8000](http://localhost:8000)

You can create container using created image directly with docker command above or use it with **Gordock Stack** for development on your local.

## Using on non-Docker environment

If you are on Windows, we recommend to install these first before cloning the project:

- Laragon (Latest version is recommended)
- PostgreSQL 15 or higher
- PHP 8.0 or higher (Note: If you use Laragon, there is no need to install a separate PHP)

Before cloning the project, here are the steps to prepare your working environment:

1. Install Laragon
2. Download the latest PHP [here](https://windows.php.net/downloads/releases/php-8.3.2-nts-Win32-vs16-x64.zip) (Note: Remember to download the Thread Safe PHP version!)
3. Extract the ZIP content to a new folder (example: php-8.3-stable), copy the folder created to the php binary path of laragon (by default: C:\laragon\bin\php;).
4. Switch PHP version by right clicking your laragon in system tray icon > PHP > version > select your latest php version
5. Start your laragon

After that, here is how to reproduce our environment

1. Open laragon terminal
2. Clone this project

```bash
  git clone https://lab.itpi.co.id/research/pantheon.git
```

3. Go to the cloned project directory

```bash
  cd pantheon
```
4. Run

```bash
composer install
npm install
```

5. After installing the dependencies, run
```bash
cp .env.example .env
php artisan key:generate
php artisan config:clear
php artisan cache:clear
php artisan route:clear
```

1. Edit your .env file according to your config (e.g DB_USERNAME, DB_PASSWORD, APP_URL, etc.)
2. Finally, run both of these commands in separate terminal
```bash
php artisan serve
npm run dev
```

And you're good to go! You can visit : [http://localhost:8000](http://localhost:8000), or by laragon default : [http://pantheon.test](http://pantheon.test)

# ROADMAP ✈️
Update and Change it if you have any ideas
## Apps
- [ ] Base Module (Master Data, etc)
- [ ] Storage Module (Which is for saving image or any file in this project)
- [ ] Vendor Management Module
- [ ] Procurement Management Module (Create PR until Tender)
- [ ] Contract Management Module
- [ ] Purchasing Order Module
- [ ] Invoice Module
- [ ] E-Catalog (If exists)

## Frontend
- [ ] Base Settings (Theme Color changing, Primary Secondary Color changing)
- [ ] Base Components (Button, Table, Cards, Modal, Etc)
- [ ] Base Forms (Input Text Field, Input Datetime, Radio, Select2, Input Currency Masking)
- [ ] Icons
- [ ] Charts
