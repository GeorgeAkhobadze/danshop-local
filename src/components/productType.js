import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./productCatalog.css";
import digitalImg from "../assets/digital-img.svg";
import analogImg from "../assets/analog-img.svg";
import hybridImg from "../assets/hybrid-img.svg";
import "./productType.css";
import Header from "./header/header";
let products = JSON.parse(localStorage.getItem("products"));

const ProductType = () => {
  let navigate = useNavigate();
  const { productId } = useParams();
  const [page, setPage] = useState(1);
  const [functionRan, setFunctionRan] = useState(false);
  const product = JSON.parse(localStorage.getItem("products"))[productId];
  const [myObject, setMyObject] = useState(
    JSON.parse(localStorage.getItem("products"))[productId]
  );

  const updateChangesLocal = (updatedProduct) => {
    const existingArray = JSON.parse(localStorage.getItem("products"));
    const index = existingArray.findIndex((obj) => obj.id === productId);
    const newArray = [
      ...existingArray.slice(0, index),
      updatedProduct,
      ...existingArray.slice(index + 1),
    ];
    localStorage.setItem("products", JSON.stringify(newArray));
  };

  const handleWorkshopChange = (field, value) => {
    const updatedProduct = {
      ...myObject,
      workshop: { ...myObject?.workshop, [field]: value },
    };
    updateChangesLocal(updatedProduct);
    setMyObject(updatedProduct);
    if (updatedProduct?.workshop.workshopType == "Analog") {
      console.log("why am i not moved");
      navigate(
        `/${updatedProduct?.name}/${updatedProduct?.workshop.workshopType}/${updatedProduct?.id}/location`
      );
    }
    console.log(myObject);
  };

  useEffect(() => {
    // const myObject = JSON.parse(localStorage.getItem("products"))[productId];
    if (
      myObject?.name === "MARKENENTWICKLUNG" ||
      myObject?.name === "VISIONSENTWICKLUNG"
    ) {
      setPage(2);
    }
    console.log(myObject?.workshop.workshopType);
  }, [handleWorkshopChange]);

  const handleWorkshopButton = (value) => {
    const updatedObject = {
      ...product,
      workshop: {
        ...product.workshop,
        moderatorPrice: 0,
        workshopLocationPrice: 0,
      },
    };
    updateChangesLocal(updatedObject);
    navigate(`/${myObject.name}/workshop/${myObject.id}/modules`);
  };

  return (
    <>
      <Header />
      {page === 1 && (
        <div className="workshop-question-container">
          <p className="workshop-question-title">
            WOULD YOU LIKE TO HAVE A WORKSHOP?
          </p>
          <div className="workshop-question-buttons">
            <button
              className="workshop-question-btn"
              onClick={() => setPage(2)}
            >
              YES
            </button>
            <button
              className="workshop-question-btn"
              onClick={() => handleWorkshopButton()}
            >
              NO{" "}
            </button>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="products-section-wrapper products-section-wrapper--top">
          <h3>W??HLE DIE ART DES WORKSHOPS</h3>
          <div className="products-container product-container-top">
            <div
              className="product"
              onClick={() => handleWorkshopChange("workshopType", "Digital")}
            >
              <img src={digitalImg} />
              <p className="product-name product-name--workshop">DIGITAL</p>
            </div>
            <div
              className="product"
              onClick={() => handleWorkshopChange("workshopType", "Analog")}
            >
              <img src={analogImg} />
              <p className="product-name product-name--workshop">ANALOG</p>
            </div>
            <div
              className="product"
              onClick={() => handleWorkshopChange("workshopType", "Hybrid")}
            >
              <img src={hybridImg} />
              <p className="product-name product-name--workshop">HYBRID</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductType;

// if (updatedProduct.workshop.workshopType == "Analog") {
//   navigate(
//     `/${updatedProduct.name}/${updatedProduct.workshop.workshopType}/${updatedProduct.id}/location`
//   );
// } else {
//   navigate(
//     `/${updatedProduct.name}/${updatedProduct.workshop.workshopType}/${updatedProduct.id}/modules`
//   );
// }
