const { ObjectId } = require('mongodb');

class PriceModel {
    constructor(db) {
        this.collection = db.collection('prices');
    }

    async getPriceByCategory(category) {
        return await this.collection.findOne({ category });
    }

    async updatePriceByCategory(category, price) {
        return await this.collection.updateOne(
            { category },
            { $set: { price, updatedAt: new Date() } },
            { upsert: true }
        );
    }

    async createCategoryWithPrice(category, price) {
        return await this.collection.insertOne({
            category,
            price: parseFloat(price),
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    async getAllPrices() {
        return await this.collection.find().toArray();
    }
}

module.exports = PriceModel;
