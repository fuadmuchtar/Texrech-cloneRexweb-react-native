"use server"

import { handleLogout } from "@/actions";
import LoginModal from "./LoginModal";
import { cookies } from "next/headers";
import SearchForm from "./SearchForm";
import Link from "next/link";
import { BsFillBagHeartFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";

export default async function Navbar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("Authorization")?.value;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/">
          REXTECH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/products">
                {/* HOME */}
                PRODUCTS
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="/products">
              </a> */}
            </li>
          </ul>
          {isLoggedIn ? (
            <button
              className="btn btn-link text-decoration-none fw-bold text-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <LoginModal />
          )}
          <SearchForm />
          <button className="btn position-relative text-decoration-none">
            <Link href="/wishlists" className="text-dark">
              <BsFillBagHeartFill style={{ fontSize: 25 }} />
            </Link>
          </button>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}
