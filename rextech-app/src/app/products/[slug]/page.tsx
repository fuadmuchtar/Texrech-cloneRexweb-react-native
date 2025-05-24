import { ProductType } from "@/app/types"
import ButtonAddToWishlist from "@/components/ButtonAddToWishlist"
import { toRupiah } from "@/helpers/convertCurrency"
import { notFound } from "next/navigation"
import type { Metadata } from 'next'
import VerticalGallery from "@/components/ImagesProduct"

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: Props): Promise<Metadata> {
    const { slug } = await params

    const product = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`).then((res) => res.json())

    return {
        title: product.name + " - Rextech",
        description: product.description,
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`)

    if (!res.ok) {
        notFound()
    }
    const product: ProductType = await res.json()

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <VerticalGallery images={product.images} />
                </div>
                <div className="col-md-6">
                    <h1 className="fw-bold">{product.name}</h1>
                    <p className="text-muted">{product.description}</p>
                    <div className="d-flex flex-wrap mb-5">
                        {product.tags.map((tag, index) => (
                            <span key={index} className="badge bg-secondary me-2 mb-2">{tag}</span>
                        ))}
                    </div>

                    <p className="fw-bold fs-4 mb-5">Rp {toRupiah(product.price)}</p>
                    <ButtonAddToWishlist productId={product._id} />
                </div>
            </div>
        </div>
    )
}