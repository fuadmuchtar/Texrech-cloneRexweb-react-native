import { MouseEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormComponent() {
    const [mode, setMode] = useState("login");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleModeChange = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        mode === "login" ? setMode("register") : setMode("login");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (mode === "login") {
            console.log("Login", { email, password });
        } else {
            console.log("Register", { name, username, email, password });
        }
    };

    return (
        <Form onSubmit={handleSubmit} className='animate__fadeIn'>
            {mode === "register" && (
                <>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} placeholder="Enter name" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} placeholder="Enter username" onChange={(e) => {
                            setUsername(e.target.value);
                        }} />
                    </Form.Group>
                </>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Button variant="primary" type="button" onClick={handleModeChange} className="ms-2">
                {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            </Button>
        </Form>
    );
}
