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
        res.render('PeretiazkaSalonu'); // Без розширення файлу
    });
    ShowPhoto(app);
}

function PeretiazkaKerma(app) {
    // Додаємо статичний доступ до папки uploads
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.get('/peretiazkaKerma', (req, res) => {
        res.render('PeretiazkaKerma'); // Без розширення файлу
    });
    ShowPhoto(app);
}

function PeretiazkaSteli(app) {
    // Додаємо статичний доступ до папки uploads
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.get('/peretiazkaSteli', (req, res) => {
        res.render('PeretiazkaSteli'); // Без розширення файлу
    });
    ShowPhoto(app);
}

function DoorCarts(app) {
    app.get('/peretiazkadoor', (req, res) => {
        res.render('PeretiazkaDoors'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function InstalChohli(app) {
    app.get('/instalChohli', (req, res) => {
        res.render('InstalChohli'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function ChohliCreation(app) {
    app.get('/chohliCreation', (req, res) => {
        res.render('ChohliCreation'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function TransmitionPeretiazka(app) {
    app.get('/transmitionPeretiazka', (req, res) => {
        res.render('PeretiazkaKPP'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function RestavrationSeatsParalonu(app) {
    app.get('/restavrationSeats', (req, res) => {
        res.render('RestavrationSeats'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function PeretiazkaPidlokitnikiv(app) {
    app.get('/peretiazkaPidlokitnikiv', (req, res) => {
        res.render('PeretiazkaPidlokitnikiv'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function RestavrationMebliv(app) {
    app.get('/restavrationMebliv', (req, res) => {
        res.render('RestavrationMebliv'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function EVACarpet(app) {
    app.get('/EVAcarpet', (req, res) => {
        res.render('EVACarpet'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function CreationNakidki(app) {
    app.get('/creationNakidki', (req, res) => {
        res.render('CreationNakidki'); // Без розширення файлу
    });
    ShowPhoto(app);

}

module.exports = { Peretiazka, DoorCarts, PeretiazkaKerma, PeretiazkaSteli,InstalChohli,ChohliCreation,TransmitionPeretiazka,
    RestavrationSeatsParalonu,PeretiazkaPidlokitnikiv,RestavrationMebliv,EVACarpet,CreationNakidki };
