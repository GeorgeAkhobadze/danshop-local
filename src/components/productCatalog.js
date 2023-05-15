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

  const createProduct = (product, description) => {
    if (products === null) {
      localStorage.setItem("products", JSON.stringify([]));
    }
    const existingObject = JSON.parse(localStorage.getItem("products"));
    let price = 5000
    if(product == "SCOPING_WORKSHOP") {
      price = 8500
    } else if(product == "VISIONS_WORKSHOP") {
      price = 13000
    } else if(product == "INNOVATIONS_WORKSHOP") {
      price = 14000
    }
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
      priceAmount: price,
      isInCart: false,
     description: description,
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
        <div className="products-section-wrapper products-section-wrapper--top ">
          <h3>PRODUKTE</h3>
          <p>
            Über die Pakete hast du die Möglichkeit deine Angebotsbausteine zu
            konfigurieren und dir dein Angebot effizient individuell
            zusammenstellen. Der Einsatz dieser Pakete wird für Passion und
            Performance Kunden empfohlen.
          </p>
          <div className="company-list ">
              <div
                onClick={() => createProduct("MARKENENTWICKLUNG", "Ausgehend von einer Positionierung im Wettbewerbsumfeld entwicklen wir im Rahmen eines kollaborativen Workshops eine starke und einzigartige Marke zur Vermarktung")}
                className="customertype-card product-card-1"
              >
                <div className="customertype-text-container">
                  <p className="customertype-text-title">MARKENENTWICKLUNG</p>
                  <p className="customertype-text-description  product-text-description ">
                  Ausgehend von einer Positionierung im Wettbewerbsumfeld entwicklen wir im Rahmen eines kollaborativen Workshops eine starke und einzigartige Marke zur Vermarktung
                  </p>
                </div>
              </div>
              <div
                onClick={() => createProduct("Corporate Design", "Wir entwickeln eine Corporate Identity & Design um die Marke mit Leben zu füllen und ihr ein Gesicht zu geben. ")}
                className="customertype-card product-card-2"
              >
                {" "}
                <div className="customertype-text-container">
                  <p className="customertype-text-title">CORPORATE DESIGN</p>
                  <p className="customertype-text-description product-text-description">
                  Wir entwickeln eine Corporate Identity & Design um die Marke mit Leben zu füllen und ihr ein Gesicht zu geben. 
                  </p>
                </div>
              </div>
              <div
                onClick={() => createProduct("VISIONSENTWICKLUNG", "Wir entwickeln im Rahmen eines kollaborativen Workshops eine Vision als zukünftiger Kompass für das Projekt.")}
                className="customertype-card product-card-3"
              >
                <div className="customertype-text-container">
                  <p className="customertype-text-title">VISIONSENTWICKLUNG</p>
                  <p className="customertype-text-description product-text-description">
                  Wir entwickeln im Rahmen eines kollaborativen Workshops eine Vision als zukünftiger Kompass für das Projekt.
                  </p>
                </div>
              </div>
            </div>
            <div className="company-list company-list-product">
              <div
                onClick={() => createProduct(`SCOPING_WORKSHOP`, "Ziel des Scoping Workshops ist es gemeinsam das Feld zu sichten und zu analysieren.")}
                className="customertype-card product-card-4"
              >
                <div className="customertype-text-container">
                  <p className="customertype-text-title">SCOPING-WORKSHOP</p>
                  <p className="customertype-text-description  product-text-description ">
                  Ziel des Scoping Workshops ist es gemeinsam das Feld zu sichten und zu analysieren.

                  </p>
                </div>
              </div>
              <div
                onClick={() => createProduct(`VISIONS_WORKSHOP`, "Ziel des Visions-Workshops ist es eine übergreifende Vision zu entwickeln.")}
                className="customertype-card product-card-5"
              >
                {" "}
                <div className="customertype-text-container">
                  <p className="customertype-text-title">VISIONS-WORKSHOP</p>
                  <p className="customertype-text-description product-text-description">
                  Ziel des Visions-Workshops ist es eine übergreifende Vision zu entwickeln.
                  </p>
                </div>
              </div>
              <div
                onClick={() => createProduct(`INNOVATIONS_WORKSHOP`, "Ziel des Innovations-Workshops ist es Lösungsansätze für ein konkrete Problemstellung zu entwickeln.")}
                className="customertype-card product-card-6"
              >
                <div className="customertype-text-container">
                  <p className="customertype-text-title">INNOVATIONS-WORKSHOP</p>
                  <p className="customertype-text-description product-text-description">
                  Ziel des Innovations-Workshops ist es Lösungsansätze für ein konkrete Problemstellung zu entwickeln.
                  </p>
                </div>
              </div>
            </div>

          <div className="products-container">

          </div>
        </div>

      </div>
    </>
  );
};

export default ProductCatalog;
