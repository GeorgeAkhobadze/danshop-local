import { useLocation, useNavigate } from "react-router";
import logoWhite from "../../assets/logo-white.svg";
import logoBlack from "../../assets/logo-black.svg";
import cartIcon from "../../assets/cart-icon.svg";
import "./header.css";
import { useEffect, useState } from "react";
const Header = (updated) => {
  const location = useLocation();
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("products"));
  const [randomState, setRandomState] = useState(false);
  const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    let count = 0;
    products?.forEach((element) => {
      if (element?.isInCart === true) {
        count += 1;
      }
    });
    setProductCount(count);
  }, [updated]);

  const handleStorageChange = (event) => {
  };
  return (
    <header className={`${location.pathname === "/" ? "header--black" : ""}`}>
      <div>
        <img
          className="header-logo"
          onClick={() => navigate("/company_list")}
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

            {products?.length > 0 && (
              <div className="header-cart-qty">{productCount}</div>
            )}

            <img src={cartIcon} />
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
