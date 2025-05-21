import { db } from "../config/mongodb";

export class ProductModel {
    static collection() {
        return db.collection("products");
    }

    static async getAll() {
        return await this.collection().find().toArray();
    }

}