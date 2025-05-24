import { ProductModel } from "@/db/models/ProductModel";
import errHandler from "@/helpers/errHandler";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params
        const product = await ProductModel.getBySlug(slug)

        if (!product) throw { status: 404, messsage: "Product Not Found" }
        return Response.json(product)
    } catch (error) {
        return errHandler(error)
    }
}