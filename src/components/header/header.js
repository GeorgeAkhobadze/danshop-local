import { useLocation, useNavigate } from "react-router";
import logoWhite from "../../assets/logo-white.svg";
import logoBlack from "../../assets/logo-black.svg";
import cartIcon from "../../assets/cart-icon.svg";
import "./header.css";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("products"));

  return (
    <header className={`${location.pathname === "/" ? "header--black" : ""}`}>
      <div>
        <img
          className="header-logo"
          onClick={() => navigate("/")}
          src={location.pathname === "/" ? logoWhite : logoBlack}
        />
      </div>
      {location.pathname == "/" ? (
        ""
      ) : (
        <ul className="header-nav">
          <li className="header-nav__item">Home</li>
          <li className="header-nav__item">Dashboard</li>
          <li className="header-nav__item">Einkaufskorb</li>
          <li className="header-nav__item">Support</li>
          <li className="header-nav__item" onClick={() => navigate("/cart")}>
            {console.log(products?.length)}
            {products?.length > 0 && (
              <div className="header-cart-qty">{products?.length}</div>
            )}

            <img src={cartIcon} />
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
