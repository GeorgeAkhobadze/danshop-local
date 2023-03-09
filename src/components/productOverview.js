import { useNavigate, useParams } from "react-router";
import "./productOverview.css";
const ProductOverview = () => {
  const { productId } = useParams();
  const product = JSON.parse(localStorage.getItem("products"))[productId];
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
  const handleProductSubmit = () => {
    const newObject = {
      ...product,
      isInCart: true,
    };
    updateChangesLocal(newObject);
    navigate("/cart");
  };
  return (
    <>
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

        <button
          className="button-next button-next-overview"
          onClick={() => handleProductSubmit(true)}
        >
          WEITER
        </button>
      </div>
    </>
  );
};

export default ProductOverview;
