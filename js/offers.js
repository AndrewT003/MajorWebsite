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

    app.get('/INTERIOR_UPHOLSTERY', (req, res) => {
        res.render('PeretiazkaSalonu'); // Без розширення файлу
    });
    ShowPhoto(app);
}

function PeretiazkaKerma(app) {
    // Додаємо статичний доступ до папки uploads
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.get('/STEERING_WHEEL_UPHOLSTERY', (req, res) => {
        res.render('PeretiazkaKerma'); // Без розширення файлу
    });
    ShowPhoto(app);
}

function PeretiazkaSteli(app) {
    // Додаємо статичний доступ до папки uploads
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

    app.get('/CEILING_PILLARS_SUN_VISORS_UPHOLSTERY', (req, res) => {
        res.render('PeretiazkaSteli'); // Без розширення файлу
    });
    ShowPhoto(app);
}

function DoorCarts(app) {
    app.get('/DOOR_PANELS_UPHOLSTERY', (req, res) => {
        res.render('PeretiazkaDoors'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function InstalChohli(app) {
    app.get('/INSTALLATION_OF_CAR_COVERS', (req, res) => {
        res.render('InstalChohli'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function ChohliCreation(app) {
    app.get('/MANUFACTURING_OF_CUSTOM_CAR_COVERS', (req, res) => {
        res.render('ChohliCreation'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function TransmitionPeretiazka(app) {
    app.get('/GEAR_SHIFT_SELECTOR_UPHOLSTERY', (req, res) => {
        res.render('PeretiazkaKPP'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function RestavrationSeatsParalonu(app) {
    app.get('/SEAT_REPAIR_FOAM_RESTORATION', (req, res) => {
        res.render('RestavrationSeats'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function PeretiazkaPidlokitnikiv(app) {
    app.get('/UPHOLSTERY_OF_ARMRESTS_AND_OTHER_INTERIOR_ELEMENTS', (req, res) => {
        res.render('PeretiazkaPidlokitnikiv'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function RestavrationMebliv(app) {
    app.get('/FURNITURE_UPHOLSTERY', (req, res) => {
        res.render('RestavrationMebliv'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function EVACarpet(app) {
    app.get('/EVA_MATS_ORGANIZERS', (req, res) => {
        res.render('EVACarpet'); // Без розширення файлу
    });
    ShowPhoto(app);

}

function CreationNakidki(app) {
    app.get('/MANUFACTURING_OF_CAR_COVERS', (req, res) => {
        res.render('CreationNakidki'); // Без розширення файлу
    });
    ShowPhoto(app);

}

module.exports = { Peretiazka, DoorCarts, PeretiazkaKerma, PeretiazkaSteli,InstalChohli,ChohliCreation,TransmitionPeretiazka,
    RestavrationSeatsParalonu,PeretiazkaPidlokitnikiv,RestavrationMebliv,EVACarpet,CreationNakidki };
