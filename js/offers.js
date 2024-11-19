const path = require('path');
const { MongoClient } = require('mongodb');
const express = require('express');

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'MajorSite';
const client = new MongoClient(dbUrl);

async function fetchPhotos(category) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(category);
        return await collection.find().toArray();
    } finally {
        await client.close();
    }
}

function ShowPhoto(app){
    app.get('/api/photos/:category', async (req, res) => {
        const category = req.params.category;
        try {
            const photos = await fetchPhotos(category);
            res.json(photos);
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

module.exports = { Peretiazka };


function DoorCarts(app) {
    app.get('/doorcarts', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html', 'DoorCarts.html')); // Замініть на потрібний HTML-файл
    });
}

module.exports = { Peretiazka, DoorCarts };
