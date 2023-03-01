import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProductCreate from "./productCreate";
import "./productModules.css";
const ProductModules = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("products"))[productId]
  );
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

  useEffect(() => {
    if (product.name === "MARKENENTWICKLUNG") {
      const updatedObject = {
        ...product,
        modules: [
          {
            title: "Allgemeine Leistungen zur Vorbereitung",
            module: [
              { name: "Initiales Kick-off Meeting", checkbox: null },
              {
                name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                checkbox: null,
              },
              { name: "Erstellung Agenda", checkbox: null },
              { name: "Raumbuchung & -vorbereitung", checkbox: null },
              { name: "Materialvorbereitung", checkbox: null },
              { name: "Anlegen Miro-Board", checkbox: null },
            ],
          },
          {
            title: "Audit",
            module: [
              { name: "Wettbewerbsanalyse", checkbox: null },
              {
                name: "Trend-und Benchmarkanalyse",
                checkbox: null,
              },
              { name: "Zilgruppananalyse", checkbox: null },
              { name: "Design Audit", checkbox: false },
            ],
          },
          {
            title: "Markenentwicklung",
            module: [
              { name: "Mission, Vision, Purpouse", checkbox: null },
              { name: "Markenmodell", checkbox: null },
              { name: "Markenkern", checkbox: null },
              { name: "Markenwerte", checkbox: null },
              { name: "Positionierung", checkbox: null },
              { name: "Brand Story", checkbox: null },
              { name: "Markenarchitektur", checkbox: false },
              { name: "Produktportfolio", checkbox: false },
              { name: "Impulsvortrag", checkbox: false },
            ],
          },
          {
            title: "Darauf aufbauende Produkte",
            module: [
              { name: "Corporate Identity", checkbox: false },
              { name: "Design Routen", checkbox: false },
              { name: "Naming", checkbox: false },
            ],
          },
          {
            title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
            module: [
              {
                name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                checkbox: null,
              },
              {
                name: "Handlungsempfehlungen",
                checkbox: null,
              },
              { name: "Fazit & Next Steps", checkbox: null },
              {
                name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                checkbox: null,
              },
              {
                name: "1 Korrekturschleife / Einarbeitung Feedback",
                checkbox: null,
              },
              { name: "Bereitstellung der Daten", checkbox: null },
              { name: "WO werden die Daten bereitgestellt", checkbox: null },
              {
                name: "Medium --> Foto dokumentation / PP-Präsenation",
                checkbox: null,
              },
            ],
          },
        ],
      };
      updateChangesLocal(updatedObject);
      setProduct(updatedObject);
      console.log("yes");
    } else if (product.name == "NAMING") {
      const updatedObject = {
        ...product,
        modules: [
          {
            title: "Allgemeine Leistungen zur Vorbereitung",
            module: [
              { name: "Initiales Kick-off Meeting", checkbox: null },
              {
                name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                checkbox: null,
              },
              { name: "Erstellung Agenda", checkbox: null },
              { name: "Raumbuchung & -vorbereitung", checkbox: null },
              { name: "Materialvorbereitung", checkbox: null },
              { name: "Anlegen Miro-Board", checkbox: null },
            ],
          },
          {
            title: "Audit",
            module: [
              { name: "Marke & Positionierung", checkbox: null },
              { name: "Zielgruppenanalyse", checkbox: null },
            ],
          },
          {
            title: "Naming (Erarbeitung)",
            module: [
              { name: "Suchfelder", checkbox: null },
              { name: "Creative Session", checkbox: null },
              { name: "Longlist / Shortlist / Favorites", checkbox: null },
              {
                name: "Abgleich Markenwerte, Brandfit & Bewertungsmatrix",
                checkbox: null,
              },
              { name: "Domainprüfung / Verfügbarkeit", checkbox: null },
              { name: "Korrekturschleife", checkbox: null },
            ],
          },
          {
            title: "Naming (Bewertung)",
            module: [
              {
                name: "Abgleich Markenwerte, Brandfit & Bewertungsmatrix",
                checkbox: null,
              },
              { name: "Alternative Szenarien", checkbox: null },
              { name: "Design Routen", checkbox: false },
              {
                name: "Corporate Identity",
                checkbox: false,
              },
              { name: "Rechtliche Prüfung", checkbox: false },
            ],
          },
          {
            title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
            module: [
              {
                name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                checkbox: null,
              },
              {
                name: "Handlungsempfehlungen",
                checkbox: null,
              },
              { name: "Fazit & Next Steps", checkbox: null },
              {
                name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                checkbox: null,
              },
              {
                name: "1 Korrekturschleife / Einarbeitung Feedback",
                checkbox: null,
              },
              { name: "Bereitstellung der Daten", checkbox: null },
              { name: "WO werden die Daten bereitgestellt", checkbox: null },
              {
                name: "Medium --> Foto dokumentation / PP-Präsenation",
                checkbox: null,
              },
            ],
          },
        ],
      };
      updateChangesLocal(updatedObject);
      setProduct(updatedObject);
    } else if (product.name === "OMNICHANNEL_KONZEPT") {
      const updatedObject = {
        ...product,
        modules: [
          {
            title: "Allgemeine Leistungen zur Vorbereitung",
            module: [
              { name: "Initiales Kick-off Meeting", checkbox: null },
              {
                name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                checkbox: null,
              },
              { name: "Erstellung Agenda", checkbox: null },
              { name: "Raumbuchung & -vorbereitung", checkbox: null },
              { name: "Materialvorbereitung", checkbox: null },
              { name: "Anlegen Miro-Board", checkbox: null },
            ],
          },
          {
            title: "Audit",
            module: [
              { name: "Grundlagenermitlung (Quick Check)", checkbox: null },
              { name: "Trend- und Benchmarkanalyse", checkbox: null },
              { name: "Zielgruppenanalyse", checkbox: null },
              { name: "Architectual Audit (Fotodoku)", checkbox: false },
              { name: "Identifikation Handlungsfelder", checkbox: false },
            ],
          },
          {
            title: "Creation",
            module: [
              { name: "easd", checkbox: null },
              { name: "Opportunity Mapping", checkbox: null },
              {
                name: "Persona & Bedürfnisse Nutzer & Serviceanalyse",
                checkbox: null,
              },
              {
                name: "Moodboard (digital)",
                checkbox: null,
              },
              { name: "Identifikation von Schnittstellen", checkbox: null },
              { name: "2 Design Routen (Moodbards/Skizze)", checkbox: null },
              {
                name: "Touchpoint Konzept (Digital / Hybrid / Analog)",
                checkbox: null,
              },
              { name: "Retail Innovation Playbook", checkbox: null },
              {
                name: "Erstellung 3D Modell + 3D Visualisierungen",
                checkbox: false,
              },
              { name: "Text", checkbox: false },
              { name: "Brand Story", checkbox: false },
              { name: "Impulsvortrag", checkbox: false },
            ],
          },
          {
            title: "Konzept",
            module: [
              {
                name: "Erarbeitung einer Design Route (3-4 Visualisierung)",
                checkbox: null,
              },
              { name: "Grundriss", checkbox: null },
              { name: "Moodboard (analog)", checkbox: null },
              {
                name: "Zukaufmöbel",
                checkbox: null,
              },
              { name: "Entwicklung Mittelraummöbel", checkbox: null },
              { name: "Zusätzliche 3D Visualisierung", checkbox: false },
              { name: "Walk-through Video (Enscape)", checkbox: false },
              {
                name: "Erstellung 2D Ansichten (Wandabwicklung| Fassade)",
                checkbox: false,
              },
              {
                name: "Koordination & Integration Fachplaner",
                checkbox: false,
              },
              {
                name: "Abstimmung mit Dienstleistern Hardware (Screen & Audio)",
                checkbox: false,
              },
              {
                name: "Decken- & Beleuchtungskonzept (gestalterisch)",
                checkbox: false,
              },
              { name: "Kommunikationskonzept im Raum", checkbox: false },
              { name: "Grobkostenschätzung", checkbox: false },
            ],
          },
          {
            title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
            module: [
              {
                name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                checkbox: null,
              },
              {
                name: "Handlungsempfehlungen",
                checkbox: null,
              },
              { name: "Fazit & Next Steps", checkbox: null },
              {
                name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                checkbox: null,
              },
              {
                name: "1 Korrekturschleife / Einarbeitung Feedback",
                checkbox: null,
              },
              { name: "Bereitstellung der Daten", checkbox: null },
              { name: "WO werden die Daten bereitgestellt", checkbox: null },
              {
                name: "Medium --> Foto dokumentation / PP-Präsenation",
                checkbox: null,
              },
            ],
          },
        ],
      };
      updateChangesLocal(updatedObject);
      setProduct(updatedObject);
    } else if (product.name === "CORPORATE_DESIGN") {
      const updatedObject = {
        ...product,
        modules: [
          {
            title: "Allgemeine Leistungen zur Vorbereitung",
            module: [
              { name: "Initiales Kick-off Meeting", checkbox: null },
              {
                name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                checkbox: null,
              },
              { name: "Erstellung Agenda", checkbox: null },
              { name: "Raumbuchung & -vorbereitung", checkbox: null },
              { name: "Materialvorbereitung", checkbox: null },
              { name: "Anlegen Miro-Board", checkbox: null },
            ],
          },
          {
            title: "Audit",
            module: [
              { name: "Trend- und Benchmarkanalyse", checkbox: null },
              { name: "Design Audit", checkbox: null },
            ],
          },
          {
            title: "Konzeot",
            module: [
              { name: "Creative Session", checkbox: null },
              { name: "Visual Metaphors", checkbox: null },
              {
                name: "Abgleich Markenwerte & Brandfit",
                checkbox: null,
              },
              {
                name: "Moodboard (digital/analog): Bildsprache / Bildwelten",
                checkbox: null,
              },
              { name: "3 Design Routen (Moodbards/Skizze)", checkbox: null },
              {
                name: "Ausarbeitung 1 Route CI Logo, Design elemente, Typo, Bildsprache, Anwendungen",
                checkbox: null,
              },
              { name: "Überführung in Brand Book", checkbox: false },
            ],
          },
          {
            title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
            module: [
              {
                name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                checkbox: null,
              },
              {
                name: "Handlungsempfehlungen",
                checkbox: null,
              },
              { name: "Fazit & Next Steps", checkbox: null },
              {
                name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                checkbox: null,
              },
              {
                name: "1 Korrekturschleife / Einarbeitung Feedback",
                checkbox: null,
              },
              { name: "Bereitstellung der Daten", checkbox: null },
              { name: "WO werden die Daten bereitgestellt", checkbox: null },
              {
                name: "Medium --> Foto dokumentation / PP-Präsenation",
                checkbox: null,
              },
            ],
          },
        ],
      };
      updateChangesLocal(updatedObject);
      setProduct(updatedObject);
    } else if (product.name === "EMPLOYER_BRANDING") {
      const updatedObject = {
        ...product,
        modules: [
          {
            title: "Allgemeine Leistungen zur Vorbereitung",
            module: [
              { name: "Initiales Kick-off Meeting", checkbox: null },
              {
                name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                checkbox: null,
              },
              { name: "Erstellung Agenda", checkbox: null },
              { name: "Raumbuchung & -vorbereitung", checkbox: null },
              { name: "Materialvorbereitung", checkbox: null },
              { name: "Anlegen Miro-Board", checkbox: null },
            ],
          },
          {
            title: "Audit",
            module: [
              { name: "Marke & Positionierung", checkbox: null },
              { name: "Zielgruppenanalyse Employee Audit", checkbox: null },
              { name: "Trend- und Benchmarkanalyse", checkbox: null },
            ],
          },
          {
            title: "Creation",
            module: [
              { name: "Interne Werte-Definition", checkbox: null },
              { name: "Talent Journey", checkbox: null },
              {
                name: "Persona & Bedürfnisse",
                checkbox: null,
              },
              { name: "Impulsvortrag", checkbox: false },
              { name: "Purpose Vision & Mission Entwicklung", checkbox: false },
            ],
          },
          {
            title: "Konzept",
            module: [
              {
                name: "Werte-Aktivierung Employee Branding Kampagne",
                checkbox: null,
              },
              { name: "Hyrbid Employee Experience", checkbox: null },
              {
                name: "Organisations & Führungsverständnis",
                checkbox: null,
              },
              { name: "New Work Space Konzept", checkbox: false },
              { name: "Internal Brand Story", checkbox: false },
            ],
          },
          {
            title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
            module: [
              {
                name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                checkbox: null,
              },
              {
                name: "Handlungsempfehlungen",
                checkbox: null,
              },
              { name: "Fazit & Next Steps", checkbox: null },
              {
                name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                checkbox: null,
              },
              {
                name: "1 Korrekturschleife / Einarbeitung Feedback",
                checkbox: null,
              },
              { name: "Bereitstellung der Daten", checkbox: null },
              { name: "WO werden die Daten bereitgestellt", checkbox: null },
              {
                name: "Medium --> Foto dokumentation / PP-Präsenation",
                checkbox: null,
              },
            ],
          },
        ],
      };
      updateChangesLocal(updatedObject);
      setProduct(updatedObject);
    } else if (product.name === "VISIONSENTWICKLUNG") {
      const updatedObject = {
        ...product,
        modules: [
          {
            title: "Allgemeine Leistungen zur Vorbereitung",
            module: [
              { name: "Initiales Kick-off Meeting", checkbox: null },
              {
                name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                checkbox: null,
              },
              { name: "Erstellung Agenda", checkbox: null },
              { name: "Raumbuchung & -vorbereitung", checkbox: null },
              { name: "Materialvorbereitung", checkbox: null },
              { name: "Anlegen Miro-Board", checkbox: null },
            ],
          },
          {
            title: "Audit",
            module: [
              { name: "Erste Standortanalyse", checkbox: null },
              { name: "Wettbewerbsanalyse", checkbox: null },
              { name: "Trend- und Benchmarkanalyse", checkbox: null },
              { name: "Architectual Audit", checkbox: false },
            ],
          },
          {
            title: "Visionsentwicklung",
            module: [
              {
                name: "Positionierung & Differenzierung vom Wettbewerb",
                checkbox: null,
              },
              {
                name: "Visionsentwicklung & übergreifende Projektvision",
                checkbox: null,
              },
              {
                name: "Entwicklung einer Storyline",
                checkbox: null,
              },
              { name: "Marken- & Projektleitbild", checkbox: null },
            ],
          },
          {
            title: "Ausarbeitung",
            module: [
              {
                name: "Erstellung eines Pitch Deck CI: dp oder Kunden CI",
                checkbox: null,
              },
              {
                name: "Ausarbeitung & Ausgestaltung der Storyline & bebilderte Konzepttexte",
                checkbox: null,
              },
              {
                name: "Schulterblick zur Abstimmung finales Design & Text",
                checkbox: null,
              },
              { name: "Übertragung in Mini CI", checkbox: false },
            ],
          },
          {
            title: "Darauf aufbauende Produkte",
            module: [
              {
                name: "Markenentwicklung",
                checkbox: false,
              },
              { name: "Nutzunsgmix", checkbox: false },
              {
                name: "Experience Masterplan",
                checkbox: false,
              },
              { name: "Bird View Visualisierung", checkbox: false },
            ],
          },
          {
            title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
            module: [
              {
                name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                checkbox: null,
              },
              {
                name: "Handlungsempfehlungen",
                checkbox: null,
              },
              { name: "Fazit & Next Steps", checkbox: null },
              {
                name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                checkbox: null,
              },
              {
                name: "1 Korrekturschleife / Einarbeitung Feedback",
                checkbox: null,
              },
              { name: "Bereitstellung der Daten", checkbox: null },
              { name: "WO werden die Daten bereitgestellt", checkbox: null },
              {
                name: "Medium --> Foto dokumentation / PP-Präsenation",
                checkbox: null,
              },
            ],
          },
        ],
      };
      updateChangesLocal(updatedObject);
      setProduct(updatedObject);
    } else {
      return;
    }
  }, []);

  const handleCheckbox = (e, index, moduleTitle, elIndex) => {
    const updatedObject = product.modules.map((el) => {
      const updatedModule = el?.module.map((object) => {
        if (object.name == e.target.name) {
          return { name: object.name, checbox: e.target.checked };
        } else {
          return object;
        }
        return object;
      });
      return updatedModule[elIndex];
    });
  };

  return (
    <div>
      <div className="product-modules-hero">
        <div className="product-modules-hero--blur"></div>
        <h3>
          WELCHE MODULE MÖCHTEST DU <br />
          AUSWÄHLEN?
        </h3>
      </div>
      <div className="product-modules">
        {product?.modules?.map((el, elIndex) => {
          return (
            <div className="product-module-container" key={el.title}>
              <div className="product-module-title">{el.title}</div>
              <div className="module-list-container">
                {el?.module?.map((module, index) => {
                  if (module.checkbox !== null) {
                    return (
                      <label
                        className="module-checkbox-container"
                        key={module.name}
                      >
                        <input
                          type="checkbox"
                          name={module.name}
                          onClick={(e) =>
                            handleCheckbox(e, index, el.title, elIndex)
                          }
                        />
                        {module.name}
                      </label>
                    );
                  } else {
                    return (
                      <div className="module-container">
                        <div className="module-list-bullet" />
                        <p key={module.name}>{module.name}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
        <div className="totalamount-container">
          <p>
            <span>TOTAL:</span> 5000EUR
          </p>
        </div>
        <div className="buttons-container">
          <button className="button-back">ZURÜCK</button>
          <button className="button-next">WEITER</button>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductModules;
