import { NewUser } from "@/app/types";
import UserModel from "@/db/models/UserModel";
import errHandler from "@/helpers/errHandler";

export async function POST(request: Request) {
    try {
        const body: NewUser = await request.json();
        const result = await UserModel.create(body);

        return Response.json({ message: result }, { status: 201 });
    } catch (error) {
        return errHandler(error)
    }
}