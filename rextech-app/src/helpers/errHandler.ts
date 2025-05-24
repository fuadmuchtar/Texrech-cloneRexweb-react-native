import { customError } from "@/app/types"
import { Bounce, toast } from "react-toastify"
import { ZodError } from "zod"

export default function errHandler(payload: unknown) {
    const error = payload as customError
    let message = error.message || "Internal server error"
    let status = error.status || 500

    if (error instanceof ZodError) {
        message = error.issues[0].message
        status = 400
    }

    return Response.json(
        { message: message },
        { status: status }
    )
}