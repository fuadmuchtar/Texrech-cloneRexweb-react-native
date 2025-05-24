import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-5 mt-5 border-top">
      <Container>
        <Row className="mb-5">
          {/* Company Information */}
          <Col className="mb-4 mb-lg-0">
            <div className="mb-4">
              <h2 className="fw-bold fs-1 text-center">REXTECH®</h2>
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
        </Row>

      </Container>
      <Row className="border-top pt-3 pb-3">
        <Col className="text-muted px-5">
          © 2025 REXTECH | Official Site. All Rights Reserved.
        </Col>
      </Row>
    </footer>
  );
}
