"use client";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
    const [search, setSearch] = useState("");
    const router = useRouter()
    return (
        <form className="d-flex" role="search" onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `http://localhost:3000/search?keyword=${search}`
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