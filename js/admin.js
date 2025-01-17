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
        res.sendFile(path.join(__dirname, '../public/html', 'admin.html'));
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
        res.sendFile(path.join(__dirname, '../public/html', 'admin.html'));
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
        res.sendFile(path.join(__dirname, '../public/html', 'edit.html'));
    });

    app.post('/admin/edit/add-photo', upload.single('photo'), async (req, res) => {
        const { category } = req.body;
        const photoBuffer = req.file ? req.file.buffer : null;
    
        if (!photoBuffer) {
            return res.status(400).send(`<script>alert('Помилка завантаження фото'); window.location.href='/admin';</script>`);
        }
    
        try {
            // Обчислення хешу файлу
            const fileHash = crypto.createHash('sha256').update(photoBuffer).digest('hex');
    
            // Перевірка наявності колекції категорії, створення якщо її немає
            const collectionExists = await db.listCollections({ name: category }).hasNext();
            if (!collectionExists) {
                await db.createCollection(category);
                console.log(`Колекцію ${category} створено`);
            }
    
            const collection = db.collection(category);
    
            // Перевірка наявності дублікату
            const duplicate = await collection.findOne({ hash: fileHash });
            if (duplicate) {
                return res.status(409).send(`<script>alert('Таке фото існує'); window.location.href='/admin';</script>`);
            }
    
            // Додаємо запис про фото з унікальним ID, хешем та буфером
            const photoData = {
                _id: new ObjectId(),
                buffer: photoBuffer,
                hash: fileHash,
                uploadDate: new Date()
            };
            await collection.insertOne(photoData);
    
            res.status(200).send(`<script>alert('Фото додано успішно'); window.location.href='/admin';</script>`);
        } catch (error) {
            console.error('Помилка при додаванні фото:', error);
            res.status(500).send(`<script>alert('Помилка сервера'); window.location.href='/admin';</script>`);
        }
    });

    app.post('/admin/edit/delete-photo', async (req, res) => {
        const { category, photoId } = req.body;
    
        // Перевірка наявності значень category і photoId
        if (!category || !photoId) {
            return res.status(400).send(`<script>alert('Категорія та ID фото повинні бути вказані'); window.location.href='/admin';</script>`);
        }
    
        try {
            const collection = db.collection(category);
            const photo = await collection.findOne({ _id: new ObjectId(photoId) });
    
            if (!photo) {
                return res.status(404).send(`<script>alert('Фото не знайдено'); window.location.href='/admin';</script>`);
            }
    
            // Видаляємо запис із колекції MongoDB
            await collection.deleteOne({ _id: new ObjectId(photoId) });
    
            res.status(200).send(`<script>alert('Фото видалено успішно'); window.location.href='/admin';</script>`);
        } catch (error) {
            console.error('Помилка при видаленні фото:', error);
            res.status(500).send(`<script>alert('Помилка серверу'); window.location.href='/admin';</script>`);
        }
    });
    


}

module.exports = Admin;
