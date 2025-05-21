import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-5 mt-5 border-top">
      <Container>
        <Row className="mb-5">
          {/* Company Information */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="mb-4">
              <h2 className="fw-bold fs-1">REXTECH®</h2>
            </div>
            <p className="text-muted">
              Rextech® merupakan merek produk lokal Indonesia untuk perlengkapan
              gaming, aksesoris, mobile, kantor (baik komputer dan gadget) serta
              card reader dan capture card. Rextech® menyediakan pilihan produk
              terbaik yang stylish, modern, elegan, dan inovatif. Hal ini
              didukung dengan berbagai informasi terkait tips dan review produk
              yang insightful
            </p>
            <p className="text-muted mt-4">
              Made for everyone, Rextech® hadir untuk menjadi produk yang
              berkulitas namun terjangkau oleh semua kalangan, gamer dan
              profesional, baik pria dan wanita.
            </p>
          </Col>

          {/* Support Links */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0 offset-lg-1">
            <h5 className="fw-bold mb-4">Bantuan & Dukungan</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Panduan Garansi
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Download Software
                </Link>
              </li>
            </ul>
          </Col>

          {/* About Links */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-4">Tentang Rextech</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Tentang Kami
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Ketentuan Penggunaan
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Partnership RNET
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Program Rextech Goes to School
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Social Media
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4">Rextech Headquarter</h5>
            <div className="d-flex">
              <div className="me-3">
                <FaMapMarkerAlt
                  size={24}
                  className="text-primary rounded-circle p-1"
                  style={{ backgroundColor: "#f8f9fa" }}
                />
              </div>
              <div>
                <p className="text-muted mb-1">
                  Jl. Sentani Blok C11 No 5 Gunung Sahari Utara, Sawah Besar,
                  Jakarta Pusat
                </p>
                <p className="text-muted">
                  +62 21 6230 4000 | +62 822 1100 8668
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="border-top pt-3 pb-3">
          <Col className="text-muted">
            © 2025 REXTECH | Official Site. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
