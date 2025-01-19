const path = require('path');
const bcrypt = require('bcrypt');
const connectToDatabase = require('./database');
const multer = require('multer');
const { ObjectId } = require('mongodb');
const crypto = require('crypto');
const fs = require('fs');

const storage = multer.memoryStorage(); // Зберігає файл у пам'яті
const upload = multer({ storage });

// Функція для обчислення хешу файлу
function calculateFileHash(filePath) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(filePath);
        stream.on('data', (data) => hash.update(data));
        stream.on('end', () => resolve(hash.digest('hex')));
        stream.on('error', reject);
    });
}

async function Admin(app) {
    const db = await connectToDatabase();

    if (!db) {
        console.error('Не вдалося підключитися до бази даних');
        return;
    }

    const adminsCollection = db.collection('admins');

    // Маршрут для реєстрації
    app.get('/admin/register', (req, res) => {
        res.render('admin'); // Без розширення файлу
    });

    app.post('/admin/register', async (req, res) => {
        const { login, password } = req.body;

        const existingAdmin = await adminsCollection.findOne({ login });
        if (existingAdmin) {
            return res.send(`<script>alert('Адміністратор із таким логіном уже існує.'); window.location.href='/admin/register';</script>`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = {
            login,
            password: hashedPassword,
            role: 'admin',
            permissions: ['edit_content', 'manage_users', 'view_reports'],
            createdAt: new Date()
        };

        await adminsCollection.insertOne(newAdmin);
        res.redirect('/admin');
    });

    // Маршрут для авторизації
    app.get('/admin', (req, res) => {
        res.render('admin'); // Без розширення файлу
    });

    app.post('/admin', async (req, res) => {
        const { login, password } = req.body;
        const admin = await adminsCollection.findOne({ login });
        if (!admin) {
            return res.send(`<script>alert('Неправильний логін або пароль'); window.location.href='/admin';</script>`);
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.send(`<script>alert('Неправильний логін або пароль'); window.location.href='/admin';</script>`);
        }

        req.session.isAuthenticated = true;
        req.session.user = { login: admin.login, role: admin.role };
        res.redirect('/admin/edit');
    });

    // Захищений маршрут для редагування
    app.get('/admin/edit', (req, res) => {
        if (!req.session.isAuthenticated) {
            return res.redirect('/admin');
        }
        res.render('edit'); // Без розширення файлу
    });

    // Маршрут для отримання фото по категорії
    app.get('/admin/edit/photos', async (req, res) => {
        const { category } = req.query;

        if (!category) {
            return res.status(400).send({ success: false, message: 'Категорія не вказана' });
        }

        try {
            const collection = db.collection(category);
            const photos = await collection.find().toArray();
            res.json(photos);
        } catch (error) {
            console.error('Помилка при отриманні фото:', error);
            res.status(500).send({ success: false, message: 'Помилка сервера' });
        }
    });

    // Маршрут для додавання фото
    app.post('/admin/edit/add-photo', upload.single('photo'), async (req, res) => {
        const { category } = req.body;
        const photoBuffer = req.file ? req.file.buffer : null;
    
        if (!req.session.isAuthenticated) {
            return res.status(401).send(`<script>alert('Авторизуйтеся для доступу'); window.location.href='/admin';</script>`);
        }
    
        if (!photoBuffer) {
            return res.status(400).send(`<script>alert('Помилка завантаження фото'); window.location.href='/admin/edit';</script>`);
        }
    
        try {
            const fileHash = crypto.createHash('sha256').update(photoBuffer).digest('hex');
            const collectionExists = await db.listCollections({ name: category }).hasNext();
    
            if (!collectionExists) {
                await db.createCollection(category);
                console.log(`Колекцію ${category} створено`);
            }
    
            const collection = db.collection(category);
            const duplicate = await collection.findOne({ hash: fileHash });
    
            if (duplicate) {
                return res.status(409).send(`<script>alert('Таке фото вже існує'); window.location.href='/admin/edit';</script>`);
            }
    
            const photoData = {
                _id: new ObjectId(),
                buffer: photoBuffer,
                hash: fileHash,
                uploadDate: new Date(),
            };
    
            await collection.insertOne(photoData);
    
            res.status(200).send(`<script>alert('Фото додано успішно'); window.location.href='/admin/edit';</script>`);
        } catch (error) {
            console.error('Помилка при додаванні фото:', error);
            res.status(500).send(`<script>alert('Помилка сервера'); window.location.href='/admin/edit';</script>`);
        }
    });

    // Маршрут для видалення фото
    app.post('/admin/edit/delete-photo', async (req, res) => {
        const { category, photoId } = req.body;
    
        if (!req.session.isAuthenticated) {
            return res.status(401).send(`<script>alert('Авторизуйтеся для доступу'); window.location.href='/admin';</script>`);
        }
    
        if (!category || !photoId) {
            return res.status(400).send(`<script>alert('Категорія та ID фото повинні бути вказані'); window.location.href='/admin/edit';</script>`);
        }
    
        try {
            const collection = db.collection(category);
            const photo = await collection.findOne({ _id: new ObjectId(photoId) });
    
            if (!photo) {
                return res.status(404).send(`<script>alert('Фото не знайдено'); window.location.href='/admin/edit';</script>`);
            }
    
            await collection.deleteOne({ _id: new ObjectId(photoId) });
    
            res.status(200).send(`<script>alert('Фото видалено успішно'); window.location.href='/admin/edit';</script>`);
        } catch (error) {
            console.error('Помилка при видаленні фото:', error);
            res.status(500).send(`<script>alert('Помилка сервера'); window.location.href='/admin/edit';</script>`);
        }
    });
}

module.exports = Admin;
