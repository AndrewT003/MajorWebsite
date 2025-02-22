const { MongoClient } = require('mongodb');

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;

let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) return dbInstance;

    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Основне Успішне підключення до MongoDB');
        dbInstance = client.db(dbName);
        return dbInstance;
    } catch (error) {
        console.error('Помилка підключення до MongoDB:', error);
        throw error;
    }
}

module.exports = connectToDatabase;
