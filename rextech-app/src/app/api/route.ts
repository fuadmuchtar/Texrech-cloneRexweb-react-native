import WishlistModel from "@/db/models/WishlistModel";
import errHandler from "@/helpers/errHandler";

export async function GET(request: Request) {
    try {
        const userId = request.headers.get("x-user-id")
        if (!userId) throw { message: "User ID is required", status: 400 }

        const wishlists = await WishlistModel.getWishlistById(userId)

        return Response.json(wishlists)
    } catch (error) {
        return errHandler(error)
    }
}