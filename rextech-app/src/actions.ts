"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const isLoggedIn = async () => {
    const cookieStore = await cookies()
    const exist = cookieStore.get("Authorization")?.value
    if (exist) {
        return true
    } else {
        return false
    }
}

export const handleLogout = async () => {
    const cookieStore = await cookies()
    cookieStore.delete("Authorization")
    redirect("/")
}
