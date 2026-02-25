import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container">
            <h2>404 - Page Not Found</h2>
            <Link to="/" className="btn">
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;