// errorHandler.js

const path = require('path');

// Обробник для неправильних маршрутів (404)
function notFound(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, 'errorPage.html')); // Відправляємо сторінку помилки
}

// Загальний обробник помилок
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Логування помилок
  res.status(500).send('Щось пішло не так!');
}

module.exports = {
  notFound,
  errorHandler,
};
