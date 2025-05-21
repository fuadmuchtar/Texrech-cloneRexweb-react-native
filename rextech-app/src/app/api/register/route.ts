import { NewUser } from "@/app/types";
import { UserModel } from "@/db/models/UserModel";

export async function POST(request: Request) {
    try {
        const body: NewUser = await request.json();
        const result = await UserModel.create(body);

        console.log('masuk ke route register', body)
        return Response.json({ message: result }, { status: 201 });
    } catch (error) {
        console.log(error)
    }
}