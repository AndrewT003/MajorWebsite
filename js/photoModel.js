class PhotoModel {
    constructor(db) {
        this.collection = db.collection('photos'); // Переконайтеся, що створюєте колекцію для фотографій
    }

    // Метод для оновлення порядку фото
    async updateOrder(newOrder) {
        const bulkOps = newOrder.map((photoId, index) => ({
            updateOne: {
                filter: { _id: new ObjectId(photoId) }, // використовуйте правильний фільтр
                update: { $set: { order: index } }, // встановлюємо новий порядок
            }
        }));

        // Перевірка наявності операцій
        if (bulkOps.length === 0) {
            throw new Error('No photos to update');
        }

        // Викликаємо bulkWrite на колекції
        try {
            const result = await this.collection.bulkWrite(bulkOps);
            return result;
        } catch (error) {
            throw new Error(`Error updating order: ${error.message}`);
        }
    }
}

module.exports = PhotoModel;
