import "./companyList.css";
import { useNavigate } from "react-router";
import company1 from "../assets/company-1.svg";
import company2 from "../assets/company-2.svg";
import company3 from "../assets/company-3.svg";
import company4 from "../assets/company-4.svg";
import company5 from "../assets/company-5.svg";
import { useEffect, useState } from "react";
import Header from "./header/header";
import gsap from "gsap";

const CompanyList = () => {
  useEffect(() => {
    gsap.to(".landing-heading-div", {
      duration: 0.5,
      y: 0,
      stagger: 0.3,
      delay: 0.7,
    });
  }, []);

  const navigate = useNavigate();
  const [companySelected, setCompanySelected] = useState(false);

  const handleCompanyClick = () => {
    setCompanySelected(true);
  };

  useEffect(() => {
    if (companySelected) {
      gsap.to(".landing-heading-div", {
        duration: 0.5,
        y: 0,
        stagger: 0.3,
        delay: 0.7,
      });
    }
  }, [companySelected]);

  const handleCustomerType = (value) => {
    localStorage.setItem("customerType", value);
    navigate("/products");
  };
  return (
    <>
      <Header />
      <div className="company-list--wrapper">
        {!companySelected && (
          <>
            <div className="landing-heading">
              <h2>
                <div className="landing-heading-div">
                  FÜR WELCHES UNTERNEHMEN
                </div>
              </h2>
              <h2>
                <div className="landing-heading-div">
                  MÖCHTEST DU EIN ANGEBOT ERSTELLEN?
                </div>
              </h2>
            </div>

            <div className="company-list">
              <div
                onClick={() => handleCompanyClick()}
                className="company-card"
              >
                <img src={company1} />
              </div>
              <div
                onClick={() => handleCompanyClick()}
                className="company-card"
              >
                <img src={company2} />
              </div>
              <div
                onClick={() => handleCompanyClick()}
                className="company-card"
              >
                <img src={company3} />
              </div>
              <div
                onClick={() => handleCompanyClick()}
                className="company-card"
              >
                <img src={company4} />
              </div>
              <div
                onClick={() => handleCompanyClick()}
                className="company-card"
              >
                <img src={company5} />
              </div>
              
            </div>
          </>
        )}
        {companySelected && (
          <>
            <div className="landing-heading">
              <h2>
                <div className="landing-heading-div">
                  FÜR WELCHES UNTERNEHMEN
                </div>
              </h2>
              <h2>
                <div className="landing-heading-div">
                  MÖCHTEST DU EIN ANGEBOT ERSTELLEN?
                </div>
              </h2>
            </div>
            <div className="company-list">
              <div
                onClick={() => handleCustomerType("PURE")}
                className="customertype-card customertype-card-1"
              >
                <div className="customertype-text-container">
                  <p className="customertype-text-title">PURE</p>
                  <p className="customertype-text-description">
                    Das Angebot für unsere Pure-Kunden orientiert sich stark an
                    einem optimalen Preis-Leistungs-Verhältnis und bietet somit
                    nur eine minimale Möglichkeit für individuelle Anpassungen.
                    Unser Pure_Kunden lieben Prozesssicherheit und diese wollen
                    wir ihnen geben.
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleCustomerType("PASSION")}
                className="customertype-card customertype-card-2"
              >
                {" "}
                <div className="customertype-text-container">
                  <p className="customertype-text-title">PASSION</p>
                  <p className="customertype-text-description">
                    Das Angebot für unsere Pure-Kunden orientiert sich stark an
                    einem optimalen Preis-Leistungs-Verhältnis und bietet somit
                    nur eine minimale Möglichkeit für individuelle Anpassungen.
                    Unser Pure_Kunden lieben Prozesssicherheit und diese wollen
                    wir ihnen geben.
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleCustomerType("PERFORM")}
                className="customertype-card customertype-card-3"
              >
                <div className="customertype-text-container">
                  <p className="customertype-text-title">PERFORM</p>
                  <p className="customertype-text-description">
                    Das Angebot für unsere Pure-Kunden orientiert sich stark an
                    einem optimalen Preis-Leistungs-Verhältnis und bietet somit
                    nur eine minimale Möglichkeit für individuelle Anpassungen.
                    Unser Pure_Kunden lieben Prozesssicherheit und diese wollen
                    wir ihnen geben.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CompanyList;
