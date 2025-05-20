"use client"

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { NavDropdown, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';
import FormComponent from './Form';

export default function NavbarComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="lg" className="bg-white shadow-sm py-2">
            <Container>
                <Navbar.Brand className="me-4">
                    <Link href="/" className="text-decoration-none fw-bold text-primary fs-3">
                        REXTECH
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link href="products" className="fw-semibold">PRODUCT</Nav.Link>
                        {/* <NavDropdown title="PRODUK" id="basic-nav-dropdown" className="fw-semibold">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                    <div className="d-flex align-items-center me-3">
                        <Button variant="link" className='text-decoration-none fw-bold text-dark' onClick={handleShow}>
                            LOGIN & REGISTER
                        </Button>

                    </div>

                    <Form className="d-flex me-3 position-relative">
                        <Form.Control
                            type="search"
                            placeholder="Search for products"
                            className="rounded-pill ps-3 pe-5"
                            aria-label="Search"
                        />
                        <Button
                            variant="link"
                            className="position-absolute end-0 top-0 text-dark"
                            style={{ height: '100%', border: 'none' }}
                        >
                            <FaSearch />
                        </Button>
                    </Form>

                    <div className="d-flex gap-3 align-items-center">
                        <div className="position-relative">
                            <FaUser className="text-dark fs-5" />
                            <div className="position-absolute bg-primary rounded-circle d-flex justify-content-center align-items-center"
                                style={{ width: '18px', height: '18px', top: '-8px', right: '-8px', fontSize: '11px', color: 'white' }}>
                                0
                            </div>
                        </div>
                        <div className="position-relative">
                            <FaHeart className="text-dark fs-5" />
                            <div className="position-absolute bg-primary rounded-circle d-flex justify-content-center align-items-center"
                                style={{ width: '18px', height: '18px', top: '-8px', right: '-8px', fontSize: '11px', color: 'white' }}>
                                0
                            </div>
                        </div>
                        <div className="position-relative">
                            <FaShoppingCart className="text-dark fs-5" />
                            <div className="position-absolute bg-primary rounded-circle d-flex justify-content-center align-items-center"
                                style={{ width: '18px', height: '18px', top: '-8px', right: '-8px', fontSize: '11px', color: 'white' }}>
                                0
                            </div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FormComponent />
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
}