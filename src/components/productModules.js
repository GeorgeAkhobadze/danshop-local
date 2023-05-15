import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "./header/header";
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
              title: "Grundlagenermittlung",
              module: [
                {
                  name: "Markenaudit inkl. Kickoff (digital) ",
                  hasCheckbox: false,
                  price: 10000,
                  checkbox: true,
                  list: [
                    "• Einholung, Sichtung und Analyse der zur Verfügung stehenden bzw. gestellten Informationen und Arbeitsmaterialen für ein umfassendes Verständnis des Status Quo und der Rahmenbedingungen des Projektes. Die Unterlagen sind vom Auftraggeber an dp zu übergeben, z.B.",
                    "• Strategie, Wettbewerbsumfeld, Kommunikation",
                    "• Corporate Design Richtlinien (Manuals, Guidelines) & Elemente, (Logos, Schriften, Farbwerte, …)",
                    "• Kommunikationselemente wie Printmedien, Online-Kanäle, Digitalmedien, Messeauftritte, POS-Material etc.",
                    "• Abstimmung der ersten Erkenntnisse mit dem Kunden per Telefon / Videokonferenz als Kick-Off Termin oder Scoping Session",
                  ],
                  result:
                    "Ergebnis: dp verfügt nach Sichtung und Auswertung der Unterlagen über ein umfassendes Verständnis des Status Quo und der Rahmenbedingungen des Projektes und dient als Basis für den weiteren Projektverlauf.",
                },
                {
                  name: "Benchmark-Impuls",
                  price: 5200,
                  hasCheckbox: false,
                  checkbox: true,
                  list: [
                    "• Analyse von markenprägenden Prinzipien von Wettbewerbern (Best Practice)",
                    "• Ableiten von Leranings zur integration der Markentwicklung (Was macht andere Marken eerfolgreich, was können wir besser machen?)",
                    "• Daraus ableiten von Positionierungsabsätzen und Alleistellungsmerkmal für den Workshop",
                  ],
                },
                {
                  name: 'Nutzerinterviews',
                  hasCheckbox: true,
                  price: 0,
                  hasInput: true,
                  checkbox: false,
                  interviewValue: '4',
                  interviewCount: [{count: 4, price: 9000}, {count: 6, price: 9300}, {count: 9, price: 9600}]
                },
                {
                  name: 'Stakeholderinterviews',
                  hasCheckbox: true,
                  price: 0,
                  hasInput: true,
                  checkbox: false,
                  interviewValue: '3',
                  interviewCount: [{count: 4, price: 9000}, {count: 6, price: 9300}, {count: 9, price: 9600}]
                }
              ],
            },
            {
              title: "Marken-Workshop",
              module: [
                {
                  name: "Vorbereitung",
                  list: [
                    "• Methodische und Inhaltliche Vorbereitung des Workshops auf Basis und unter Berücksichtigung der Ergebnisse der Grundlagenermittlung",
                    "• Erstellung und Aufbereitung der notwendigen Workshop-Materialien",
                    "• Abstimmung des Ablaufs und der Agenda mit dem Kunden",
                    "• Verortung im Wettbewerbsumfeld: Diskussion der Ziel-Positionierung im Angebotsumfeld der Marke(n)",
                    "• Erarbeitung der rationalen und emotionalen Marken-Benefits: Clustern der Mehrwerte, die die Marke(n) ihren Kommunikationspartnern bietet/n",
                    "• Recherche und Betrachtung von relevanten Trends und Best Practices sowie Entwicklungen im jeweiligen Geschäftsfeld anhand von Desktopresearch",
                    "• Strukturierung der relevanten Trends, zugehöriger Phänomene und Benchmarks ",
                    "• Erarbeitung von Zielgruppen-Personas: Identifikation zentraler Bedürfnisse der Zielgruppen für die Marke(n)",
                  ],
                  hasCheckbox: false,
                  price: 14000,
                  checkbox: true,
                },
                {
                  name: "Durchführung: Strategie & Positionierung",
                  note: "Ziel: Herausarbeitung der Einzigartigkeit der Marke.",
                  list: [
                    "• Besprechung der Inhaltde und Learnings aus der Grundlagenermittlung",
                    "• Formulierung, Abstimmung und Verabschiedung der Positionierung",
                    "• Gemeinsame Erarbeitung und Formulierung eines zentralen Markenkerns und dazugehöriger Markenwerte auf Basis der Unternehmensmission & -vision sowie Markenpositionierung",
                    "• Gemeinsame Entwicklung und Finalisierung von Zielgruppen und zentraler Bedürfnisprofile",
                    "• Erarbeitung und Formulierung von Vision, Purpose und Mission Statement",
                    "• Diskussion und Abgleich zentraler Unternehmenswerte",
                    "• Erarbeitung der Brand-Story und Ableitung relevanter Marken-Botschaften",
                  ],
                  hasCheckbox: false,
                  checkbox: null,
                },
                {
                  name: "Nachbereitung",
                  list: [
                    "• Ausarbeitung Leitplanken der Markenstrategie",
                    "• Ausarbeitung und Verabschiedung des Markenleitbildes im Hinblick auf",
                    "• Markenmodell",
                    "• Markendifferenzierung",
                    "• Markenrelevanz",
                    "• Markenvision",
                    "• Wettbewerbspositionierung",
                  ],
                  result:
                    "Grafische und inhaltlich aufgearbeitete Dokumentation des Workshops und der gemeinsam erarbeiteten Ergebnisse, in Form einer Präsentation, ca. xx- xx Seiten.",
                },
              ],
            },
            {
              title: "Deliverable",
              module: [
                {
                  name: "Präsentationsdokument mit ausgearbeiteten Inhalten der Markenbildung",
                  list: [
                    "• Präsentationdokument/-Booklet mit allen augearbeiteten Inhalten zur Markenbildung",
                  ],
                  hasCheckbox: false,
                  checkbox: true,
                  price: 7000,
                },
                {
                  name: "Markenarchitektur",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Product Naming",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Product Logo",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Corporate Identity",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 200,
                },
                {
                  name: "Kommunikationsanalyse",
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

            // {
            //   title: "Audit",
            //   module: [
            //     {
            //       name: "Wettbewerbsanalyse",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Trend-und Benchmarkanalyse",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Zilgruppananalyse",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Design Audit",
            //       hasCheckbox: true,
            //       checkbox: null,
            //       price: 200,
            //     },
            //   ],
            // },
            // {
            //   title: "Markenentwicklung",
            //   module: [
            //     {
            //       name: "Mission, Vision, Purpouse",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     { name: "Markenmodell", hasCheckbox: false, checkbox: null },
            //     { name: "Markenkern", hasCheckbox: false, checkbox: null },
            //     { name: "Markenwerte", hasCheckbox: false, checkbox: null },
            //     { name: "Positionierung", hasCheckbox: false, checkbox: null },
            //     { name: "Brand Story", hasCheckbox: false, checkbox: null },
            //     {
            //       name: "Markenarchitektur",
            //       hasCheckbox: true,
            //       checkbox: null,
            //       price: 200,
            //       note: "Ziel: Die Struktur der Beziehungen der einzelnen Marken innerhalb eines Unternehmens werden sichtbar und verständlich dargestellt. ",
            //       list: [
            //         "•	Darstellung und Diskussion der aktuellen Markenarchitektur des Kunden",
            //         "•	Vorstellung und Besprechung unterschiedlicher Varianten eines Markenmodells",
            //       ],
            //     },
            //     {
            //       name: "Produktportfolio",
            //       hasCheckbox: true,
            //       checkbox: null,
            //       price: 200,
            //     },
            //     {
            //       name: "Impulsvortrag",
            //       hasCheckbox: true,
            //       checkbox: null,
            //       price: 200,
            //     },
            //   ],
            // },
            // {
            //   title: "Allgemeine Leistungen Nachbereitung/ Dokumentation",
            //   module: [
            //     {
            //       name: "Aufbereitung & Verdichtung WS-Ergebnisse",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Handlungsempfehlungen",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Fazit & Next Steps",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Gemeinsame Durchsprache der Ergebnisse via ViKo",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "1 Korrekturschleife / Einarbeitung Feedback",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Bereitstellung der Daten",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "WO werden die Daten bereitgestellt",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //     {
            //       name: "Medium --> Foto dokumentation / PP-Präsenation",
            //       hasCheckbox: false,
            //       checkbox: null,
            //     },
            //   ],
            // },
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
                  name: "Grundlagenermittlung (Quick Check)",
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
      } else if (product.name === "Corporate Design") {
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
              title: "Grundlagenwermittlung",
              module: [
                {
                  name: "Grundlagenermittlung inkl. Kickoff (digital)",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 5400,
                },
                {
                  name: "Analytisches Design-Audit",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 6300,
                },
              ],
            },
            {
              title: "Design-Workshop",
              module: [
                {
                  name: "Vorbereitung",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 13000,
                  list: [
                    "•	Methodische und Inhaltliche Vorbereitung des Workshops auf Basis und unter Berücksichtigung der Ergebnisse der Grundlagenermittlung ",
                    "•	Erarbeitung von 2 Designrouten als Arbeitsgrundlage für den Workshop",
                    "•	Erstellung und Aufbereitung der notwendigen Workshop-Materialien ",
                    "•	Abstimmung des Ablaufs und der Agenda mit dem Kunden",
                  ],
                },
                {
                  name: "Durchführung",
                  hasCheckbox: false,
                  checkbox: null,
                  list: [
                    "•	Besprechung der Inhaltde und Learnings aus der Grundlagenermittlung",
                    "•	Vorstellung und gemeinsame Abstimmung der Designrouten im Workshop",
                    "•	Evaluirung der zwei vorbereiteten, unterschiedlichen Designrouten in Form und Ableitung erster Design-Entwürfe inkl. jeweils erster Anwendungsbeispiele (z.B. Visitenkarten, Print-Medien, Startseite einer Webseite)",
                    "•	Gemeinsame Vertifung der Design-Anätze zur Festlegung der Visual-Identity",
                    "•	Eine Korrekturschleife    ",
                  ],
                },
                {
                  name: "Nachbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                  list: [
                    "•	Grafische und inhaltlich aufgearbeitete Dokumentation des Workshops und der gemeinsam erarbeiteten Ergebnisse, in Form einer Präsentation, ca. xx- xx Seiten. ",
                  ],
                },
              ],
            },
            {
              title: "Deliverable",
              module: [
                {
                  name: "Aufbereitung/Zusammenfassung markenprägende Design-Elemente",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 8000,
                  note: "Zusammenfassung und Aufbereitung der im Workshop verabschiedeten markenprägenden Elemente als Basis der Ausarbeitung des Corporate Designs in Form einer Präsentation (Booklet)",
                },
                {
                  name: "Überführung in Brand Book",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 0,
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
              title: "Grundlagenermittlung",
              module: [
                {
                  name: "Audit & Grundlagenermittlung inkl. Ortsbegehung",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 9500,
                  list: [
                    "•  Grundlagenermittlung, inkl. Einholung, Sichtung und Auswertung aller vom Kd. zu Verfügung gestellten (Planungs-) Unterlagen, inkl. Konzeptansätze des ggf. involvierten Architekturbüros",
                    "•	Erarbeitung des Status Quo und der Rahmenbedingungen des Projektes",
                    "•	Begehung des Ortes und der Umgebung zum eingehenden Verständnis der örtlichen Ausgangssituation",
                    "•	Betrachtung der Status Quo der Außenkommunikation über das Projekt",
                  ],
                },
                {
                  name: "Umfeldanalyse",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 4500,
                  list: [
                    "•	Aufbauend auf und ergänzend zu bereits vom Kunden durchgeführte Analysen und Studien, Erarbeitung einer Standortanalyse nach o.g. Begehung",
                    "•	Analyse Mikro- & Makro-Standort",
                    "•	SWOT-Analyse, d.h. Darstellung der Chancen und Risiken oder ggf. erster Impuls zur Bedarfsermittlung für einzelne Assetklassen (z.B. Wohnen, Büro, etc.) auf Basis von bereits bestehenden Studien Seitens des Kunden und Ergänzung durch Erkenntnisse seitens dp",
                  ],
                },
                {
                  name: "Trend- und Benchmark-Impuls",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 5500,
                  list: [
                    "•	Recherche und Betrachtung von relevanten Trends und Best Practices sowie Entwicklungen im jeweiligen Geschäftsfeld anhand von Desktopresearch (Fachmagazine, Websites, frei verfügbare Studien etc.)",
                    "•	Strukturierung der relevanten Trends, zugehöriger Phänomene und Benchmarks ",
                    "•	Betrachung von Vergleichsprojekten und Ableiten von Learnings für den weiteren Projektverlauf",
                  ],
                },
                {
                  name: "Architectual Audit",
                  hasCheckbox: true,
                  price: 0,
                  checkbox: false,
                },
                {
                  name: 'Nutzerinterviews',
                  hasCheckbox: true,
                  price: 0,
                  hasInput: true,
                  checkbox: false,
                  interviewValue: '4',
                  interviewCount: [{count: 4, price: 9000}, {count: 6, price: 9300}, {count: 9, price: 9600}]
                },
              ],
            },
            {
              title: "Visions-Workshop",
              module: [
                {
                  name: "Vorbereitung",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 14600,
                  list: [
                    "•	Methodische und Inhaltliche Vorbereitung des Workshops auf Basis und unter Berücksichtigung der Ergebnisse der Grundlagenermittlung",
                    "•	Erstellung und Aufbereitung der notwendigen Workshop-Materialien",
                    "•	Erstellung von 2 Design-Routen für die wietere Projektkommunikation zur gemeinsamen Evaluierung im Workshop",
                    "•	Abstimmung des Ablaufs und der Agenda mit dem Kunden",
                  ],
                },
                {
                  name: "Durchführung",
                  hasCheckbox: false,
                  checkbox: null,
                  list: [
                    "•	Besprechung der Inhaltde und Learnings aus der Grundlagenermittlung",
                    "•	Gemeinsame Erarbeitung und Verabschiedung eines Projektleitbildes, das bei der kreativen und organisatorischen Gestaltung zukünftiger Maßnahmen als Grundlage dient.",
                    "•	Gemeinsame Formulierung einer Projektvision und eines Gesamtnarratives",
                    "•	Gemeinsame Erarbeitung und Finalisierung der Vision in klarer Abgrenzung zu Wettbewerbern im Einzugsgebiet",
                    "•	Zusammenführung der Ergebnisse in Form einer emotionalisierten Storyline",
                    "•	Evaluierung und Verabschiedung einer Design-Route",
                  ],
                },
                {
                  name: "Nachbereitung",
                  hasCheckbox: false,
                  checkbox: null,
                  list: [
                    "•	Grafische und inhaltlich aufgearbeitete Dokumentation des Workshops  ",
                    "•	Besprechung der Workshop-Dokumentation per Videokonferenz",
                  ],
                },
              ],
            },
            {
              title: "Deliverable",
              module: [
                {
                  name: "Erstellung eines Pitch Deck CI: dp oder Kunden CI",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 14800,
                },
                {
                  name: "Übertragung in Mini CI",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 0,
                },
              ],
            },
            {
              title: "Addons",
              module: [
                {
                  name: "Product Naming",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 8000,
                },
                {
                  name: "Product Logo",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 13000,
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
      } else if(product.name === "SCOPING_WORKSHOP") {
        const updatedObject = {
          ...product,
          modules: [
            {
              title: "Scoping-Workshop",
              module: [
                {
                  name: "Gemeinsame Definition des Ergebnisses des Gesamtprozesses sowie der einzelnen Prozessschritte und der jeweiligen Deliverables sowie deren schriftliche Festsetzung",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Erarbeitung eines detaillierten Briefing Dokuments aller Leistungen inkl. Beschreibung des Leistungsumfangs",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Festlegung der Zielsetzung des Projektes inkl. Timing",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Festlegung der Chancen und Risiken des Projekts",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
              ],
            },
            {
              title: "Deliverable",
              module: [
                {
                  name: "Aufbereitung der Analyse & Ausgefüllter Gameplan",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Definition von Handlungsfelder",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Abgestimmte Benchmark-Kategorien, Wettbewerscluster, Nutzergruppen",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
              ],
            }
          ],
        };
        updateChangesLocal(updatedObject);
        setProduct(updatedObject);
      } else if(product.name === "VISIONS_WORKSHOP") {
        const updatedObject = {
          ...product,
          modules: [
            {
              title: "Workshopvorbeireitung",
              module: [
                {
                  name: "Mini-Kick-Off mit Kunden",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Sichtung Input der Kundenunterlagen",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Mini Benchmark Input: relevante Trends & Benchmarks",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Benchmark Input: relevante Trends & Benchmarks",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 5200,
                },
                {
                  name: "Wettbewerbs-Analyse: relevante Wettbewerber sichten & aufbereiten",
                  hasCheckbox: true,
                  checkbox: false,
                  price: 5200,
                },
              ],
            },
            {
              title: "Visions-Workshop",
              module: [
                {
                  name: "Auswahl & Vorbereitung geeigneter Methoden und Formate (Brainstorming, Ideation, Prototyping...)",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Erarbeitung einer Wettbewerbspositionierung",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Erarbeitung eines Nutzenversprechen / USP",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Erarbeitung einer Projektvision",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
              ],
            },
            {
              title: "Deliverable",
              module: [
                {
                  name: "Analytische Aufbereitung des Workshops",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Ausformuliertes Nutzenversprechen & übergreifende Projektvision",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
              ],
            }
          ],
        };
        updateChangesLocal(updatedObject);
        setProduct(updatedObject);
      }else if(product.name === "INNOVATIONS_WORKSHOP") {
        const updatedObject = {
          ...product,
          modules: [
            {
              title: "Workshopvorbeireitung",
              module: [
                {
                  name: "Mini-Kick-Off mit Kunden",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Sichtung Input der Kundenunterlagen",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Benchmark Input: relevante Trends & Benchmarks",
                  hasCheckbox: false,
                  checkbox: false,
                  price: 0,
                },
                {
                  name: "Wettbewerbs-Analyse: relevante Wettbewerber sichten & aufbereiten",
                  hasCheckbox: false,
                  checkbox: false,
                  price: 0,
                },
              ],
            },
            {
              title: "Innovations-Workshop",
              module: [
                {
                  name: "Moderation des Workshops und Teilnahme von dan pearlman Experten",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Vorstellung der Ergebnisse und Recherche innerhalb der Grundlagenermittlung",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: `Gemeinsame Ideenfindung für neue Dienstleistungen, Produkte und Geschäftsmodelle aus einer "Out-of-the-Box"-Perspektive Prototyping, Ideation, Brainstorming, Opportunity Mapping...`,
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Diskussion und Identifikation potenzieller Handlungsfelder",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Diskussion und Verabschiedung der Nutzergruppen-Personas und den jeweiligen Bedürfnissen",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
              ],
            },
            {
              title: "Deliverable",
              module: [
                {
                  name: "Analytische Aufbereitung des Workshops",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Ausblick und Definition weiterer anschließender Handlungsfelder",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
                {
                  name: "Aufbereitete & Priorisierte Prototypes / Idea Napkins",
                  hasCheckbox: false,
                  checkbox: true,
                  price: 0,
                },
              ],
            }
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
    console.log(elIndex, e.target.name, e.target.checked, 'this my sht')
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


  const handleSelect = (e, elIndex) => {
    const selectedItemIndex = e.target.selectedIndex

    const updatedModules = product?.modules.map((el, i) => {
      if (i !== elIndex) {
        return el;
      }
      const updatedModule = el?.module?.map((object) => {

        if (object.name === e.target.name) {
          return { ...object, interviewValue: e.target.value, price:  object.interviewCount[selectedItemIndex].price};
        }
        return object;
      });
      return { ...el, module: updatedModule };
    });
    updateChangesLocal({ ...product, modules: updatedModules });
    setProduct({ ...product, modules: updatedModules });
  }

  const [modulesPrice, setModulesPrice] = useState();
  useEffect(() => {
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

  useEffect(() => {

  }, [])
  return (
    <>
      <Header />
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
                  <div className="module-container">
                    <p>{el?.moduleNote}</p>
                  </div>
                  {el?.module?.map((module, index) => {
                    if (module.hasCheckbox == true) {
                      if(module?.hasInput) {
                        return(
                          <label
                          className="module-checkbox-container"
                          key={module.name}
                          title={module?.list ? module?.list?.join('\n') : module.name}
                        >
                            <input
                            type="checkbox"
                            name={module.name}
                            onClick={(e) =>
                              handleCheckbox(e, index, el.title, elIndex)
                            }
                            checked={module.checkbox}
                          />
                          <select data-amount="1000" className="module-select-input" disabled={!module.checkbox} name={module.name} onChange={(e) => handleSelect(e, elIndex)}>
                          {module.interviewCount.map((e, i) => {
                              const optionValue = `${e.count} ${module.name}`;
                              return (
                                <option
                                  value={i}
                                  selected={optionValue === module.interviewValue + module.name}
                                >
                                  {optionValue}
                                </option>
                              );
                            })}

                          </select>
                          </label>

                        )
                      } else {
                        return (
                          <label
                            className="module-checkbox-container"
                            key={module.name}
                            title={module?.list ? module?.list?.join('\n') : module.name}
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
                      }

                    }  else {
                      return (
                        <div className="module-container" title={module?.list ? module?.list?.join('\n') : module.name}>
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
            <button className="button-back" onClick={() => navigate(-1)}>
              ZURÜCK
            </button>
            <button
              className="button-next"
              onClick={() => navigate(`/${productId}/overview`)}
            >
              WEITER
            </button>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default ProductModules;
