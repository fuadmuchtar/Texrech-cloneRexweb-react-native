import { ProductModel } from "@/db/models/ProductModel";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get("page") || "1"
    const name = searchParams.get("name") || ""
    const products = await ProductModel.getAll({ page, name });
    return Response.json(products);
}