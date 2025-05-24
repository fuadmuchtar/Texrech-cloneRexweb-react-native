import Link from "next/link";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function WishlistButton() {
    return (
        <button className="btn btn-danger position-relative ">
            <Link href="/wishlists" className="text-white text-decoration-none">
                <BsFillBagHeartFill />
            </Link>
        </button>
    );
}