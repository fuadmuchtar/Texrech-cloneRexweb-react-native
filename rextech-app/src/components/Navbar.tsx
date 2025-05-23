"use server"

import { handleLogout } from "@/actions";
import LoginModal from "./LoginModal";
import { cookies } from "next/headers";
import SearchForm from "./SearchForm";

export default async function Navbar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("Authorization")?.value;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          REXTECH
        </a>
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
              <a className="nav-link active" aria-current="page" href="/products">
                PRODUCTS
              </a>
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
          <div className="d-flex gap-3 align-items-center ms-3">
            <button className="btn btn-link position-relative text-decoration-none">
              <a href="/wishlists" className="text-dark">wishlists</a>
            </button>
          </div>
        </div>
      </div>
    </nav>





    //   <Navbar expand="lg" className="bg-white shadow-sm py-2">
    //     <Container>
    //       <Navbar.Brand className="me-4">
    //         <Link
    //           href="/"
    //           className="text-decoration-none fw-bold text-primary fs-3"
    //         >
    //           REXTECH
    //         </Link>
    //       </Navbar.Brand>

    //       <Navbar.Toggle aria-controls="navbarScroll" />
    //       <Navbar.Collapse id="navbarScroll">
    //         <Nav className="me-auto">
    //           <Link href="/products" style={{ textDecoration: "none", fontWeight: "bold", color: "#212529" }}>
    //             PRODUK
    //           </Link>
    //         </Nav>

    //         <div className="d-flex align-items-center me-3">
    //           {isSignedIn ? (
    //             <Button
    //               variant="link"
    //               className="text-decoration-none fw-bold text-dark"
    //               onClick={handleLogout}
    //             >
    //               LOGOUT
    //             </Button>
    //           ) : (
    //             <Button
    //               variant="link"
    //               className="text-decoration-none fw-bold text-dark"
    //               onClick={handleShow}
    //             >
    //               LOGIN & REGISTER
    //             </Button>

    //           )}
    //         </div>

    //         <Form className="d-flex me-3 position-relative" onSubmit={(e) => {
    //           e.preventDefault()
    //           redirect("/search")
    //         }}>
    //           <Form.Control
    //             type="search"
    //             placeholder="Search for products"
    //             className="rounded-pill ps-3 pe-5"
    //             aria-label="Search"
    //           />
    //           <Button
    //             variant="link"
    //             className="position-absolute end-0 top-0 text-dark"
    //             style={{ height: "100%", border: "none" }}
    //           >
    //             <FaSearch />
    //           </Button>
    //         </Form>

    //         <div className="d-flex gap-3 align-items-center">
    //           <div className="position-relative">
    //             <Link href="/wishlists">
    //               <FaHeart className="text-dark fs-5" />
    //               <div
    //                 className="position-absolute bg-primary rounded-circle d-flex justify-content-center align-items-center"
    //                 style={{
    //                   width: "18px",
    //                   height: "18px",
    //                   top: "-8px",
    //                   right: "-8px",
    //                   fontSize: "11px",
    //                   color: "white",
    //                 }}
    //               >
    //                 0
    //               </div>
    //             </Link>
    //           </div>
    //           <div className="position-relative">
    //             <FaShoppingCart className="text-dark fs-5" />
    //             <div
    //               className="position-absolute bg-primary rounded-circle d-flex justify-content-center align-items-center"
    //               style={{
    //                 width: "18px",
    //                 height: "18px",
    //                 top: "-8px",
    //                 right: "-8px",
    //                 fontSize: "11px",
    //                 color: "white",
    //               }}
    //             >
    //               0
    //             </div>
    //           </div>
    //         </div>
    //       </Navbar.Collapse>
    //     </Container>
    //     <Offcanvas show={show} onHide={handleClose} placement="end">
    //       <Offcanvas.Header closeButton>
    //         {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
    //       </Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <FormComponent />
    //       </Offcanvas.Body>
    //     </Offcanvas>
    //   </Navbar>
  );
}
