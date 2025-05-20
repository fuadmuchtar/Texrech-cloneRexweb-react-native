"use client";

import Image from "next/image";
import { Carousel, Col, Container, Row, Button, Form, Tabs, Tab } from "react-bootstrap";
import { FaHeart, FaExchangeAlt, FaWhatsapp, FaFacebook, FaTwitter, FaTelegram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <Container className="mt-5">
            <Row>
                {/* Left column - Image Carousel */}
                <Col md={6} className="mb-4">
                    <Carousel className="product-carousel">
                        <Carousel.Item>
                            <Image
                                src="https://rexus.id/cdn/shop/files/X18_3_3405b094-b5df-456a-998a-90b74b3f33e3.png?v=1706602294&width=800"
                                alt="Rexus Xierra X18 Mouse Image 1"
                                width={600}
                                height={600}
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="https://rexus.id/cdn/shop/files/X18_3_3405b094-b5df-456a-998a-90b74b3f33e3.png?v=1706602294&width=800"
                                alt="Rexus Xierra X18 Mouse Image 2"
                                width={600}
                                height={600}
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="https://rexus.id/cdn/shop/files/X18_3_3405b094-b5df-456a-998a-90b74b3f33e3.png?v=1706602294&width=800"
                                alt="Rexus Xierra X18 Mouse Image 3"
                                width={600}
                                height={600}
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                {/* Right column - Product details */}
                <Col md={6}>
                    {/* Product Title */}
                    <h1 className="fs-2 fw-bold">Mouse Gaming Rexus Xierra X18 RIFLE</h1>

                    {/* Product Price */}
                    <div className="mt-3">
                        <span className="text-secondary text-decoration-line-through fs-5 me-3">Rp 299,000</span>
                        <span className="text-danger fs-3 fw-bold">Rp 159,000</span>
                    </div>

                    {/* Product Info */}
                    <div className="mt-4 border-bottom pb-4">
                        <p className="mb-1">
                            <span className="text-secondary">SKU:</span> <span className="fw-medium">MSG-RXS0063B</span>
                        </p>
                        <p>
                            <span className="text-secondary">Categories:</span> <span className="fw-medium">All Gaming, All Product, Mouse</span>
                        </p>
                    </div>

                    {/* Color Selection */}
                    <div className="mt-4">
                        <p className="fw-bold mb-3">COLOR: HITAM</p>
                        <div className="d-flex gap-2">
                            <Button
                                variant="outline-secondary"
                                className="rounded-circle p-0 d-flex align-items-center justify-content-center"
                                style={{ width: "50px", height: "50px", overflow: "hidden" }}
                            >
                                <div className="bg-dark w-100 h-100"></div>
                            </Button>
                            <Button
                                variant="outline-secondary"
                                className="rounded-circle p-0 d-flex align-items-center justify-content-center"
                                style={{ width: "50px", height: "50px", overflow: "hidden" }}
                            >
                                <div className="bg-white w-100 h-100"></div>
                            </Button>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="d-flex gap-3 mt-4">
                        <div className="d-flex">
                            <Button onClick={decreaseQuantity} variant="light" className="border px-3">-</Button>
                            <Form.Control
                                type="text"
                                value={quantity}
                                readOnly
                                className="text-center border-top border-bottom border-start-0 border-end-0"
                                style={{ width: "60px", borderRadius: "0" }}
                            />
                            <Button onClick={increaseQuantity} variant="light" className="border px-3">+</Button>
                        </div>
                        <Button
                            variant="dark"
                            className="flex-grow-1 py-2 fw-bold"
                        >
                            ADD TO CART
                        </Button>
                    </div>

                    {/* Wishlist and Compare */}
                    <div className="d-flex gap-4 mt-4">
                        <Button variant="outline-secondary" className="d-flex align-items-center gap-2 rounded-pill px-3">
                            <FaHeart /> Add to Wishlist
                        </Button>
                        <Button variant="outline-secondary" className="d-flex align-items-center gap-2 rounded-pill px-3">
                            <FaExchangeAlt /> Compare
                        </Button>
                    </div>

                    {/* WhatsApp Button */}
                    <Button
                        variant="success"
                        className="d-flex align-items-center justify-content-center gap-2 w-100 mt-4 py-2"
                    >
                        <FaWhatsapp size={20} /> Chat on WhatsApp
                    </Button>

                    {/* Share */}
                    <div className="mt-4">
                        <p className="fw-medium">Share:</p>
                        <div className="d-flex gap-3">
                            <Button variant="light" className="rounded-circle p-2">
                                <FaFacebook />
                            </Button>
                            <Button variant="light" className="rounded-circle p-2">
                                <FaTwitter />
                            </Button>
                            <Button variant="light" className="rounded-circle p-2">
                                <FaTelegram />
                            </Button>
                            <Button variant="light" className="rounded-circle p-2">
                                <FaEnvelope />
                            </Button>
                            <Button variant="light" className="rounded-circle p-2">
                                <FaWhatsapp />
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Product Description Tabs */}
            <Row className="mt-5">
                <Col>
                    <Tabs
                        defaultActiveKey="description"
                        id="product-info-tabs"
                        className="mb-4 border-bottom"
                    >
                        <Tab eventKey="description" title="Deskripsi produk" className="py-4">
                            <div className="product-description">
                                <p>
                                    Mouse ini menggunakan sensor A825IC yang DPI-nya dapat diatur baik melalui tombol DPI default (800-1200-1600-2400-4800-7200) maupun software. Terdapat 14 mode LED yang dapat Anda atur sesuai dengan keinginan Anda dan juga tombol Snipping Mode yang digunakan untuk mengurangi DPI ketika menargetkan lawan dalam permainan. Tersedia warna hitam dan putih dengan style yang lebih futuristik untuk menghias gaming setup Anda.
                                </p>

                                <ul className="list-unstyled mt-4">
                                    <li className="mb-2">- Mouse Gaming Ergonomis dengan grip nyaman</li>
                                    <li className="mb-2">- Polling Rate hingga 1000 Hz</li>
                                    <li className="mb-2">- DPI yang dapat diatur; Default (800-1200-1600-2400-4800-7200)</li>
                                    <li className="mb-2">- Durabilitas Tinggi 10 Juta Klik</li>
                                    <li className="mb-2">- Tersedia Macro Software</li>
                                    <li className="mb-2">- Tombol Snipping Mode untuk Target Tepat Sasaran</li>
                                    <li className="mb-2">- 14 Mode LED yang dapat diatur</li>
                                    <li className="mb-2">- Warna dan Desain Futuristik: Hitam dan Putih</li>
                                </ul>

                                <h5 className="mt-5 mb-3">Keunggulan :</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">Desain Futuristik dan Ergonomis dengan Grip yang Nyaman</li>
                                    <li className="mb-2">Tombol Huano 10 Juta Klik</li>
                                    <li className="mb-2">Software Pendukung Fitur Macro</li>
                                    <li className="mb-2">14 Mode LED Pencahayaan</li>
                                    <li className="mb-2">Level DPI Hingga 7200</li>
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="video" title="Video" className="py-4">
                            <div className="video-content text-center">
                                <p className="text-muted">Video produk belum tersedia.</p>
                            </div>
                        </Tab>
                        <Tab eventKey="review" title="Review" className="py-4">
                            <div className="review-content">
                                <p className="text-muted">Belum ada ulasan untuk produk ini.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}