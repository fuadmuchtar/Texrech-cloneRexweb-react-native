"use client";

import { useEffect, useRef, useState } from "react";
import CarouselComponent from "@/components/Carousel";
import ImageCardComponent from "@/components/ImageCard";
import { Container } from "react-bootstrap";
import { ProductType } from "./types";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageCardsRef = useRef<HTMLDivElement>(null);
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);
    const data = await res.json();
    setFeaturedProducts(data);
  }

  useEffect(() => {
    fetchProducts();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp', 'animate__animated', 'animate__slow');
          observer.unobserve(entry.target);
        }
      });
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (imageCardsRef.current) observer.observe(imageCardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CarouselComponent />

      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <h1 className="fw-bold fs-2">SPECIAL DEALS</h1>
        <p className="mb-4 text-center">
          Temukan penawaran menarik dan produk terbaru dari REXTECH. Jangan lewatkan kesempatan untuk mendapatkan produk berkualitas dengan harga terbaik!
        </p>
      </div>

      <Container fluid={true} ref={sectionRef} className="mt-5 mb-5">

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {featuredProducts.map((product) => (
            <div className="col" key={product._id} ref={cardsRef}>
              <div
                className="card h-100"
                onClick={() => window.location.href = `/products/${product.slug}`}
                style={{ cursor: 'pointer' }}
              >
                <div className="row g-0 p-3">
                  <div className="col-md-4">
                    <img src={product.thumbnail} width={200} className="img-fluid" alt={product.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column justify-content-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Rp. {product.price.toLocaleString()}</p>
                      <p className="card-text">
                        {product.tags.map((tag, index) => (
                          <span key={index} className="badge bg-secondary me-1">{tag}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/products" className="btn btn-primary rounded-pill px-4 py-2">Lihat Semua Produk</a>
        </div>
      </Container>

      <div ref={imageCardsRef} className="container-fluid mt-5 mb-5 pt-5">
        <ImageCardComponent />
      </div>
    </>
  );
}