"use client";

import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ProductType } from "../types";
import Link from "next/link";
import { toRupiah } from "@/helpers/convertCurrency";

export default function Wishlist() {
    interface WishlistItem {
        _id: string;
        userId: string;
        productId: string;
        productDetail: ProductType;
    }

    const [wishlists, setWishlists] = useState<WishlistItem[]>([])

    const fetchwishlists = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`);
        const data = await res.json();
        setWishlists(data);
    }
    useEffect(() => {
        fetchwishlists();
    }, []);

    console.log(wishlists, "<<< ini wishlist")

    if (!Array.isArray(wishlists)) {
        return (
            <div className="alert alert-warning container mt-5" role="alert">
                You must be logged in to view your wishlist
            </div>
        );
    } else if (wishlists.length > 0) {
        return (
            <Container fluid={true} className="mt-5">
                <h1 className="text-center mb-5">Wishlist</h1>
                <Row xs={1} md={4} className="g-4">

                    {wishlists.map((wishlist, idx) => (
                        <Col key={idx} className="mb-4">
                            <Card border="0">
                                <div className="position-relative">
                                    <Link href={`/products/${wishlist.productDetail.slug}`}>
                                        <Card.Img
                                            variant="top"
                                            src={wishlist.productDetail.thumbnail}
                                            alt={wishlist.productDetail.name}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </Link>

                                    <div
                                        className="position-absolute top-0 end-0 m-2"
                                        style={{ cursor: "pointer", zIndex: 2 }}
                                    >
                                        <div
                                            className="rounded-circle bg-white p-2 d-flex justify-content-center align-items-center shadow-sm"
                                            style={{ width: "36px", height: "36px" }}
                                        // onClick={(e) => toggleWishlist(wishlist.productDetail.slug, e)}
                                        >
                                            {/* {false ? (
                                                <FaHeart className="text-danger" />
                                            ) : (
                                                <FaRegHeart className="text-secondary" />
                                            )} */}
                                        </div>
                                    </div>
                                </div>

                                <Card.Body>
                                    <Link href={`/products/${wishlist.productDetail.slug}`} className="text-decoration-none">
                                        <Card.Title
                                            style={{ cursor: "pointer", color: "#212529" }}
                                            className="hover-underline"
                                        >
                                            {wishlist.productDetail.name}
                                        </Card.Title>
                                    </Link>
                                    <Card.Text>Rp {toRupiah(wishlist.productDetail.price)}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    } else {
        return (
            <div className="alert alert-warning container mt-5" role="alert">
                Your wishlist is empty
            </div>
        );
    }
}
