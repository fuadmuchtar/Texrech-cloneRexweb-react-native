"use server"

import { cookies } from "next/headers"

export const getCookie = async (name: string) => {
    const cookieStore = await cookies()
    const authorization = cookieStore.get(name)
    return authorization
}
