import { ProductModel } from "@/db/models/ProductModel";
import errHandler from "@/helpers/errHandler";

export async function GET() {
    try {

        const featuredProducts = await ProductModel.getFeaturedProduct()

        return Response.json(featuredProducts)
    } catch (error) {
        return errHandler(error)
    }
}