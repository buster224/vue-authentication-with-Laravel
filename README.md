# Vue 3 Authentication with Laravel Breeze API 

Vue authentication project with Laravel.


## Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Compile and Minify for Production
```sh
npm run build
```


## Laravel Breeze API
First, create a Vue.js compatible Laravel backend by installing Laravel Breeze into a fresh Laravel application and installing Breeze's API scaffolding:
```sh
# Create the Laravel application...
laravel new laravel-backend
cd laravel-backend

# Install Breeze and dependencies...
composer require laravel/breeze
php artisan breeze:install api
```

Ensure that your application's APP_URL and FRONTEND_URL environment variables are set to :
```
APP_URL=http://localhost:8000 
FRONTEND_URL=http://localhost:3000 
```
After defining the appropriate environment variables, you may serve the Laravel application using the serve Artisan command:
``` sh
# Serve the application...
php artisan serve
```

