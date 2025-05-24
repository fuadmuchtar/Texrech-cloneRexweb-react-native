import WishlistModel from "@/db/models/WishlistModel";
import errHandler from "@/helpers/errHandler";

export async function GET(request: Request) {
    try {
        const userId = request.headers.get("x-user-id")
        if (!userId) throw { message: "User ID is required", status: 400 }

        const wishlist = await WishlistModel.getWishlistById(userId)

        return Response.json(wishlist)
    } catch (error) {
        return errHandler(error)
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { productId } = body

        if (!productId) throw { message: "Product Id is required", status: 400 }

        const userId = request.headers.get("x-user-id")
        if (!userId) throw { message: "User ID is required", status: 400 }

        const result = await WishlistModel.create({
            userId,
            productId
        })

        return Response.json(
            { message: result },
            { status: 201 }
        )
    } catch (error) {
        return errHandler(error)
    }
}