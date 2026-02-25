import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="not-found">
                <h2>Product not found</h2>
                <button onClick={() => navigate("/products")} className="btn">
                    Back to Products
                </button>
            </div>
        );
    }

    const similarBooks = products.filter((p) => {
        if (p.id === product.id) return false;
        const genres = Array.isArray(p.genre) ? p.genre : [p.genre];
        const productGenres = Array.isArray(product.genre) ? product.genre : [product.genre];
        return genres.some((g) => productGenres.includes(g));
    }).slice(0, 4); // Limit to 4 similar books

    return (
        <div className="details">
            <div className="details-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="details-img"
                />

                <div className="details-info">
                    <h2>{product.name}</h2>
                    <p className="author">by {product.author}</p>
                    <p className="price">${product.price}</p>

                    <div className="genre-list">
                        {Array.isArray(product.genre)
                            ? product.genre.map((g, index) => (
                                <span
                                    key={index}
                                    className={`genre-badge ${g.toLowerCase().replace(/\s/g, "-")}`}
                                >
                                    {g}
                                </span>
                            ))
                        : (
                            <span
                                className={`genre-badge ${product.genre.toLowerCase().replace(/\s/g, "-")}`}
                            >
                                {product.genre}
                            </span>
                        )}
                    </div>

                    <p className="description">{product.description}</p>

                    <button onClick={() => navigate(-1)} className="btn">
                        Back
                    </button>
                </div>
            </div>

            {similarBooks.length > 0 && (
                <div style={{ marginTop: "50px" }}>
                    <h3>Similar Books</h3>
                    <div className="grid">
                        {similarBooks.map((b) => (
                            <div key={b.id} className="card">
                                <img src={b.image} alt={b.name} className="book-img" />
                                <div className="card-content">
                                    <h4>{b.name}</h4>
                                    <p className="author">by {b.author}</p>
                                    <div className="genre-list">
                                        {Array.isArray(b.genre)
                                            ? b.genre.map((g, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`genre-badge ${g.toLowerCase().replace(/\s/g, "-")}`}
                                                >
                                                    {g}
                                                </span>
                                            ))
                                        : (
                                            <span
                                                className={`genre-badge ${b.genre.toLowerCase().replace(/\s/g, "-")}`}
                                            >
                                                {b.genre}
                                            </span>
                                        )}
                                    </div>
                                    <p className="price">${b.price}</p>
                                    <button onClick={() => navigate(`/products/${b.id}`)} className="btn">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;