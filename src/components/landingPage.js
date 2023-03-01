import "./landingPage.css";
import "../index.css";
import { useNavigate } from "react-router";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <h1 className="landing-heading">HERZLICH WILLKOMMEN IM DAN SHOP</h1>
      <p className="landing-subtext">
        Der dan shop wird dich dabei unterstützen in nur wenigen Schritten ein
        Angebot zu erstellen und intuitiv mit dem Kunden zu kollaborieren
      </p>
      <button className="landing-btn" onClick={() => navigate("/company_list")}>
        Los geht’s
      </button>
    </div>
  );
};

export default LandingPage;
