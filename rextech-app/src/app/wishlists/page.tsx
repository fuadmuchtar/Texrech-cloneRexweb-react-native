"use client";

import CardProducts from "@/components/Card";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

export default function Wishlist() {
    interface WishlistItem {
        result: {
            _id: string;
            name: string;
            slug: string;
            description: string;
            excerpt: string;
            price: number;
            tags: string[];
            thumbnail: string;
            images: string[];
            createdAt: string;
            updatedAt: string;
        }
    }

    const [wishlists, setWishlists] = useState<WishlistItem[]>([])

    const fetchwishlists = async () => {
        const res = await fetch("http://localhost:3000/api/wishlists");
        const data = await res.json();
        setWishlists(data);
    }

    useEffect(() => {
        fetchwishlists();
    }, []);

    return (
        <Container fluid={true} className="mt-5">
            <h1 className="text-center mb-5">Wishlist</h1>
            <Row xs={1} md={4} className="g-4">

                {wishlists.map((wishlist, idx) => (
                    // buat card wishlist
                    <CardProducts key={idx} product={wishlist.result}></CardProducts>
                ))}
            </Row>
        </Container>
    );
}
