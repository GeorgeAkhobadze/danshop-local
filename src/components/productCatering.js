import "./productCatalog.css";
import cateringImg from "../assets/catering-img.svg";
import teambuildingImg from "../assets/teambuilding-img.svg";
import "./productCatering.css";
const ProductCatering = () => {
  return (
    <div className="products-section-wrapper products-section-wrapper--top">
      <h3>WÄHLE DIE ART DES WORKSHOPS</h3>
      <div className="products-container products-container-catering product-container-top">
        <div className="product product-catering">
          <img src={cateringImg} />
          <p className="product-name product-name--workshop">CATERING</p>
        </div>
        <div className="product product-catering">
          <img src={teambuildingImg} />
          <p className="product-name product-name--workshop">TEAMBUILDING</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCatering;
