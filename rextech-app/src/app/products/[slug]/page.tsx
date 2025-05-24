import { ProductType } from "@/app/types"
import ButtonAddToWishlist from "@/components/ButtonAddToWishlist"
import { toRupiah } from "@/helpers/convertCurrency"
import { notFound } from "next/navigation"

export default async function ({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const res = await fetch(`http://localhost:3000/api/products/${slug}`)

    if (!res.ok) {
        notFound()
    }
    const product: ProductType = await res.json()

    return (
        // buatkan div dibagi 2
        // kiri untuk gambar produk
        // kanan untuk deskripsi produk
        // gambar produk menggunakan bootstrap
        // deskripsi produk menggunakan bootstrap
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div id="carouselExampleAutoplaying" className="carousel slide">
                            <div className="carousel-inner">
                                {/* {product.images.map((image, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={image} className="d-block w-100" alt={product.name} />
                                    </div>
                                ))} */}
                                <div className="carousel-item active">
                                    <img src="https://rexus.id/cdn/shop/files/X18_3_3405b094-b5df-456a-998a-90b74b3f33e3.png?v=1706602294&width=800" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rexus.id/cdn/shop/files/X18_2_0a0e7358-0d1d-4113-b0fd-95426fa75b2c.png?v=1706602295&width=800" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rexus.id/cdn/shop/files/X18_1_12f7b52d-27ed-4b90-834a-301ced79c49d.png?v=1706602295&width=800" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h1 className="fw-bold">{product.name}</h1>
                        <p className="text-muted">{product.description}</p>
                        <p className="text-muted">Rp {toRupiah(product.price)}</p>
                        <ButtonAddToWishlist productId={product._id} />
                    </div>
                </div>
            </div>
        </>
    )
}