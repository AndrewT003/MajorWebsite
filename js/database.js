const { MongoClient } = require('mongodb');

// URL до локальної MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'MajorSite';

async function connectToDatabase() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Успішне підключення до локальної MongoDB');

        const db = client.db(dbName);
        return db; // Повертає об'єкт бази даних
    } catch (error) {
        console.error('Помилка підключення до MongoDB:', error);
        return null; // Повертає null у разі помилки
    }
}

module.exports = connectToDatabase;
