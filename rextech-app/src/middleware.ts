export async function middleware() {
    console.log("Middleware is running");
}

export const config = {
  matcher: '/products/:path*',
}