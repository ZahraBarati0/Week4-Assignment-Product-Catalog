import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h1>Discover Your Next Favorite Book</h1>
                <p>
                    Explore captivating stories, inspiring journeys, and unforgettable
                    characters.
                </p>

                <Link to="/products" className="hero-btn">
                    Browse Collection
                </Link>
            </div>
        </div>
    );
}

export default Home;