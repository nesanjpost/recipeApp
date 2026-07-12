import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const {cartCount} = useContext(CartContext)
  // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    return (
    <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-danger body-bg-rgb shadow-lg">
      <div class="container-fluid d-flex justify-content-between px-5">
           <Link
          className="navbar-brand text-decoration-none fw-bold text-light"
          to={`/`}
        >
          FoodCart
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="nav-link text-decoration-none text-light" to={`/`}>
              Home
            </Link>
            <Link
              className="nav-link text-decoration-none text-light"
              to={`/recipes`}
            >
              Recipes
            </Link>
            <Link
              className="nav-link text-decoration-none text-light"
              to={`/contact`}
            >
              Contact
            </Link>            
          </div>
        </div>
        <div className="cart position-relative d-inline-block">
          <Link to={'./cart'} className="cartIcon text-light fs-2"><i class="bi bi-cart4"></i></Link>
        <span className="position-absolute top-25 mt-2 translate-middle text-dark rounded-5 badge bg-warning">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
