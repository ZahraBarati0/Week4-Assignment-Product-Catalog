import { Link, useOutletContext } from "react-router-dom";
import { products } from "../data/products";

function ProductList() {
    const { search, selectedGenres, sortOption } = useOutletContext();

    let filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.author.toLowerCase().includes(search.toLowerCase());

        const matchesGenres =
            selectedGenres.length === 0 ||
            (Array.isArray(product.genre)
                ? product.genre.some((g) => selectedGenres.includes(g))
                : selectedGenres.includes(product.genre));

        return matchesSearch && matchesGenres;
    });

    if (sortOption === "price-asc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "alpha") {
        filteredProducts = filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    return (
        <div className="grid">
            {filteredProducts.length === 0 && (
                <p className="no-results">No books found.</p>
            )}

            {filteredProducts.map((product) => (
                <div className="card" key={product.id}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="book-img"
                    />

                    <div className="card-content">
                        <h3>{product.name}</h3>
                        <p className="author">by {product.author}</p>

                        <div className="genre-list">
                            {Array.isArray(product.genre)
                                ? product.genre.map((g, index) => (
                                    <span key={index} className={`genre-badge ${g.toLowerCase().replace(/\s/g, "-")}`}>
                                        {g}
                                    </span>
                                ))
                            : (
                                <span className={`genre-badge ${product.genre.toLowerCase().replace(/\s/g, "-")}`}>
                                    {product.genre}
                                </span>
                            )}
                        </div>

                        <p className="price">${product.price}</p>

                        <p className="description">
                            {product.description.length > 100
                                ? product.description.slice(0, 100) + "..."
                                : product.description}
                        </p>

                        <Link to={`/products/${product.id}`} className="btn">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;