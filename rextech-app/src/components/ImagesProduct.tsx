"use client"

import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const VerticalGallery = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <Container>
            <Row>
                <Col xs={2} className="overflow-auto thumbnails" style={{ maxHeight: '500px' }}>
                    {images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            fluid
                            rounded
                            onClick={() => setCurrentIndex(idx)}
                            className={`mb-2 ${idx === currentIndex ? 'border border-primary' : 'border'}`}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </Col>
                <Col xs={10} className="position-relative">
                    <div className="text-center">
                        <Image
                            src={images[currentIndex]}
                            fluid
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                        <span
                            className="position-absolute top-50 start-0 translate-middle-y bg-white px-2 rounded-circle"
                            style={{ cursor: 'pointer' }}
                            onClick={handlePrev}
                        >
                            &#8249;
                        </span>
                        <span
                            className="position-absolute top-50 end-0 translate-middle-y bg-white px-2 rounded-circle"
                            style={{ cursor: 'pointer' }}
                            onClick={handleNext}
                        >
                            &#8250;
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default VerticalGallery;
