"use client";

import errHandler from '@/helpers/errHandler';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function LoginModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (mode === "login") {
                const { email, password } = input
                const res = await fetch("http://localhost:3000/api/login", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                })
                if (!res.ok) throw await res.json()

                setInput({
                    name: "",
                    username: "",
                    email: "",
                    password: ""
                })
                window.location.href = "/"
            } else {
                const res = await fetch("http://localhost:3000/api/register", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(input)
                })
                if (!res.ok) throw await res.json()
                setInput({
                    name: "",
                    username: "",
                    email: "",
                    password: ""
                })
                window.location.href = "/"
                await new Promise(resolve => setTimeout(resolve, 5000))
                setMode("login")
            }
        } catch (error) {
            return errHandler(error)
        }
    };

    return (
        <>
            <Button variant="link"
                className="text-decoration-none fw-bold text-dark" onClick={handleShow}>
                LOGIN & REGISTER
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{mode === "login" ? "LOGIN" : "REGISTER"}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
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
                            <Button variant="dark" type='submit' className='rounded-pill' size="lg">
                                {mode === "login" ? "LOGIN" : "REGISTER"}
                            </Button>
                            <Button variant="dark" type='button' onClick={handleModeChange} className='rounded-pill' size="lg">
                                {mode === "login" ? "CREATE AN ACCOUNT" : "ALREADY HAS AN ACCOUNT"}
                            </Button>
                        </div>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
