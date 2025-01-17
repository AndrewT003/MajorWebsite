const path = require('path');
const express = require('express');
const connectToDatabase = require('./database'); // Імпортуємо connectToDatabase

async function fetchPhotos(category) {
    const db = await connectToDatabase(); // Підключення до бази даних через connectToDatabase
    if (!db) {
        throw new Error('Неможливо підключитись до бази даних');
    }

    try {
        const collection = db.collection(category); // Отримуємо колекцію за категорією
        return await collection.find().toArray(); // Повертаємо всі записи
    } catch (error) {
        console.error('Помилка запиту до бази даних:', error);
        throw error;
    }
}

function ShowPhoto(app) {
    app.get('/api/photos/:category', async (req, res) => {
        const category = req.params.category; // Отримуємо категорію з параметра
        try {
            const photos = await fetchPhotos(category);
            res.json(photos); // Відправляємо фото клієнту
        } catch (error) {
            console.error('Помилка отримання фото:', error);
            res.status(500).send('Помилка сервера');
        }
    });
}

function Peretiazka(app) {
    // Додаємо статичний доступ до папки uploads
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.get('/peretiazka', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html', 'PeretiazkaSalonu.html'));
    });
    ShowPhoto(app);
}

function PeretiazkaKerma(app) {
    // Додаємо статичний доступ до папки uploads
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.get('/peretiazkaKerma', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html', 'PeretiazkaKerma.html'));
    });
    ShowPhoto(app);
}

function PeretiazkaSteli(app) {
    // Додаємо статичний доступ до папки uploads
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.get('/peretiazkaSteli', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html', 'PeretiazkaSteli.html'));
    });
    ShowPhoto(app);
}

function DoorCarts(app) {
    app.get('/peretiazkadoor', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html', 'PeretiazkaDoors.html')); // Замініть на потрібний HTML-файл
    });
}


module.exports = { Peretiazka, DoorCarts, PeretiazkaKerma, PeretiazkaSteli };
