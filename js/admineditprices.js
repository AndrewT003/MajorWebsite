const path = require('path');
const bcrypt = require('bcrypt');
const connectToDatabase = require('./database');
const multer = require('multer');
const { ObjectId } = require('mongodb');
const PriceModel = require('./priceModel');
const PDFDocument = require('pdfkit');
const fs = require('fs');

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

    const PDFDocument = require('pdfkit');
    const fs = require('fs');
    
    app.get('/prices/export/pdf', async (req, res) => {
        try {
            const pricesCollection = db.collection('prices');
            const prices = await pricesCollection.find().toArray();
    
            const doc = new PDFDocument({ size: 'A4', margins: { top: 50, bottom: 50, left: 50, right: 50 } });
    
            const fontPath = path.join(__dirname, '../public/fonts', 'ClearSans-Regular.ttf');
            if (!fs.existsSync(fontPath)) throw new Error(`Шрифт не знайдено: ${fontPath}`);
    
            const logoPath = path.join(__dirname, '../public/img', 'MajorLogo.png');
            if (!fs.existsSync(logoPath)) throw new Error(`Логотип не знайдено: ${logoPath}`);
    
            doc.font(fontPath);
    
            const fileName = 'prices.pdf';
            const filePath = path.join(__dirname, fileName);
            const writeStream = fs.createWriteStream(filePath);
            doc.pipe(writeStream);
    
            // Додаємо логотип
            const pageWidth = doc.page.width;
            const logoWidth = 120;
            const logoHeight = 120;
            const logoY = 0;
            doc.image(logoPath, (pageWidth - logoWidth) / 2, logoY, { width: logoWidth, height: logoHeight }).moveDown(4);
    
            // Відступ після логотипа перед текстом
            const textStartY = logoY + logoHeight + 120;
    
            // Додаємо текст "АвтоМажор" під логотипом
            doc.fontSize(18).text('АвтоМажор', { align: 'center' }).moveDown(1);
    
            // Заголовок документа
            doc.fontSize(16).text('Ціни на послуги', { align: 'center' }).moveDown(1);
    
            // Менший відступ до таблиці
            doc.moveDown(0.5);
    
            // Ширина колонок (загальна ширина таблиці)
            const colWidth = [240, 80, 80];
            const tableWidth = colWidth.reduce((acc, w) => acc + w, 0);
    
            // Визначаємо X-координату для центрування таблиці
            const startX = (pageWidth - tableWidth) / 2;
    
            // Початкова Y-координата
            let currentY = doc.y;
    
            // Заголовок таблиці (фон)
            doc.rect(startX, currentY, tableWidth, 30).fill('white').stroke();
            doc.fillColor('black').fontSize(12)
                .text('Категорія', startX + 5, currentY + 8, { width: colWidth[0] - 10, align: 'left' })
                .text('Ціна', startX + colWidth[0] + 5, currentY + 8, { width: colWidth[1], align: 'center' })
                .text('Валюта', startX + colWidth[0] + colWidth[1] + 5, currentY + 8, { width: colWidth[2], align: 'center' });
    
            currentY += 30;
    
            // Виводимо елементи таблиці
            prices.forEach(price => {
                const categoryText = price.category;
                const priceText = price.price.toString();
                const currencyText = price.currency;
    
                const categoryHeight = doc.heightOfString(categoryText, { width: colWidth[0] - 10 });
                const rowHeightDynamic = Math.max(categoryHeight + 16, 30);
    
                if (currentY + rowHeightDynamic > doc.page.height - 50) {
                    doc.addPage();
                    currentY = 50;
                }
    
                doc.rect(startX, currentY, tableWidth, rowHeightDynamic).stroke();
    
                doc.text(categoryText, startX + 5, currentY + 8, { width: colWidth[0] - 10 });
                doc.text(priceText, startX + colWidth[0] + 5, currentY + 8, { width: colWidth[1], align: 'center' });
                doc.text(currencyText, startX + colWidth[0] + colWidth[1] + 5, currentY + 8, { width: colWidth[2], align: 'center' });
    
                currentY += rowHeightDynamic;
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
