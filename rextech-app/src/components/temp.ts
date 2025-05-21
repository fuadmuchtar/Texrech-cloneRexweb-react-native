

"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { ProductType } from "@/app/types";

export default function CardProducts({ product }: { product: ProductType }) {
    // State to track wishlist items
    const [wishlisted, setWishlisted] = useState<number[]>([]);

    const toggleWishlist = (idx: number, e: React.MouseEvent) => {
        // Prevent the Link navigation when clicking the heart icon
        e.stopPropagation();

        if (wishlisted.includes(idx)) {
            setWishlisted(wishlisted.filter((id) => id !== idx));
        } else {
            setWishlisted([...wishlisted, idx]);
        }
    };

    return (
        <Row xs= { 1} md = { 4} className = "g-4" >
        {
            Array.from({ length: 20 }).map((_, idx) => (
                <Col key= { idx } >
                <Card border="0" >
                {/* Card image container with positioned wishlist button */ }
            < div className = "position-relative" >
            <Link href={`/products/${idx}`} >
            <Card.Img
                  variant="top"
    src = "https://rexus.id/cdn/shop/files/2_5.jpg?v=1747195093&width=500"
    style = {{ cursor: "pointer" }
}
                />
    </Link>

{/* Wishlist button */ }
<div
                className="position-absolute top-0 end-0 m-2"
onClick = {(e) => toggleWishlist(idx, e)}
style = {{ cursor: "pointer", zIndex: 2 }}
              >
    <div
                  className="rounded-circle bg-white p-2 d-flex justify-content-center align-items-center shadow-sm"
style = {{ width: "36px", height: "36px" }}
                >
    {
        wishlisted.includes(idx) ? (
            <FaHeart className= "text-danger" />
                  ) : (
                <FaRegHeart className="text-secondary" />
                  )}
</div>
    </div>
    </div>

    < Card.Body >
    <Link href={ `/products/${idx}` } className = "text-decoration-none" >
        <Card.Title
                  style={ { cursor: "pointer", color: "#212529" } }
className = "hover-underline"
    >
    Card title
        </Card.Title>
        </Link>
        < Card.Text > Rp 1.000.000 </Card.Text>
            </Card.Body>
            </Card>
            </Col>
      ))}
</Row>
  );
}
