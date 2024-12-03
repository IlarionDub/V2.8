const cors = require('cors');
const jsonServer = require('json-server');
const express = require('express');

// Ініціалізація json-server
const app = express();
const router = jsonServer.router('db.json'); // Використовуємо db.json як джерело даних
const middlewares = jsonServer.defaults();  // Стандартні middlewares json-server

// Налаштування CORS
const corsOptions = {
    origin: ['https://ilariondub.github.io'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};

// Налаштування серверу
app.use(cors(corsOptions)); // Додаємо підтримку CORS
app.use(middlewares);       // Використовуємо стандартні middlewares json-server
app.use(express.json());    // Додаємо middleware для роботи з JSON
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' https://accounts.google.com; style-src 'self'; img-src 'self'");
    next();
});
// Налаштування маршруту
app.use('/api', router);    // Додаємо маршрутизатор на /api (замість /)

// Безпека
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self';");
    next();
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});