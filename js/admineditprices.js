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
    
        const { category, price } = req.body;
    
        if (!category || !price) {
            return res.redirect('/admin/edit/price?message=Категорія та ціна повинні бути вказані');
        }
    
        try {
            const existingCategory = await priceModel.getPriceByCategory(category);
            if (existingCategory) {
                return res.redirect('/admin/edit/price?message=Категорія вже існує');
            }
    
            await priceModel.createCategoryWithPrice(category, price);
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

    app.post('/admin/edit/price', async (req, res) => {
        if (!req.session.isAuthenticated) {
            return res.redirect('/admin?message=Авторизуйтеся для доступу');
        }
    
        const { category, price } = req.body;
    
        if (!category || !price) {
            return res.redirect('/admin/edit/price?message=Категорія та ціна повинні бути вказані');
        }
    
        try {
            await priceModel.updatePriceByCategory(category, price);
            res.redirect('/admin/edit/price?message=Ціну оновлено успішно');
        } catch (error) {
            console.error('Помилка при оновленні ціни:', error);
            res.redirect('/admin/edit/price?message=Помилка сервера');
        }
    });


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
    
            // Малюємо заголовки колонок
            doc.fontSize(12).text('Категорія', startX, tableTop);
            doc.text('Ціна (грн)', startX + columnWidth, tableTop);
            doc.moveDown(0.5);
    
            // Лінія під заголовками
            doc.moveTo(startX, tableTop + 15)
               .lineTo(startX + columnWidth + 150, tableTop + 15)
               .stroke();
    
            // Додаємо рядки таблиці
            prices.forEach((price, index) => {
                const yPosition = tableTop + 20 + index * itemSpacing;
                doc.fontSize(10).text(price.category, startX, yPosition);
                doc.text(price.price.toString(), startX + columnWidth, yPosition);
            });
    
            doc.end();
    
            writeStream.on('finish', () => {
                res.download(filePath, fileName, (err) => {
                    if (err) {
                        console.error('Помилка завантаження PDF:', err);
                        res.status(500).send('<script>alert("Помилка створення PDF"); window.location.href="/prices";</script>');
                    }
    
                    fs.unlink(filePath, (unlinkErr) => {
                        if (unlinkErr) console.error('Помилка видалення тимчасового PDF:', unlinkErr);
                    });
                });
            });
        } catch (error) {
            console.error('Помилка створення PDF:', error);
            res.status(500).send(`<script>alert("Помилка: ${error.message}"); window.location.href="/prices";</script>`);
        }
    });
    
    
}
module.exports = EditAdmin;
