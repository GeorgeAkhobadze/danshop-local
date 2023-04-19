import "./landingPage.css";
import "../index.css";
import { useNavigate } from "react-router";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./header/header";
const LandingPage = () => {
  // const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(".landing-heading-div", {
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.3,
      delay: 0.7,
    });
    gsap.from(".landing-subtext", { opacity: 0, duration: 1, delay: 1.6 });
    gsap.from(".landing-btn", { opacity: 0, duration: 1, delay: 2.3 });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="landing">
        <div className="landing-heading">
          <h1>
            <div className="landing-heading-div">HERZLICH WILLKOMMEN</div>
          </h1>
          <h1>
            <div className="landing-heading-div">IM DAN SHOP</div>
          </h1>
        </div>

        <p className="landing-subtext">
          Der dan shop wird dich dabei unterstützen in nur wenigen Schritten ein
          Angebot zu erstellen und intuitiv mit dem Kunden zu kollaborieren
        </p>
        <button
          className="landing-btn"
          onClick={() => navigate("/company_list")}
        >
          Los geht’s
        </button>
      </div>
    </>
  );
};

export default LandingPage;
