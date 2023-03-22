import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import beidanImg from "../assets/beidan-img.jpg";
import beimkundenImg from "../assets/beimkunden-img.jpg";
import externerImg from "../assets/externer-img.jpg";
import Header from "./header/header";

const ProductLocation = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = JSON.parse(localStorage.getItem("products"))[productId];
  const [page, setPage] = useState(1);
  const [moderatorCount, setModeratorCount] = useState(1);
  const [assistantCount, setAssistantCount] = useState(1);
  const [participantCount, setParticipantCount] = useState(1);
  const [locationPrice, setLocationPrice] = useState(0);
  const [moderatorPrice, setModeratorPrice] = useState(0);

  useEffect(() => {
    if (product?.workshop.workshopLocation !== "") {
      const updatedProduct = {
        ...product,
        workshop: {
          ...product.workshop,
          workshopLocation: "",
          workshopLocationPrice: 0,
        },
      };
      updateChangesLocal(updatedProduct);
      setPage(1);
    }
    if (product?.workshop.workshopPlace === "In Berlin") {
      const updatedProduct = {
        ...product,
        workshop: {
          ...product.workshop,
          workshopLocation: "",
          workshopLocationPrice: 500,
        },
      };
      updateChangesLocal(updatedProduct);
    }
  }, []);

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
  const [participantsSubmitted, setParticipantsSubmitted] = useState(false);

  const handleWorkshopChange = (field, value) => {
    console.log(value == "At The Customer");
    if (value === "At The Customer") {
      const updatedProduct = {
        ...product,
        workshop: {
          ...product.workshop,
          workshopPlace: "In Berlin",
          workshopLocationPrice: 500,
          [field]: value,
        },
      };
      updateChangesLocal(updatedProduct);
      setPage(3);
    } else if (value === "Externer Workshop Place") {
      const updatedProduct = {
        ...product,
        workshop: {
          ...product.workshop,
          [field]: value,
          workshopLocationPrice: 0,
          workshopPlace: "",
        },
      };
      console.log(updatedProduct);
      updateChangesLocal(updatedProduct);
      setPage(2);
    } else {
      const updatedProduct = {
        ...product,

        workshop: {
          ...product.workshop,
          [field]: value,
          workshopLocationPrice: 0,
          workshopPlace: "",
        },
      };
      console.log(updatedProduct);
      updateChangesLocal(updatedProduct);
      setPage(2);
    }
  };

  const handleLocationChange = (e, field) => {
    if (e.target.value === "In Berlin") {
      const updatedProduct = {
        ...product,
        workshop: {
          ...product.workshop,
          [field]: e.target.value,
          workshopLocationPrice: 500,
        },
      };
      updateChangesLocal(updatedProduct);
    } else {
      const updatedProduct = {
        ...product,
        workshop: {
          ...product.workshop,
          [field]: e.target.value,
          workshopLocationPrice: 2200,
        },
      };
      updateChangesLocal(updatedProduct);
    }
  };

  const updateModerators = (value) => {
    setParticipantCount(value * 1);
    console.log(value > 12);
    if (value > 12) {
      setModeratorCount(2);
      setModeratorPrice(1500);
    } else if (value <= 12) {
      setModeratorCount(1);
      setModeratorPrice(0);
    }
    if (value > 24) {
      setAssistantCount(2);
    } else if (value <= 24) {
      setAssistantCount(1);
    }
  };

  const submitParticipants = () => {
    const updatedProduct = {
      ...product,
      workshop: {
        ...product.workshop,
        assistants: assistantCount,
        moderators: moderatorCount,
        participants: participantCount,
        moderatorPrice: moderatorPrice,
      },
    };
    updateChangesLocal(updatedProduct);
    setParticipantsSubmitted(true);
  };

  useEffect(() => {
    console.log(participantsSubmitted);
    if (participantsSubmitted == true) {
      navigate(
        `/${product.name}/${product.workshop.workshopType}/${product.id}/modules`
      );
    }
  }, [participantsSubmitted]);

  if (page == 1) {
    return (
      <>
        <Header />
        <div className="products-section-wrapper products-section-wrapper--top">
          <h3>WO SOLL DER WORKSHOP STATTFINDEN?</h3>
          <div className="products-container product-container-top">
            <div
              className="product"
              onClick={() =>
                handleWorkshopChange("workshopLocation", "Bei Dan")
              }
            >
              <img src={beidanImg} />
              <p className="product-name product-name--workshop">BEI DAN</p>
            </div>
            <div
              className="product"
              onClick={() =>
                handleWorkshopChange("workshopLocation", "At The Customer")
              }
            >
              <img src={beimkundenImg} />
              <p className="product-name product-name--workshop">BEIM KUNDEN</p>
            </div>
            <div
              className="product"
              onClick={() =>
                handleWorkshopChange("workshopType", "Externer Workshop Place")
              }
            >
              <img src={externerImg} />
              <p className="product-name product-name--workshop">EXTERN</p>
            </div>
          </div>
        </div>
      </>
    );
  } else if (page == 2) {
    return (
      <>
        <Header />
        <div className="products-section-wrapper products-section-wrapper--top products-section-wrapper--location">
          <h3>WIE VIELE TEILNEHMENDEN HAST DU?</h3>
          <input
            className="participant-input"
            type="number"
            placeholder="Anzahl der Teilnehmer"
            onChange={(e) => updateModerators(e.target.value)}
          ></input>
          <p>
            {moderatorCount} Moderator:in + {assistantCount} Assistenz
          </p>
          <button
            onClick={() => submitParticipants()}
            className="submit-participants-btn"
          >
            WEITER
          </button>
        </div>
      </>
    );
  } else if (page === 3) {
    return (
      <>
        <Header />
        <div className="products-section-wrapper products-section-wrapper--top products-section-wrapper--location">
          <h3>WO BEFINDET SICH DER KUNDE?</h3>
          <select
            className="participant-input"
            onChange={(e) => handleLocationChange(e, "workshopPlace")}
          >
            <option>In Berlin</option>
            <option>Außerhalb Berlins</option>
          </select>
          <button
            className="submit-participants-btn"
            onClick={() => setPage(2)}
          >
            WEITER
          </button>
        </div>
      </>
    );
  }
};

export default ProductLocation;
