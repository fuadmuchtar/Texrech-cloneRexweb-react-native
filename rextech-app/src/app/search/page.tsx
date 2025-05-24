"use client";
import CardProducts from "@/components/Card";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ProductType } from "../types";
import { useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams()
    const search = searchParams.get('keyword')

    const [searchData, setSearchData] = useState<ProductType[]>([])

    const fetchSearchProduct = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?name=${search}`);
        const data = await res.json();
        setSearchData(data);
    }

    useEffect(() => {
        fetchSearchProduct();
    }, []);

    if (!searchData || searchData.length === 0) {
        return (
            <div className="alert alert-warning container mt-5" role="alert">
                No products were found matching your selection
            </div>
        );
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-secondary text-white py-5 mb-5">
                <h4 >{searchData.length} Search Result for: “{search}”</h4>
            </div>
            <Container fluid={true}>
                <Row xs={1} md={4} className="g-4">
                    {searchData.map((product) => (
                        <CardProducts key={product._id} product={product} />
                    ))}
                </Row>
            </Container>
        </>
    );
}