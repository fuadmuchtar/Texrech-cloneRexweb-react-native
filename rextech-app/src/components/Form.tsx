import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormComponent() {
    const [mode, setMode] = useState("login");
    const [input, setInput] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const handleModeChange = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        mode === "login" ? setMode("register") : setMode("login");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (mode === "login") {

        } else {

        }
    };

    return (
        <>
            <div className=" border-bottom-1">
                <p className="fw-bold fs-5 text-center" style={{ borderBottom: "1 px solid" }}>{mode === "login" ? "LOGIN" : "REGISTER"}</p>
                <hr className='mb-5' />
            </div>
            <Form onSubmit={handleSubmit} className='animate__fadeInDown animate__animated'>
                {mode === "register" && (
                    <>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control size='lg' type="text" name="name" placeholder="Name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control size='lg' type="text" name="username" placeholder="Username" onChange={handleChange} />
                        </Form.Group>
                    </>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control size='lg' type="email" name="email" placeholder="Email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="password" name="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="dark" className='rounded-pill' size="lg">
                        {mode === "login" ? "LOGIN" : "REGISTER"}
                    </Button>
                    <Button variant="dark" onClick={handleModeChange} className='rounded-pill' size="lg">
                        {mode === "login" ? "CREATE AN ACCOUNT" : "ALREADY HAS AN ACCOUNT"}
                    </Button>
                </div>
            </Form>
        </>

    );
}
