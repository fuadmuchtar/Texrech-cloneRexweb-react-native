import { NewUser } from "@/app/types";
import { db } from "../config/mongodb";
import { z } from 'zod';
import { hashPassword } from "@/helpers/bcrypt";

const NewUserSchema = z.object({
    name: z.string(),
    username: z.string()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(20, { message: "Username must be at most 20 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, { message: "Password must be at least 5 characters long" })
})


export class UserModel {
    static collection() {
        return db.collection("users");
    }

    static async create(user: NewUser) {
        NewUserSchema.parse(user);

        const userExists = await this.collection().findOne({
            $or: [
                { email: { $regex: user.email, $options: 'i' } },
                { username: { $regex: user.username, $options: 'i' } }
            ]
        });
        if (userExists) {
            throw { status: 400, message: "User already exists" };
        }

        user.password = hashPassword(user.password);
        await this.collection().insertOne(user);
        return "User created successfully"
    }
}