import { db } from "../config/mongodb";

export class ProductModel {
    static collection() {
        return db.collection("products");
    }

    static async getAll({ page, name }: { page: string, name: string }) {
        const limit = 4
        const skip = limit * (+page - 1)

        const arrQueryName = name
            .trim().split(" ")
            .map((str) => ({ name: { $regex: str, $options: "i" } }))

        return await this.collection().find({
            $and: arrQueryName
        }).skip(skip).limit(limit).toArray()
    }

    static async getBySlug(slug: string) {
        return this.collection().findOne({ slug })
    }

}