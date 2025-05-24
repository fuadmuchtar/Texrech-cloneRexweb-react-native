"use client"

import { Bounce, toast } from "react-toastify";

export default function ButtonAddToWishlist({ productId }: { productId: string }) {
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
        <button className="btn btn-primary" onClick={() => handleAddWishlist(productId)}>
            Add to Wishlist
        </button>
    )
}