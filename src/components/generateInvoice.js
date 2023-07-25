import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import Header from "./header/header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PDFDocumentMain from "./PDFDocumentMain";

const GenerateInvoice = () => {
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);

  const [data, setData] = useState({
    products: JSON.parse(localStorage.getItem("products")),
    companyAddress: "",
    ansprechspartner: "",
    clientAddress: "",
    zipAndCity: "",
    angebot: "",
    country: "",
    ortDate: "",
    stuff: "",
    introText: "",
    projektbeschreibung: "",
    danMaker: "",
    totalPrice: 0,
    totalPriceFee: 0,
    pmName: "",
    pmManager: "Projektmanager",
    timing: "",
    angebotsgrundlagen: "",
  });

  useEffect(() => {
    if (data.products !== undefined && data.products.length > 0) {
      const totalPrice = data.products.reduce((acc, product) => {
        if (product.priceAmount !== undefined) {
          return acc + product.priceAmount;
        }
        return acc;
      }, 0);
  
      const totalPriceFee = totalPrice * 0.06;
      const totalPriceWFee = totalPrice + totalPriceFee;
  
      setData((prevData) => ({
        ...prevData,
        totalPrice,
        totalPriceFee,
        totalPriceWFee,
      }));
    }
  }, [data.products]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleButton1Click = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(true);
  };

  return (
    <>
      <Header />
      <div className="pdf-container">
        <div className="company-details">
          <div className="client-details">
            <div className="client-details-inputs">
              <div className="danshop-location">
                dan pearlman Markenarchitektur | Kiefholzstraße 1 | 12435 Berlin
              </div>
              <input
                className="client-default-input"
                type="text"
                placeholder="Company Name"
                value={data.companyAddress}
                onChange={handleChange}
                name="companyAddress"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Ansprechspartner"
                value={data.ansprechspartner}
                onChange={handleChange}
                name="ansprechspartner"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Client Address"
                value={data.clientAddress}
                onChange={handleChange}
                name="clientAddress"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Zip and City"
                value={data.zipAndCity}
                onChange={handleChange}
                name="zipAndCity"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Country"
                value={data.country}
                onChange={handleChange}
                name="country"
              ></input>
            </div>
            <div className="client-details-inputs">
              <input
                className="client-default-input"
                type="text"
                placeholder="Ort/Date"
                value={data.ortDate}
                onChange={handleChange}
                name="ortDate"
              ></input>
            </div>
            <div className="client-details-inputs">
              <input
                className="client-default-input"
                type="text"
                placeholder="Angebot #"
                value={data.angebot}
                onChange={handleChange}
                name="angebot"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Kunde | Projekt | Leistung"
                onChange={handleChange}
                name="stuff"
              ></input>
            </div>
          </div>
          <div className="danshop-details">
            <p>
              dan pearlman Markenarchitektur Gesellschaft von Architekten und
              Innenarchitekten mbH
              <br />
              <br />
              Kiefholzstraße 1
              <br />
              12435 Berlin
              <br />
              <br />
              T: +49 (0) 30 53 00 05 60
              <br />
              F: +49 (0) 30 53 00 05 88
              <br />
              <br />
              office@danpearlman.com
              <br />
              www.danpearlman.com
              <br />
              <br />
              Geschäftsführer:
              <br />
              Nicole Srock.Stanley
              <br />
              Dr. Stephan Linsner
              <br />
              <br />
              HRB 74005
              <br />
              Amtsgericht Berlin-Charlottenburg
              <br />
              Ust-Idnr. DE207541440
              <br />
              <br />
            </p>
            <input
              type="text"
              className="danmaker-input"
              value={data.danmaker}
              onChange={handleChange}
              name="danMaker"
              placeholder="DanMaker Nr"
            ></input>
          </div>
        </div>

        <div className="default-text-container">
          <p className="default-text-title">Intro Text:</p>
          <textarea
            className="default-text-input"
            type="text"
            value={data.introText}
            onChange={handleChange}
            name="introText"
          ></textarea>
        </div>

        <div className="default-text-container">
          <p className="default-text-title">Projektbeschreibung:</p>
          <textarea
            className="default-text-input"
            type="text"
            value={data.projektbeschreibung}
            onChange={handleChange}
            name="projektbeschreibung"
          ></textarea>
        </div>

        <div className="default-text-container">
          <p className="default-text-title">Angebotsgrundlagen:</p>
          <textarea
            className="default-text-input"
            type="text"
            value={data.angebotsgrundlagen}
            onChange={handleChange}
            name="angebotsgrundlagen"
          ></textarea>
        </div>

        <div className="default-text-container">
          <p className="default-text-title">Timing:</p>
          <textarea
            className="default-text-input"
            type="text"
            value={data.timing}
            onChange={handleChange}
            name="timing"
          ></textarea>
        </div>

        <div className="pm-manager-inputs">
          <input
            type="text"
            className="danmaker-input pm-input"
            value={data.pmName}
            onChange={handleChange}
            name="pmName"
            placeholder="Project Manager"
          ></input>
          <select
            className="danmaker-input"
            name="pmManager"
            onChange={(e) => handleChange(e)}
          >
            <option value="Projektmeneger">Projektmanager</option>
            <option value="ProjektMenegerin">Projektmanagerin</option>
          </select>
        </div>

        <PDFDownloadLink
          className="generate-pdf-btn"
          document={<PDFDocumentMain data={data} />}
          fileName="Angebot_Dan_Pearlman.pdf"
        >
          {({ blob, url, loading, error }) =>
           loading ? "Loading document..." : "Generate PDF"
          }
        </PDFDownloadLink>
        
      </div>
    </>
  );
};

export default GenerateInvoice;
