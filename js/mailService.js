require("dotenv").config();
const nodemailer = require("nodemailer");
const emailValidator = require("email-validator");  // Бібліотека для перевірки формату email

module.exports = function (app) {
    // Функція для перевірки правильності формату email
    function validateEmailFormat(email) {
        return emailValidator.validate(email);  // Перевірка формату
    }

    // Функція для відправки email адміністратору
    async function sendEmailToAdmin(name, email, phone, question) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: "kaktus12ta@gmail.com",
            subject: "Нове повідомлення з сайту",
            text: `Ім'я: ${name}\nEmail: ${email}\nТелефон: ${phone}\nПитання: ${question || "Не вказано"}`,
        };

        await transporter.sendMail(mailOptions);
    }

    // Функція для відправки підтвердження користувачу
    async function sendConfirmationEmail(name, email) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Ваше повідомлення отримано",
            text: `Доброго дня, ${name}!\n\nДякуємо вам за питання. Наш адміністратор скоро зв'яжеться з вами.\n\nЗ повагою,\nМагазин АвтоМажор`,
        };

        await transporter.sendMail(mailOptions);
    }

    // Загальна функція для обробки email та відповіді
    async function handleEmail(req, res) {
        const { name, email, phone, question } = req.body;

        try {
            // Перевірка, чи email має коректний формат
            if (!validateEmailFormat(email)) {
                return res.status(400).json({ message: "Введено некоректну email-адресу." });
            }

            // Якщо email коректний, надсилаємо повідомлення адміністратору та підтвердження користувачу
            await sendEmailToAdmin(name, email, phone, question);
            await sendConfirmationEmail(name, email);

            res.status(200).json({ message: "Повідомлення надіслано успішно! Скоро наш адміністратор зв'яжеться з вами." });
        } catch (error) {
            console.error("Помилка при перевірці або відправленні:", error);
            res.status(500).json({ message: "Помилка відправки повідомлення. Спробуйте пізніше." });
        }
    }

    app.post("/send-email", async (req, res) => {
        handleEmail(req, res);
    });
};
