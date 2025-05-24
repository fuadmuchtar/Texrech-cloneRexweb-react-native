"use client";

import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ImageCardComponent() {
    return (
        <Row xs={1} md={2} className="g-2">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <Card className="bg-dark text-white border-0" style={{ borderRadius: 0 }}>
                        <Card.Img src={`https://image.pollinations.ai/prompt/gaming gear ${idx} with blur background?width=600&height=600&nologo=true`} alt="Card image" style={{ borderRadius: 0 }} />
                        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                            <Card.Title style={{ fontSize: 50, fontWeight: "bolder" }}>Gears</Card.Title>
                            <Button variant="light" className="rounded-pill px-4 py-2 border-0">Temukan produk</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}