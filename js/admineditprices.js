const path = require('path');
const bcrypt = require('bcrypt');
const connectToDatabase = require('./database');
const multer = require('multer');
const { ObjectId } = require('mongodb');
const crypto = require('crypto');
const fs = require('fs');
const PriceModel = require('./priceModel');
const PDFDocument = require('pdfkit');

async function EditAdmin(app) {
    const db = await connectToDatabase();

    if (!db) {
        console.error('Не вдалося підключитися до бази даних');
        return;
    }

    const priceModel = new PriceModel(db);

    // Маршрут для відображення цін
    app.get('/prices', async (req, res) => {
        try {
            const pricesCollection = db.collection('prices');
            const prices = await pricesCollection.find().toArray(); // Отримати всі категорії та ціни
            res.render('prices', { prices }); // Рендеримо сторінку з передачею даних
        } catch (error) {
            console.error('Помилка при отриманні цін:', error);
            res.status(500).send('<script>alert("Помилка завантаження цін! Спробуйте ще раз."); window.location.href="/";</script>');
        }
    });

    // Маршрут для створення нової категорії
    app.post('/admin/edit/price/create', async (req, res) => {
        if (!req.session.isAuthenticated) {
            return res.redirect('/admin?message=Авторизуйтеся для доступу');
        }

        const { category, price, currency } = req.body;

        if (!category || !price || !currency) {
            return res.redirect('/admin/edit/price?message=Категорія, ціна та валюта повинні бути вказані');
        }

        try {
            const existingCategory = await priceModel.getPriceByCategory(category);
            if (existingCategory) {
                return res.redirect('/admin/edit/price?message=Категорія вже існує');
            }

            await priceModel.createCategoryWithPrice(category, price, currency);
            res.redirect('/admin/edit/price?message=Категорію створено успішно');
        } catch (error) {
            console.error('Помилка при створенні категорії:', error);
            res.redirect('/admin/edit/price?message=Помилка сервера');
        }
    });

    // Оновлений маршрут для відображення сторінки редагування цін
    app.get('/admin/edit/price', async (req, res) => {
        if (!req.session.isAuthenticated) {
            return res.redirect('/admin');
        }

        try {
            const prices = await priceModel.getAllPrices();
            res.render('editPrices', { prices }); // Шаблон editPrices
        } catch (error) {
            console.error('Помилка при отриманні цін:', error);
            res.status(500).send('Помилка сервера');
        }
    });

    // Оновлений маршрут для оновлення ціни та валюти через вибір категорії
    app.post('/admin/edit/price', async (req, res) => {
        if (!req.session.isAuthenticated) {
            return res.redirect('/admin?message=Авторизуйтеся для доступу');
        }

        const { category, price, currency } = req.body;

        if (!category || !price || !currency) {
            return res.redirect('/admin/edit/price?message=Категорія, ціна та валюта повинні бути вказані');
        }

        try {
            await priceModel.updatePriceByCategory(category, price, currency);
            res.redirect('/admin/edit/price?message=Ціну та валюту оновлено успішно');
        } catch (error) {
            console.error('Помилка при оновленні ціни:', error);
            res.redirect('/admin/edit/price?message=Помилка сервера');
        }
    });

    // Маршрут для видалення ціни
    app.post('/admin/edit/price/delete', async (req, res) => {
        const { category } = req.body;

        try {
            await priceModel.deletePriceByCategory(category);
            res.redirect('/admin/edit/price?message=Ціна успішно видалена');
        } catch (err) {
            res.redirect('/admin/edit/price?message=Помилка при видаленні ціни');
        }
    });

    // Маршрут для експортованої версії PDF
    app.get('/prices/export/pdf', async (req, res) => {
        try {
            const pricesCollection = db.collection('prices');
            const prices = await pricesCollection.find().toArray();

            const doc = new PDFDocument();

            // Визначаємо шлях до шрифту
            const fontPath = path.join(__dirname, 'fonts', 'ClearSans-Regular.ttf');

            // Перевіряємо, чи файл існує
            if (!fs.existsSync(fontPath)) {
                throw new Error(`Шрифт не знайдено за шляхом: ${fontPath}`);
            }

            // Підключаємо шрифт
            doc.font(fontPath);

            const fileName = 'prices.pdf';
            const filePath = path.join(__dirname, fileName);

            const writeStream = fs.createWriteStream(filePath);
            doc.pipe(writeStream);

            // Додаємо заголовок
            doc.fontSize(20).text('Ціни на послуги', { align: 'center' });
            doc.moveDown(2);

            // Малюємо таблицю
            const tableTop = 100;
            const itemSpacing = 25;
            const startX = 50;
            const columnWidth = 250;

            // Малюємо заголовок таблиці
            doc.fontSize(12).text('Категорія', startX, tableTop);
            doc.text('Ціна', startX + columnWidth, tableTop);
            doc.text('Валюта', startX + columnWidth * 2, tableTop);

            let currentY = tableTop + itemSpacing;

            // Виводимо кожен елемент ціни в таблицю
            prices.forEach((price) => {
                doc.text(price.category, startX, currentY);
                doc.text(price.price.toString(), startX + columnWidth, currentY);
                doc.text(price.currency, startX + columnWidth * 2, currentY);
                currentY += itemSpacing;
            });

            doc.end();

            writeStream.on('finish', () => {
                res.sendFile(filePath);
            });
        } catch (error) {
            console.error('Помилка при створенні PDF:', error);
            res.status(500).send('Помилка генерації PDF');
        }
    });
}

module.exports = EditAdmin;
