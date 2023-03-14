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
  const [totalPrice, setTotalPrice] = useState(0);

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
    console.log(product.modules.length, "GELAGELA");
    if (product?.modules.length === 0 || product?.modules.length === 1) {
      if (product.name === "MARKENENTWICKLUNG") {
        const updatedObject = {
          ...product,
          modules: [
            {
              title: "Allgemeine Leistungen zur Vorbereitung",
              module: [
                {
                  name: "Initiales Kick-off Meeting",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Erstellung Agenda",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Raumbuchung & -vorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Materialvorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Anlegen Miro-Board",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Audit",
              module: [
                {
                  name: "Wettbewerbsanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Trend-und Benchmarkanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Zilgruppananalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Design Audit",
                  hasCheckbox: true,
                  checkbox: null,
                  price: 200,
                },
              ],
            },
            {
              title: "Markenentwicklung",
              module: [
                {
                  name: "Mission, Vision, Purpouse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                { name: "Markenmodell", hasCheckbox: false, checkbox: null },
                { name: "Markenkern", hasCheckbox: false, checkbox: null },
                { name: "Markenwerte", hasCheckbox: false, checkbox: null },
                { name: "Positionierung", hasCheckbox: false, checkbox: null },
                { name: "Brand Story", hasCheckbox: false, checkbox: null },
                {
                  name: "Markenarchitektur",
                  hasCheckbox: true,
                  checkbox: null,
                  price: 200,
                },
                {
                  name: "Produktportfolio",
                  hasCheckbox: true,
                  checkbox: null,
                  price: 200,
                },
                {
                  name: "Impulsvortrag",
                  hasCheckbox: true,
                  checkbox: null,
                  price: 200,
                },
              ],
            },
            {
              title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
              module: [
                {
                  name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Handlungsempfehlungen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Fazit & Next Steps",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "1 Korrekturschleife / Einarbeitung Feedback",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Bereitstellung der Daten",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "WO werden die Daten bereitgestellt",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Medium --> Foto dokumentation / PP-Präsenation",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
          ],
        };
        updateChangesLocal(updatedObject);
        setProduct(updatedObject);
      } else if (product.name == "NAMING") {
        const updatedObject = {
          ...product,
          modules: [
            {
              title: "Allgemeine Leistungen zur Vorbereitung",
              module: [
                {
                  name: "Initiales Kick-off Meeting",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Erstellung Agenda",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Raumbuchung & -vorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Materialvorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Anlegen Miro-Board",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Audit",
              module: [
                {
                  name: "Marke & Positionierung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Zielgruppenanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Naming (Erarbeitung)",
              module: [
                { name: "Suchfelder", hasCheckbox: false, checkbox: null },
                {
                  name: "Creative Session",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Longlist / Shortlist / Favorites",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Abgleich Markenwerte, Brandfit & Bewertungsmatrix",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Domainprüfung / Verfügbarkeit",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Korrekturschleife",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Naming (Bewertung)",
              module: [
                {
                  name: "Abgleich Markenwerte, Brandfit & Bewertungsmatrix",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Alternative Szenarien",
                  hasCheckbox: false,
                  checkbox: null,
                },
                { name: "Design Routen", hasCheckbox: false, checkbox: false },
                {
                  name: "Corporate Identity",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Rechtliche Prüfung",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
              ],
            },
            {
              title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
              module: [
                {
                  name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Handlungsempfehlungen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Fazit & Next Steps",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "1 Korrekturschleife / Einarbeitung Feedback",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Bereitstellung der Daten",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "WO werden die Daten bereitgestellt",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Medium --> Foto dokumentation / PP-Präsenation",
                  hasCheckbox: false,
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
                {
                  name: "Initiales Kick-off Meeting",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Erstellung Agenda",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Raumbuchung & -vorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Materialvorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Anlegen Miro-Board",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Audit",
              module: [
                {
                  name: "Grundlagenermitlung (Quick Check)",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Trend- und Benchmarkanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Zielgruppenanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Architectual Audit (Fotodoku)",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Identifikation Handlungsfelder",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
              ],
            },
            {
              title: "Creation",
              module: [
                { name: "easd", hasCheckbox: false, checkbox: null },
                {
                  name: "Opportunity Mapping",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Persona & Bedürfnisse Nutzer & Serviceanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Moodboard (digital)",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Identifikation von Schnittstellen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "2 Design Routen (Moodbards/Skizze)",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Touchpoint Konzept (Digital / Hybrid / Analog)",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Retail Innovation Playbook",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Erstellung 3D Modell + 3D Visualisierungen",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
                {
                  name: "Text",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
                {
                  name: "Brand Story",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
                {
                  name: "Impulsvortrag",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
              ],
            },
            {
              title: "Konzept",
              module: [
                {
                  name: "Erarbeitung einer Design Route (3-4 Visualisierung)",
                  hasCheckbox: false,
                  checkbox: null,
                },
                { name: "Grundriss", hasCheckbox: false, checkbox: null },
                {
                  name: "Moodboard (analog)",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Zukaufmöbel",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Entwicklung Mittelraummöbel",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Zusätzliche 3D Visualisierung",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Walk-through Video (Enscape)",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Erstellung 2D Ansichten (Wandabwicklung| Fassade)",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Koordination & Integration Fachplaner",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Abstimmung mit Dienstleistern Hardware (Screen & Audio)",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Decken- & Beleuchtungskonzept (gestalterisch)",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Kommunikationskonzept im Raum",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Grobkostenschätzung",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
              ],
            },
            {
              title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
              module: [
                {
                  name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Handlungsempfehlungen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Fazit & Next Steps",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "1 Korrekturschleife / Einarbeitung Feedback",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Bereitstellung der Daten",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "WO werden die Daten bereitgestellt",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Medium --> Foto dokumentation / PP-Präsenation",
                  hasCheckbox: false,
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
                {
                  name: "Initiales Kick-off Meeting",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Erstellung Agenda",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Raumbuchung & -vorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Materialvorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Anlegen Miro-Board",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Audit",
              module: [
                {
                  name: "Trend- und Benchmarkanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                { name: "Design Audit", hasCheckbox: false, checkbox: null },
              ],
            },
            {
              title: "Konzeot",
              module: [
                {
                  name: "Creative Session",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Visual Metaphors",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Abgleich Markenwerte & Brandfit",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Moodboard (digital/analog): Bildsprache / Bildwelten",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "3 Design Routen (Moodbards/Skizze)",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Ausarbeitung 1 Route CI Logo, Design elemente, Typo, Bildsprache, Anwendungen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Überführung in Brand Book",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
              ],
            },
            {
              title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
              module: [
                {
                  name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Handlungsempfehlungen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Fazit & Next Steps",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "1 Korrekturschleife / Einarbeitung Feedback",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Bereitstellung der Daten",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "WO werden die Daten bereitgestellt",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Medium --> Foto dokumentation / PP-Präsenation",
                  hasCheckbox: false,
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
                {
                  name: "Initiales Kick-off Meeting",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Erstellung Agenda",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Raumbuchung & -vorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Materialvorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Anlegen Miro-Board",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Audit",
              module: [
                {
                  name: "Marke & Positionierung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Zielgruppenanalyse Employee Audit",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Trend- und Benchmarkanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Creation",
              module: [
                {
                  name: "Interne Werte-Definition",
                  hasCheckbox: false,
                  checkbox: null,
                },
                { name: "Talent Journey", hasCheckbox: false, checkbox: null },
                {
                  name: "Persona & Bedürfnisse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Impulsvortrag",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
                {
                  name: "Purpose Vision & Mission Entwicklung",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
              ],
            },
            {
              title: "Konzept",
              module: [
                {
                  name: "Werte-Aktivierung Employee Branding Kampagne",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Hyrbid Employee Experience",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Organisations & Führungsverständnis",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "New Work Space Konzept",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
                {
                  name: "Internal Brand Story",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
              ],
            },
            {
              title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
              module: [
                {
                  name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Handlungsempfehlungen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Fazit & Next Steps",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "1 Korrekturschleife / Einarbeitung Feedback",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Bereitstellung der Daten",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "WO werden die Daten bereitgestellt",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Medium --> Foto dokumentation / PP-Präsenation",
                  hasCheckbox: false,
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
                {
                  name: "Initiales Kick-off Meeting",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Erstellung Agenda",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Raumbuchung & -vorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Materialvorbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Anlegen Miro-Board",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Audit",
              module: [
                {
                  name: "Erste Standortanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Wettbewerbsanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Trend- und Benchmarkanalyse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Architectual Audit",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
              ],
            },
            {
              title: "Visionsentwicklung",
              module: [
                {
                  name: "Positionierung & Differenzierung vom Wettbewerb",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Visionsentwicklung & übergreifende Projektvision",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Entwicklung einer Storyline",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Marken- & Projektleitbild",
                  hasCheckbox: false,
                  checkbox: null,
                },
              ],
            },
            {
              title: "Ausarbeitung",
              module: [
                {
                  name: "Erstellung eines Pitch Deck CI: dp oder Kunden CI",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Ausarbeitung & Ausgestaltung der Storyline & bebilderte Konzepttexte",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Schulterblick zur Abstimmung finales Design & Text",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Übertragung in Mini CI",
                  hasCheckbox: true,
                  price: 200,
                  checkbox: false,
                },
              ],
            },
            {
              title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
              module: [
                {
                  name: "Aufbereitung & Verdichtung WS-Ergebnisse",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Handlungsempfehlungen",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Fazit & Next Steps",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "1 Korrekturschleife / Einarbeitung Feedback",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Bereitstellung der Daten",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "WO werden die Daten bereitgestellt",
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Medium --> Foto dokumentation / PP-Präsenation",
                  hasCheckbox: false,
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
    }
  }, []);

  const handleCheckbox = (e, index, moduleTitle, elIndex) => {
    const updatedModules = product?.modules.map((el, i) => {
      if (i !== elIndex) {
        return el;
      }
      const updatedModule = el?.module?.map((object) => {
        if (object.name === e.target.name) {
          return { ...object, checkbox: e.target.checked };
        }
        return object;
      });
      return { ...el, module: updatedModule };
    });
    updateChangesLocal({ ...product, modules: updatedModules });
    setProduct({ ...product, modules: updatedModules });
  };

  const [modulesPrice, setModulesPrice] = useState();
  useEffect(() => {
    console.log("THIS IS ME PRODUCTING");
    let modulesPrice = 0;
    console.log(
      product?.priceAmount,
      product?.workshop.workshopLocationPrice,
      product?.workshop.moderatorPrice
    );
    product?.modules?.map((module) => {
      module?.module?.map((innerModule) => {
        if (innerModule?.checkbox == true) {
          modulesPrice += innerModule?.price;
        }
      });
    });
    setModulesPrice(
      modulesPrice +
        product?.priceAmount +
        product?.workshop.workshopLocationPrice +
        product?.workshop.moderatorPrice
    );
    updateChangesLocal({
      ...product,
      priceAmount:
        modulesPrice +
        product?.priceAmount +
        product?.workshop.workshopLocationPrice +
        product?.workshop.moderatorPrice,
    });
  }, [product]);
  return (
    <div className="module-wrapper">
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
                  if (module.hasCheckbox == true) {
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
                          checked={module.checkbox}
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
            <span>TOTAL:</span> {modulesPrice}€
          </p>
        </div>
        <div className="buttons-container">
          <button className="button-back">ZURÜCK</button>
          <button
            className="button-next"
            onClick={() => navigate(`/${productId}/overview`)}
          >
            WEITER
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductModules;
