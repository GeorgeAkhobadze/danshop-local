import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import modalCloseBtn from "../assets/modal-close-btn.svg";

import Header from "./header/header";
import "./productOverview.css";
const ProductOverview = () => {
  const { productId } = useParams();
  const product = JSON.parse(localStorage.getItem("products"))[productId];
  const [updateState, setUpdateState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(product);
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
  const navigate = useNavigate();
  const handleProductSubmit = (value) => {
    const newObject = {
      ...product,
      isInCart: true,
    };
    updateChangesLocal(newObject);
    if (value === true) {
      navigate("/cart");
    } else {
      navigate("/products");
    }

    setUpdateState(true);
  };
  return (
    <>
      <Header />
      {modalOpen && (
        <div className="modal-container">
          <div className="modal-background" />
          <div className="modal">
            <div
              className="modal-close-btn"
              onClick={() => setModalOpen(false)}
            >
              <img src={modalCloseBtn} />
            </div>{" "}
            <div className="modal-title">
              FANTASTISCH!
              <br /> WORKSHOP LIEGT NUN IM WARENKORB
              <br /> WAS STEHT NUN AN?
            </div>
            <div className="buttons-container buttons-container-modal">
              <button
                className="button-back button-modal"
                onClick={() => handleProductSubmit(false)}
              >
                WEITERE PRODUKTE HINZUFÜGEN
              </button>{" "}
              <button
                className="button-next button-modal"
                onClick={() => handleProductSubmit(true)}
              >
                ZUM WARENKORB
              </button>
            </div>
            <p className="modal-bottom-text">
              Der Angebotsprozess ist wie ein vor-konfektioniertes Angebot. Er
              bieten einen vordefinierten, logischen und erprobten
              Projektprozess,
            </p>
          </div>
        </div>
      )}
      <div className="product-modules-hero">
        <div className="product-modules-hero--blur"></div>
        <h3>{product?.name} OVERVIEW</h3>
      </div>
      <div className="product-modules">
        {product?.modules.map((modules) => {
          return (
            <div className="product-module-container" key={modules.title}>
              <div className="product-module-title">{modules.title}</div>
              <div className="module-list-container">
                {modules?.module?.map((moduleItem) => {
                  return (
                    <div className="module-container">
                      <div className="module-list-bullet" />
                      <p>{moduleItem?.name}</p>
                    </div>
                  );
                  console.log(moduleItem);
                })}
              </div>
            </div>
          );
        })}
        {product?.workshop.workshopLocation.length > 0 && (
          <div className="product-module-container">
            <div className="product-module-title">Workshop</div>
            <div className="module-list-container">
              <div className="module-container">
                <div className="module-list-bullet" />
                <p>{product?.workshop.assistants} Assistants</p>
              </div>
              <div className="module-container">
                <div className="module-list-bullet" />
                <p>{product?.workshop.moderators} Moderators</p>
              </div>
              <div className="module-container">
                <div className="module-list-bullet" />
                <p>{product?.workshop.participants} Participants</p>
              </div>
              <div className="module-container">
                <div className="module-list-bullet" />
                <p>{product?.workshop.workshopLocation}</p>
              </div>
              <div className="module-container">
                <div className="module-list-bullet" />
                <p>{product?.workshop.workshopType}</p>
              </div>
            </div>
          </div>
        )}
        <div className="buttons-container">
          <button className="button-back" onClick={() => navigate(-1)}>
            ZURÜCK
          </button>
          <button
            className="button-next button-next-overview"
            onClick={() => setModalOpen(true)}
          >
            zum Warenkorb hinzufügen
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
