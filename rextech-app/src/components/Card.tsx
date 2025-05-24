"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { ProductType } from "@/app/types";
import { toRupiah } from "@/helpers/convertCurrency";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function CardProducts({ product }: { product: ProductType }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddWishlist = async (productId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId
      })
    })
    const data = await res.json()

    toast.info(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? (
                  <FaHeart className="text-danger" onClick={() => handleAddWishlist(product._id)} />
                ) : (
                  <FaRegHeart className="text-danger" onClick={() => handleAddWishlist(product._id)} />
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
    </>
  );
}
