"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { ProductType } from "@/app/types";
import { toRupiah } from "@/helpers/convertCurrency";

export default function CardProducts({ product }: { product: ProductType }) {
  // const [wishlisted, setWishlisted] = useState<string[]>([]);

  // const toggleWishlist = (slug: string, e: React.MouseEvent) => {
  // e.preventDefault();
  // if (wishlisted.includes(slug)) {
  //   setWishlisted(wishlisted.filter((item) => item !== slug));
  // } else {
  //   setWishlisted([...wishlisted, slug]);
  // }
  // };

  return (
    <Col className="mb-4">
      <Card border="0">
        <div className="position-relative">
          <Link href={`/products/${product.slug}`}>
            <Card.Img
              variant="top"
              src={product.thumbnail}
              alt={product.name}
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
              onClick={(e) => toggleWishlist(product.slug, e)}
            >
              {false ? (
                <FaHeart className="text-danger" />
              ) : (
                <FaRegHeart className="text-secondary" />
              )}
            </div>
          </div>
        </div>

        <Card.Body>
          <Link href={`/products/${product.slug}`} className="text-decoration-none">
            <Card.Title
              style={{ cursor: "pointer", color: "#212529" }}
              className="hover-underline"
            >
              {product.name}
            </Card.Title>
          </Link>
          <Card.Text>Rp {toRupiah(product.price)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
