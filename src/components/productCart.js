import "./productModules.css";
import "./productCart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./generateInvoice.css";

import Header from "./header/header";
const ProductCart = () => {
  const productList = JSON.parse(localStorage.getItem("products"));
  const [totalPrice, setTotalPrice] = useState(0);
  const [updateList, setUpdateList] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);
  const navigate = useNavigate();
  function removeProductById(id) {
    const index = productList.findIndex((product) => product.id === id);
    if (index !== -1) {
      productList.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(productList));
    }
    setUpdateList(true);
    navigate("/cart");
  }

  useEffect(() => {
    let total = 0;
    productList?.forEach((product) => {
      if (product.isInCart) {
        total += product.priceAmount;
      }
    });
    setTotalPrice(total);
  }, [productList]);

  return (
    <>
      <Header updated={updateList} />
      <div className="product-modules-hero">
        <div className="product-modules-hero--blur"></div>
        <h3>DEIN WARENKORB</h3>
      </div>
      <div className="product-modules">
        {productList?.map((product) => {
          if (product.isInCart === true) {
            return (
              <div key={product.id} className="product-module-container">
                <div className="product-module-title">
                  <span>{product.name} </span>
                  <span className="product-title-price">
                    {product.priceAmount?.toLocaleString()} EUR
                  </span>
                </div>
                <div className="module-list-container">
                  {product?.modules.map((module) => {
                    return (
                      <div className="module-container module-container-cart">
                        <div className="module-heading-cart">
                          {module?.title}
                        </div>
                        {module?.moduleNote && (
                          <div>
                            <div className="module-container">
                              <p>{module?.moduleNote}</p>
                            </div>
                          </div>
                        )}

                {module?.module?.map((moduleItem) => {
                  if(moduleItem.checkbox !== false) {
                    return(
                    <div className="module-container" title={moduleItem?.list ? moduleItem?.list?.join('\n') : moduleItem.name}>
                    <div className="module-list-bullet" />
                    {moduleItem?.hasInput ? <p>{moduleItem.interviewValue + " " + moduleItem.name}</p> : <p>{moduleItem.name}</p>}
                  </div>
                    )
                  }
                })}
                      </div>
                    );
                  })}
                </div>
                <button
                  className="remove-product-btn"
                  onClick={() => removeProductById(product.id)}
                >
                  Remove Product
                </button>
              </div>
            );
          }
        })}
        <div></div>
      </div>
      <div className="cart-price-container">
        TOTAL<span>: {totalPrice?.toLocaleString()}EUR</span>
      </div>
      <button
        className="generate-invoice-btn"
        onClick={() => navigate("/generate-offer")}
      >
        GENERATE OFFER
      </button>
    </>
  );
};

export default ProductCart;
