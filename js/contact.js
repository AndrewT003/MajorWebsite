const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

// Налаштування для парсингу form-data
app.use(bodyParser.urlencoded({ extended: false }));

// Створення транспортера для nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // можна змінити на інший сервіс
    auth: {
        user: 'your-email@gmail.com', // ваш email
        pass: 'your-email-password'  // ваш пароль
    }
});

// Маршрут для обробки форми
app.post('/send-feedback', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'admin-email@example.com', // email адміністратора
        subject: `Новий запит від ${name}`,
        text: `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.json({ success: false });
        }
        console.log('Email sent: ' + info.response);
        return res.json({ success: true });
    });
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
