import UserModel from "@/db/models/UserModel";
import { comparePassword } from "@/helpers/bcrypt";
import errHandler from "@/helpers/errHandler";
import { generateToken } from "@/helpers/jwt";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            throw {
                message: "Email and password are required",
                status: 400
            }
        }

        const user = await UserModel.findByEmail(email)
        if (!user) throw { message: "User not found", status: 404 }

        const isValid = comparePassword(password, user.password)
        if (!isValid) throw { message: "Email or password is invalid", status: 401 }

        const token = generateToken({
            userId: user._id.toString(),
            email: user.email
        })

        const cookieStore = await cookies()
        cookieStore.set("Authorization", `Bearer ${token}`)

        return Response.json({
            accessToken: token
        })
    } catch (error) {
        return errHandler(error);
    }

}