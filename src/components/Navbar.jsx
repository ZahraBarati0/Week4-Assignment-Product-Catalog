import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">📚 Bookstore</h2>
            
            <div className="links">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/products"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Products
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;