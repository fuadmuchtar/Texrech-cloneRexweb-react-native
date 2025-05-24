"use client";

import { useState } from "react";

export default function SearchForm() {
    const [search, setSearch] = useState("");
    return (
        <form className="d-flex" role="search" onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/search?keyword=${search}`
        }}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Enter to search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}