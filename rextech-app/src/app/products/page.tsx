"use client";

import CardProducts from "@/components/Card";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ProductType } from "../types";

export default function Products() {
    const [products, setProducts] = useState<ProductType[]>([])
    const [page, setPage] = useState(1)
    const [endOfPage, setEndOfPage] = useState(false)

    const fetchProducts = async () => {
        const res = await fetch(`http://localhost:3000/api/products?page=${page}`);
        const data = await res.json();
        if (data.length < 4) setEndOfPage(true);
        setProducts(prevProducts => [...prevProducts, ...data]);
    }

    useEffect(() => {
        fetchProducts();
    }, [page]);

    return (
        <Container fluid={true} className="mt-5">
            <h1 className="text-center mb-5">All Product</h1>
            <Row xs={1} md={4} className="g-4">
                {products.map((product) => (
                    <CardProducts key={product._id} product={product} />
                ))}
            </Row>

            {endOfPage ? (
                null
            ) : (

                <div className="d-flex justify-content-center align-items-center">
                    {/* <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div> */}
                    <button className="btn btn-primary mt-4" onClick={() => {
                        setPage((prev) => prev + 1);
                    }}>
                        load more
                    </button>
                </div>
            )}
        </Container>
    );
}
