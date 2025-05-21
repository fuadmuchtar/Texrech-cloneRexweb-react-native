"use client";

import CardProducts from "@/components/Card";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ProductType } from "../types";

export default function Products() {
    const [products, setProducts] = useState<ProductType[]>([])

    const fetchProducts = async () => {
        const res = await fetch("http://localhost:3000/api/products");
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container fluid={true} className="mt-5">
            <h1 className="text-center mb-5">All Product</h1>
            <Row xs={1} md={4} className="g-4">
                {products.map((product) => (
                    <CardProducts key={product._id} product={product} />
                ))}
            </Row>
        </Container>
    );
}
