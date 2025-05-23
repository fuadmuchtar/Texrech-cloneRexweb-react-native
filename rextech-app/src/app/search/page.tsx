"use client";
import CardProducts from "@/components/Card";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ProductType } from "../types";

export default function Search() {
    const [searchData, setSearchData] = useState<ProductType[]>([])


    if (!searchData.length || !searchData) {
        return (
            <div className="alert alert-warning container mt-5" role="alert">
                No products were found matching your selection
            </div>
        );
    }
    return (
        <Container fluid={true} className="mt-5">
            <h1 className="text-center mb-5">All Product</h1>
            <Row xs={1} md={4} className="g-4">
                {searchData.map((product) => (
                    <CardProducts key={product._id} product={product} />
                ))}
            </Row>
        </Container>
    );
}