"use client";

import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src="https://rexus.id/cdn/shop/files/Lucky_Number_Mystery_Box_Desktop.jpg?v=1747369397&width=2000" alt='welcome_image' width={1500} height={600} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="https://rexus.id/cdn/shop/files/WEBSITE_BANNER_LAUNCHING_DESKTOP_FP08_FP09.jpg?v=1742870735&width=2000" alt='welcome_image' width={1500} height={600} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="https://rexus.id/cdn/shop/files/WEBSITE_BANNER_LAUNCHING_DESKTOP_OMNI_RXB-147.jpg?v=1742870439&width=2000" alt='welcome_image' width={1500} height={600} />
            </Carousel.Item>
        </Carousel>
    );
}