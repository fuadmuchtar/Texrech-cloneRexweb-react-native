import { cookies } from "next/headers"
import errHandler from "./helpers/errHandler"
import { verifyWithJose } from "./helpers/jwt"
import { NextResponse } from "next/server"

export async function middleware(request: Request) {
  try {
    const cookieStore = await cookies()
    const authorization = cookieStore.get("Authorization")
    if (!authorization) throw { message: "Please login first", status: 401 }

    const [type, token] = authorization.value.split(" ")
    if (type !== "Bearer") throw { message: "Invalid token", status: 401 }

    const decoded = await verifyWithJose<{ userId: string, email: string }>(token)

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', decoded.userId)

    const response = NextResponse.next({
      request: {
        headers: requestHeaders
      }
    })

    return response
  } catch (error) {
    return errHandler(error)
  }
}

export const config = {
  matcher: ["/api/wishlists/:path*"],
}