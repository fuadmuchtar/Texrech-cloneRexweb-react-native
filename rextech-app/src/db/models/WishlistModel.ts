import { ObjectId } from "mongodb";
import { db } from "../config/mongodb";

export default class WishlistModel {
    static collection() {
        return db.collection("wishlists")
    }

    static async create(data: { userId: string, productId: string }) {
        const exist = await this.collection().
            findOneAndDelete(
                {
                    userId: new ObjectId(data.userId),
                    productId: new ObjectId(data.productId)
                }
            )
        if (exist) return "Product has been removed from wishlist"

        await this.collection().insertOne({
            userId: new ObjectId(data.userId),
            productId: new ObjectId(data.productId)
        })

        return "Added product to Wishlist"
    }

    static async getWishlistById(userId: string) {
        const wishlists = await this.collection().aggregate([
            {
                '$match': {
                    'userId': new ObjectId(userId)
                }
            }, {
                '$lookup': {
                    'from': 'products',
                    'localField': 'productId',
                    'foreignField': '_id',
                    'as': 'productDetail'
                }
            }, {
                '$unwind': {
                    'path': '$productDetail',
                    'preserveNullAndEmptyArrays': false
                }
            }
        ]).toArray()

        return wishlists
    }

}