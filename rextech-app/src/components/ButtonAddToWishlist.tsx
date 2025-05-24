"use client"

export default function ButtonAddToWishlist({ productId }: { productId: string }) {
    const handleAddWishlist = async () => {
        const res = await fetch("http://localhost:3000/api/wishlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productId
            })
        })
        const data = await res.json()
    }
    return (
        <button className="btn btn-primary" onClick={handleAddWishlist}>
            Add to Wishlist
        </button>
    )
}