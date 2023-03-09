import "./productModules.css";
import "./productCart.css";
import { useEffect, useState } from "react";
const ProductCart = () => {
  const productList = JSON.parse(localStorage.getItem("products"));
  const [totalPrice, setTotalPrice] = useState(0);
  const [updateList, setUpdateList] = useState(false);

  function removeProductById(id) {
    const index = productList.findIndex((product) => product.id === id);
    if (index !== -1) {
      productList.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(productList));
    }
    setUpdateList(true);
  }

  useEffect(() => {
    let total = 0;
    productList.forEach((product) => {
      if (product.isInCart) {
        total += product.priceAmount;
      }
    });
    setTotalPrice(total);
  }, [productList]);

  return (
    <>
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
                    {product.priceAmount} EUR
                  </span>
                </div>
                <div className="module-list-container">
                  {product?.modules.map((module) => {
                    console.log(module);
                    return (
                      <div className="module-container module-container-cart">
                        <div className="module-heading-cart">
                          {module.title}
                        </div>
                        {module?.module.map((moduleItem) => (
                          <div className="module-container">
                            <div className="module-list-bullet" />
                            <p>{moduleItem.name}</p>
                          </div>
                        ))}
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
        TOTAL<span>: {totalPrice}EUR</span>
      </div>
      <button className="generate-invoice-btn">GENERATE INVOICE</button>
    </>
  );
};

export default ProductCart;
