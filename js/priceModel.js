const { ObjectId } = require('mongodb');

class PriceModel {
    constructor(db) {
        this.collection = db.collection('prices');
    }

    async getPriceByCategory(category) {
        return await this.collection.findOne({ category });
    }

    async updatePriceByCategory(category, price, currency) {
        return await this.collection.updateOne(
            { category },
            { $set: { price: parseFloat(price), currency, updatedAt: new Date() } },
            { upsert: true }
        );
    }

    async createCategoryWithPrice(category, price, currency) {
        return await this.collection.insertOne({
            category,
            price: parseFloat(price),
            currency,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    async getAllPrices() {
        return await this.collection.find().toArray();
    }

    // Метод для видалення ціни за категорією
    async deletePriceByCategory(category) {
        return await this.collection.deleteOne({ category });
    }
}

module.exports = PriceModel;
