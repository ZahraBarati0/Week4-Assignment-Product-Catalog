import { useState } from "react";
import { Outlet } from "react-router-dom";
import { products } from "../data/products";

function ProductsLayout() {
    const [search, setSearch] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [sortOption, setSortOption] = useState("");

    const allGenres = Array.from(
        new Set(products.flatMap((p) => (Array.isArray(p.genre) ? p.genre : [p.genre])))
    );

    const toggleGenre = (genre) => {
        setSelectedGenres((prev) =>
            prev.includes(genre)
                ? prev.filter((g) => g !== genre)
                : [...prev, genre]
        );
    };

    const clearFilters = () => {
        setSearch("");
        setSelectedGenres([]);
        setSortOption("");
    };

    return (
        <div className="container">
            <h1>Our Books</h1>
            <p className="subtitle">Discover our carefully selected collection.</p>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="alpha">Alphabetical</option>
                </select>

                <button onClick={clearFilters} className="clear-btn">
                    Clear
                </button>
            </div>

            <div className="genre-list" style={{ marginBottom: "20px" }}>
                {allGenres.map((genre) => (
                    <span
                        key={genre}
                        className={`genre-badge ${
                            selectedGenres.includes(genre) ? "selected-genre" : ""
                        }`}
                        style={{
                            cursor: "pointer",
                            opacity: selectedGenres.includes(genre) ? 1 : 0.6,
                        }}
                        onClick={() => toggleGenre(genre)}
                    >
                        {genre}
                    </span>
                ))}
            </div>

            <Outlet context={{ search, selectedGenres, sortOption }} />
        </div>
    );
}

export default ProductsLayout;