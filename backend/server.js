const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Простой маршрут для теста
app.get('/', (req, res) => {
  res.json({ 
    message: 'Beauty Booking API is working!',
    version: '1.0.0',
    status: 'OK'
  });
});

// Маршрут для услуг
app.get('/api/services', (req, res) => {
  const services = [
    { id: 1, name: 'Стрижка', duration: 60, price: 1000 },
    { id: 2, name: 'Окрашивание', duration: 120, price: 2500 },
    { id: 3, name: 'Маникюр', duration: 90, price: 1500 },
    { id: 4, name: 'Педикюр', duration: 90, price: 1800 },
    { id: 5, name: 'Автозагар', duration: 45, price: 2000 }
  ];
  res.json({ success: true, data: services });
});

// Маршрут для мастеров
app.get('/api/masters', (req, res) => {
  const masters = [
    { id: 1, name: 'Анна', specialization: ['Стрижка', 'Окрашивание'], rating: 4.8 },
    { id: 2, name: 'Мария', specialization: ['Маникюр', 'Педикюр'], rating: 4.9 },
    { id: 3, name: 'Елена', specialization: ['Автозагар'], rating: 4.7 }
  ];
  res.json({ success: true, data: masters });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
  console.log(`📊 Check status: http://localhost:${port}/`);
  console.log(`💅 Services: http://localhost:${port}/api/services`);
  console.log(`👩‍💼 Masters: http://localhost:${port}/api/masters`);
});
