import CarouselComponent from "@/components/Carousel";
import ImageCardComponent from "@/components/ImageCard";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <h1 className="fw-bold fs-2">SPECIAL DEALS</h1>
        <p className="mb-4 text-center">
          Temukan penawaran menarik dan produk terbaru dari REXTECH. Jangan lewatkan kesempatan untuk mendapatkan produk berkualitas dengan harga terbaik!
        </p>
      </div>
      <Container className="d-flex flex-row gap-5 align-items-center justify-content-center mt-5 mb-5">
        <div className="card mb-3" style={{ maxWidth: 540, minWidth: 500 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://rexus.id/cdn/shop/files/Daxa_Sedna_7_625c6c76-85f0-4489-a6be-2df77052e75e.png?v=1737622106&width=500" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body h-100 d-flex flex-column justify-content-center">
                <h5 className="card-title">Rextech Headset Daxa</h5>
                <p className="card-text">
                  Rp. 250.000
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Available: 10</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: 540, minWidth: 500 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://rexus.id/cdn/shop/files/Daxa_Sedna_7_625c6c76-85f0-4489-a6be-2df77052e75e.png?v=1737622106&width=500" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body h-100 d-flex flex-column justify-content-center">
                <h5 className="card-title">Rextech Headset Daxa</h5>
                <p className="card-text">
                  Rp. 250.000
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Available: 10</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="container-fluid mt-5 mb-5">
        <ImageCardComponent />
      </div>
    </>
  );
}