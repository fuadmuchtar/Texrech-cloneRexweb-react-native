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
            
        } else {
            console.log("Register", { name, username, email, password });
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
                            <Form.Control size='lg' type="text" value={name} placeholder="Name" onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control size='lg' type="text" value={username} placeholder="Username" onChange={(e) => {
                                setUsername(e.target.value);
                            }} />
                        </Form.Group>
                    </>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control size='lg' type="email" value={email} placeholder="Email" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="password" value={password} placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
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
