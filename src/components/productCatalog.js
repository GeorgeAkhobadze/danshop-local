import logo from "../logo.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./productCatalog.css";
import pureBgImg from "../assets/pure-bg-img.jpg";
import product1Img from "../assets/markenentwicklung-product-img.jpg";
import product2Img from "../assets/naming-product-img.jpg";
import product3Img from "../assets/omnichannelkonzept-product-img.jpg";
import product4Img from "../assets/corporatedesign-product-img.jpg";
import product5Img from "../assets/employerbranding-product-img.jpg";
import product6Img from "../assets/audit-product-img.jpg";
import Header from "./header/header";

const ProductCatalog = () => {
  const [workshop, setWorkshop] = useState(false);
  const { productId } = useParams();
  let navigate = useNavigate();
  let products = JSON.parse(localStorage.getItem("products"));

  useEffect(() => {
    if (products === null) {
      localStorage.setItem("products", JSON.stringify([]));
    }
  }, []);

  const createProduct = (product) => {
    if (products === null) {
      localStorage.setItem("products", JSON.stringify([]));
    }
    const existingObject = JSON.parse(localStorage.getItem("products"));
    const newObject = {
      id: `${Object.keys(existingObject)?.length}`,
      name: `${product}`,
      workshop: {
        workshopLocation: "",
        workshopType: "",
        participants: "",
        moderators: "",
        assistants: "",
      },
      modules: [{}],
      catering: {},
      teamBuilding: {},
      priceAmount: 5000,
      isInCart: false,
    };
    existingObject.push(newObject);
    localStorage.setItem("products", JSON.stringify(existingObject));
    navigate(`/${product}/${newObject.id}`);
  };

  return (
    <>
      <Header />
      <div className="product-catalog-container">
        <div className="product-catalog-hero">
          <img src={pureBgImg} />
          <div className="product-catalog-hero--blur"></div>
          <div className="product-catalog-hero__title">
            Das Angebot für unsere Pure-Kunden orientiert sich stark an einem
            optimalen Preis-Leistungs-Verhältnis und bietet somit nur eine
            minimale Möglichkeit für individuelle Anpassungen. Unser Pure_Kunden
            lieben Prozesssicherheit und diese wollen wir ihnen geben.
          </div>
        </div>
        <div className="products-section-wrapper products-section-wrapper--top">
          <h3>PRODUKTE</h3>
          <p>
            Über die Pakete hast du die Möglichkeit deine Angebotsbausteine zu
            konfigurieren und dir dein Angebot effizient individuell
            zusammenstellen. Der Einsatz dieser Pakete wird für Passion und
            Performance Kunden empfohlen.
          </p>
          <div className="products-container product-container-top">
            <div
              className="product"
              onClick={() => createProduct(`MARKENENTWICKLUNG`)}
            >
              <img src={product1Img} />
              <p className="product-name">MARKENENTWICKLUNG</p>
            </div>
            <div
              className="product"
              onClick={() => createProduct(`Corporate Design`)}
            >
              <img src={product4Img} />
              <p className="product-name">CORPORATE DESIGN</p>
            </div>
            <div
              className="product"
              onClick={() => createProduct(`VISIONSENTWICKLUNG`)}
            >
              <img src={product6Img} />
              <p className="product-name">VISIONSENTWICKLUNG</p>
            </div>
            {/* <div className="product" onClick={() => createProduct(`NAMING`)}>
              <img src={product2Img} />
              <p className="product-name">NAMING</p>
            </div> */}
            {/* <div
              className="product"
              onClick={() => createProduct(`OMNICHANNEL_KONZEPT`)}
            >
              <img src={product3Img} />
              <p className="product-name">OMNICHANNEL-KONZEPT</p>
            </div> */}
          </div>
          <div className="products-container">
            {/* <div
              className="product"
              onClick={() => createProduct(`EMPLOYER_BRANDING`)}
            >
              <img src={product5Img} />
              <p className="product-name">EMPLOYER BRANDING</p>
            </div> */}
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductCatalog;
