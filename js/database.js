const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://AndrewT:0662869941ta@courseworkdb.k45ksmc.mongodb.net/';
const dbName = 'MajorSite';

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
