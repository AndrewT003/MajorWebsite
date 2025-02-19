// mailService.js
require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = function (app) {
    // Функція для відправки email
    async function sendEmail(name, email, phone) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: "kaktus12ta@gmail.com", // Можна додати логіку для перевірки email-адреси
            subject: "Нове повідомлення з сайту",
            text: `Ім'я: ${name}\nEmail: ${email}\nТелефон: ${phone}`,
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (error) {
            throw new Error(`Помилка при відправленні листа: ${error.message}`);
        }
    }

    // Загальна функція для обробки email та відповіді
    async function handleEmail(req, res, page) {
        const { name, email, phone } = req.body;

        try {
            await sendEmail(name, email, phone);
            if (!res.headersSent) {
                res.status(200).json({ message: "Повідомлення надіслано успішно! Скоро наш адміністратор зв'яжеться з вами" });
            }
        } catch (error) {
            console.error("Помилка при відправленні:", error);

            if (error.message.includes("Invalid recipient")) {
                // Обробка помилки з некоректним email
                if (!res.headersSent) {
                    res.status(400).json({ message: "Цей акаунт не існує або введена некоректна email-адреса." });
                }
            } else {
                // Інші помилки
                if (!res.headersSent) {
                    res.status(500).json({ message: "Помилка відправки повідомлення. Спробуйте пізніше." });
                }
            }
        }
    }

    app.post("/send-email", async (req, res) => {
        handleEmail(req, res, "/"); // редирект на сторінку контактів
    });
};
