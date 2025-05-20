"use client";

import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <div style={{ position: "relative", height: "550px" }}>
                    <img
                        src="https://image.pollinations.ai/prompt/keyboard gaming?width=1600&height=700&nologo=true"
                        alt='welcome_image'
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: "relative", height: "550px" }}>
                    <img
                        src="https://image.pollinations.ai/prompt/mouse gaming?width=1600&height=700&nologo=true"
                        alt='welcome_image'
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: "relative", height: "550px" }}>
                    <img
                        src="https://image.pollinations.ai/prompt/laptop gaming?width=1600&height=700&nologo=true"
                        alt='welcome_image'
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}