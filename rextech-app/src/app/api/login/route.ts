export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Simulate a login process

    } catch (error) {
        console.log(error)
    }

}