import React, { useState, useRef, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Image,
  Font,
} from "@react-pdf/renderer";
import logo from "../assets/logo-pdf.png";
import Rawline from "../fonts/rawline-400.ttf";
import RawlineSemiBold from "../fonts/rawline-600.ttf";
import RawlineBold from "../fonts/rawline-700.ttf";

Font.register({
  family: "Rawline",
  fonts: [
    { src: Rawline },
    { src: RawlineSemiBold, fontWeight: 500 },
    { src: RawlineBold, fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  staticBulletText: {
    marginTop: 3,
    marginBottom: 3,
  },
  page: {
    padding: "35px 60px 80px 35px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  productTitleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  logo: {
    width: 35,
    height: 40,
  },
  header: {
    fontSize: 36,
    fontFamily: "Rawline",
    fontWeight: 600,
  },
  staticSubheader: {
    fontSize: 10,
    fontFamily: "Rawline",
    fontWeight: 600,
  },
  staticListTitleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },
  staticListContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  staticDate: {
    fontFamily: "Rawline",
    fontSize: 9,
    paddingBottom: 15,
    paddingTop: 15,
  },
  danAddress: {
    fontSize: 6,
  },
  companyLocation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  companyInformation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 25,
  },
  companyName: {
    fontSize: 9,
    fontFamily: "Rawline",
    fontWeight: 800,
    padding: "10px 0px 3px 0px",
  },
  defaultText: {
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 400,
  },

  defaultTextBold: {
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 800,
  },
  mainModuleTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 800,
  },
  productTitleNumber: {
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 800,
  },
  zipText: {
    fontSize: 8,
    fontFamily: "Rawline",
    paddingTop: 17,
  },
  offerNumber: {
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 800,
  },
  companyContact: {
    maxWidth: 130,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contactViewGap: {
    paddingBottom: 10,
  },
  companyDate: {
    paddingBottom: 25,
    fontSize: 9,
  },
  serviceDefaultContainer: {
    paddingBottom: 15,
  },
  greetingText: {
    paddingBottom: 10,
    fontSize: 8,
    fontFamily: "Rawline",
  },
  descriptionHeader: {
    backgroundColor: "#DAD9D9",
    padding: "0px 5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bulletPoint: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  note: {
    marginLeft: 10,
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 400,
  },
  bulletPointDescription: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  subBulletPointDescription: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 5,
    fontWeight: 800,
  },
  bulletPointText: {
    fontSize: 9,
  },
  serviceNote: {
    fontSize: 8,
    fontFamily: "Rawline",
    paddingTop: 15,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    right: 60,
    fontWeight: 800,
  },
  bottomAngebot: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 60,
    fontWeight: 800,
  },
  serviceDescription: {
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 800,
    padding: "15px 0px 10px 0px",
  },
  descriptionHeaderSplit: {
    display: "flex",
    flexDirection: "row",
  },
  posSplit: {
    paddingRight: 5,
  },
  posNumSplit: {
    padding: "0px 13px 0px 7px",
  },
  feeHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  descriptionContainer: {
    flex: 1,
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  feesContainer: {
    display: "flex",
    paddingBottom: 20,
    flexDirection: "column",
  },
  feeFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  honorarTitle: {
    padding: "8px 0px",
  },
  noticePadding: {
    paddingTop: 30,
  },
  signatureWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signatureSection: {
    borderTop: "1px solid black",
    flex: 1,
    marginTop: 60,
  },
  signatureSectionLeft: {
    marginRight: 15,
  },
  signatureSectionRight: {
    marginLeft: 15,
  },
  systemsCommisionedTitle: {
    paddingTop: 28,
  },
  investmentText: {
    paddingTop: 28,
  },
  colorRed: {
    backgroundColor: "red",
  },
  productWrapper: {
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  productPriceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: 150,
  },
  productListWrapper: {
    marginLeft: 15,
  },
  productPricesMapped: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondListBullet: {
    fontSize: 8,
    fontFamily: "Rawline",
    fontWeight: 400,
    marginLeft: 20,
  },
  secondListContainer: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 600,
  },
});



const PDFDocumentMain = ({ data }) => {
  const documentRef = useRef(null)

  const [secondPageCount, setSecondPageCount] = useState(0);

  const handlePageRender = (data) => {
    console.log(data)
    data.children.forEach((e) => {
      // console.log(e)
      // console.log(e.props.id)
      // if(e.props.id == "terms") {
      //   setSecondPageCount(secondPageCount + 1)

      // }
    })
  };

  console.log(secondPageCount)

  useEffect(() => {
    handlePageRender(documentRef.current)

  }, [documentRef])
  console.log(secondPageCount)
  return(
    <Document>
    <Page id="product" size="A4" style={styles.page} ref={documentRef}>
      <View style={styles.logoContainer} fixed>
        <Image src={logo} style={styles.logo} />
      </View>

      <View>
        <Text style={styles.header}>Dan Pearlman</Text>
      </View>
      <View style={styles.companyInformation}>
        <View style={styles.companyLocation}>
          <View>
            <Text style={styles.danAddress}>
              dan pearlman Markenarchitektur | KiefholzstraBe 1 | 12435 Berlin
            </Text>
            <Text style={styles.companyName}>{data?.companyAddress}</Text>
            <Text style={styles.defaultText}>{data?.ansprechspartner}</Text>
            <Text style={styles.defaultText}>{data?.clientAddress}</Text>
            <Text style={styles.zipText}>{data?.zipAndCity}</Text>
            <Text style={styles.defaultText}>{data?.country}</Text>
          </View>
          <View>
            <Text style={styles.companyDate}>{data?.ortDate}</Text>
            <Text style={styles.offerNumber}>Angebot Nr. {data?.angebot}</Text>
            <Text style={styles.defaultTextBold}>{data?.stuff}</Text>
          </View>
        </View>
        <View style={styles.companyContact}>
          <View style={styles.contactViewGap}>
            <Text style={styles.defaultText}>
              dan pearlman Markenarchitektur Gesellschaft von Architekten und
              Innenarchitekten mbH
            </Text>
          </View>
          <View style={styles.contactViewGap}>
            <Text style={styles.defaultText}>Kiefholzstraße 1</Text>
            <Text style={styles.defaultText}>12435 Berlin</Text>
          </View>
          <View style={styles.contactViewGap}>
            <Text style={styles.defaultText}>T: +49 (0) 30 53 00 05 60</Text>
            <Text style={styles.defaultText}>F: +49 (0) 30 53 00 05 88</Text>
          </View>
          <View style={styles.contactViewGap}>
            <Text style={styles.defaultText}>Office@danpearlman.com</Text>
            <Text style={styles.defaultText}>www.danpearlman.com</Text>
          </View>
          <View style={styles.contactViewGap}>
            <Text style={styles.defaultText}>Geschäftsführer:</Text>
            <Text style={styles.defaultText}>Nicole Srock.Stanley</Text>
            <Text style={styles.defaultText}>Dr. Stephan Linsner</Text>
          </View>
          <View style={styles.contactViewGap}>
            <Text style={styles.defaultText}>HRB 74005</Text>
            <Text style={styles.defaultText}>
              Amtsgericht Berlin-Charlottenburg
            </Text>
            <Text style={styles.defaultText}>Ust-Idnr. DE207541440</Text>
          </View>
          <View>
            <Text style={styles.defaultText}>{data?.danMaker}</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.serviceDefaultContainer}>
          <Text style={styles.defaultText}>{data?.introText}</Text>
        </View>

        <View style={styles.serviceDefaultContainer}>
          <>
            <Text style={styles.defaultTextBold}>Projektbeschreibung</Text>
            <Text style={styles.defaultText}>{data?.projektbeschreibung}</Text>
          </>
        </View>
        <View style={styles.serviceDefaultContainer}>
          <Text style={styles.defaultTextBold}>Angebotsgrundlagen </Text>
          <Text style={styles.defaultText}>{data?.angebotsgrundlagen}</Text>
        </View>

        <View style={styles.serviceDefaultContainer}>
          <Text style={styles.defaultTextBold}>Timing</Text>
          <Text style={styles.defaultText}>{data?.timing}</Text>
        </View>
      </View>

      <View style={styles.serviceDefaultContainer}>
        <Text style={styles.defaultTextBold}>Product List</Text>
        {data?.products?.map((product, i) => {
          let productNumber = 0;
          if (product?.isInCart == true) {
            productNumber += 1;
            return (
              <View style={styles.productWrapper}>
                <View
                  style={styles.productTitleContainer}
                  key={`${product}-${productNumber}`}
                >
                  
                  <Text style={styles.defaultTextBold}>{productNumber}.</Text>
                  <Text style={styles.defaultTextBold}>{product.name}</Text>
                </View>
                <Text style={styles.defaultText}>{product?.description}</Text>
                <View style={styles.productListWrapper}>
                  {product?.modules?.map((modules) => {
                    return (
                      <>
                    
                        <Text style={styles.mainModuleTitle}>
                          {modules?.title}
                        </Text>
                        <View>
                          {modules?.module?.map((moduleItem) => {
                    
                            if (moduleItem?.checkbox !== false) {
                              return (
                                <>
                                  <View style={styles.bulletPoint}>
                                    <View>
                                      <Text style={styles.bulletPointText}>
                                        {"\u2022" + " "}
                                      </Text>
                                    </View>
                                    <Text style={styles.defaultText}>
                                      {moduleItem?.hasInput ? `${moduleItem.interviewValue} ${moduleItem.name}` : moduleItem?.name}
                                    </Text>
                                  </View>
                                  {moduleItem?.note ? (
                                    <Text style={styles.note}>
                                      {moduleItem?.note}
                                    </Text>
                                  ) : null}
                                  <View style={styles.secondListContainer}>
                                    {moduleItem?.list
                                      ? moduleItem?.list.map((item) => {
                                          return (
                                            <Text
                                              style={styles.secondListBullet}
                                            >
                                              {item}
                                            </Text>
                                          );
                                        })
                                      : null}
                                    {moduleItem?.result ? (
                                      <Text style={styles.defaultText}>
                                        {moduleItem?.result}
                                      </Text>
                                    ) : null}
                                  </View>
                                </>
                              );
                            }
                          })}
                        </View>
                      </>
                    );
                  })}
                  <View style={styles.productPriceContainer}>
                    <Text style={styles.defaultText}>Honorarsumme netto</Text>
                    <Text style={styles.defaultText}>
                      {product?.priceAmount} €
                    </Text>
                  </View>
                </View>
              </View>
            );
          }
        })}
      </View>
      <View style={styles.serviceDefaultContainer}>
        <Text style={styles.defaultTextBold}>Honorarzusammenfassung</Text>
        <View style={styles.serviceDefaultContainer}>
          {data?.products?.map((product, i) => {
            let productCount = 0;
            if (product?.isInCart === true) {
              productCount += 1;
              return (
                <View style={styles.productPricesMapped}>
                  <Text style={styles.defaultText}>
                    {productCount} {product?.name}
                  </Text>
                  <Text style={styles.defaultText}>
                    {product?.priceAmount} €
                  </Text>
                </View>
              );
            }
          })}
        </View>
        <View style={styles.serviceDefaultContainer}>
          <View style={styles.productPricesMapped}>
            <Text style={styles.defaultText}>Honorarsumme gesamt netto</Text>
            <Text style={styles.defaultText}>{data?.totalPrice} €</Text>
          </View>
          <View style={styles.spaceBetween}>
            <Text style={styles.defaultText}>Zzgl. Nebenkostenpauschale</Text>
            <Text style={styles.defaultText}>6%</Text>
            <Text style={styles.defaultText}>{data?.totalPriceFee} €</Text>
          </View>
          <View style={styles.productPricesMapped}>
            <Text style={styles.defaultTextBold}>
              Honorarsumme netto inkl. Nebenkostenpauschale
            </Text>
            <Text style={styles.defaultTextBold}>{data?.totalPriceWFee} €</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.defaultText}>
          Alle Leistungen werden wie beschrieben angeboten. Weitere und
          zusätzliche Leistungen sind im Angebotsumfang nicht enthalten. Die
          Reisekosten für den Workshop werden nach Aufwand und gemäß Beleg
          abgerechnet.
        </Text>
        <View style={styles.serviceDefaultContainer}>
          <Text style={styles.defaultTextBold}>Zahlungsbedingungen</Text>
          <Text style={styles.defaultText}>
            Die Vertragsparteien vereinbaren eine Fälligkeit von 50% des
            Agenturhonorars zum Tage der Beauftragung sowie 50% nach Abschluss
            des Projekts.
          </Text>
        </View>
        <View style={styles.serviceDefaultContainer}>
          <Text style={styles.defaultTextBold}>
            Allgemeine Geschäftsbedingungen
          </Text>
          <Text style={styles.defaultText}>
            Es gelten die Allgemeinen Geschäftsbedingungen von dan pearlman in
            der Anlage 1 AGB zum Angebot.
          </Text>
        </View>
        <Text style={styles.defaultText}>
          Wir freuen uns auf Ihren Auftrag und verbleiben Mit freundlichen
          Grüßen
        </Text>
      </View>
      <View style={styles.signaturesContainer} wrap={false}>
        <View style={styles.signatureWrapper}>
          <View style={[styles.signatureSection, styles.signatureSectionLeft]}>
            <Text style={styles.defaultText}>Dr. Stephan Linsner</Text>
            <Text style={styles.defaultText}>Geschäftsführer</Text>
          </View>
          <View style={[styles.signatureSection, styles.signatureSectionRight]}>
            <Text style={styles.defaultText}>{data?.pmName}</Text>
            <Text style={styles.defaultText}>{data?.pmManager}</Text>
          </View>
        </View>

        <View style={styles.investmentText}>
          <Text style={styles.defaultTextBold}>Anlagen</Text>
          <Text style={styles.defaultText}>
            Anlage 1 Allgemeine Geschäftsbedingungen
          </Text>
          <Text
            style={[styles.systemsCommisionedTitle, styles.defaultTextBold]}
          >
            Angebot inkl. der Anlagen beauftragt:{" "}
          </Text>
        </View>

        <View style={styles.signatureWrapper}>
          <View style={[styles.signatureSection, styles.signatureSectionLeft]}>
            <Text style={styles.defaultText}>Ort, Datum</Text>
          </View>
          <View style={[styles.signatureSection, styles.signatureSectionRight]}>
            <Text style={styles.defaultText}>Unterschrift</Text>
          </View>
        </View>
      </View>
      <View>
        
      </View>
      <Text
        style={[styles.pageNumber, styles.defaultText]}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <Text style={[styles.bottomAngebot, styles.defaultText]} fixed>
        Angebot Nr. {data?.angebot}
      </Text>
    </Page>
    <Page id="terms" size="A4" style={styles.page}>
      <View style={styles.logoContainer} fixed>
        <Image src={logo} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.header}>Dan Pearlman</Text>
        <Text style={styles.staticSubheader}>
          ALLGEMEINE GESCHÄFTSBEDINGUNGEN
        </Text>
        <Text style={styles.staticSubheader}>
          DAN PEARLMAN MARKENARCHITEKTUR
        </Text>
        <Text style={styles.staticSubheader}>
          GESELLSCHAFT VON ARCHITEKTEN UND INNENARCHITEKTEN MBH
        </Text>
        <Text style={styles.staticDate}>Stand: Januar 2021</Text>
      </View>
      <View style={styles.staticListContainer}>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>1.</Text>
            <Text style={styles.defaultTextBold}>Geltungsbereich</Text>
          </View>
          <Text style={styles.defaultText}>
            Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für
            sämtliche Angebote und Verträge über Werk- und/oder Dienstleistungen
            sowie Architektenleistungen der dan pearlman Markenarchitektur
            Gesellschaft von Architekten und Innenarchitekten mbH (dan
            pearlman). Die AGB gelten ausschließlich und allgemeine oder
            sonstige Geschäftsbedingungen der Auftraggeber finden keine
            Anwendung, es sei denn, ihre Geltung wird ausdrücklich schriftlich
            von dan pearlman anerkannt. Neben diesen AGB können besondere
            Geschäftsbedingungen von dan pearlman ergänzend Anwendung finden. Im
            Falle eines Widerspruchs zwischen diesen AGB und den Angeboten sowie
            Verträgen über Werk- und/oder Dienstleistungen, gehen die
            individuellen Vereinbarungen in den Angeboten/ Verträgen –
            beschränkt auf die widersprüchlichen Bestandteile – vor.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>2.</Text>
            <Text style={styles.defaultTextBold}>Angebotsänderungen</Text>
          </View>
          <Text style={styles.defaultText}>
            Das Angebot von dan pearlman ist vier Wochen ab Angebotsdatum
            unverändert gültig. Änderungen und Ergänzungen bedürfen mindestens
            der Textform und sind ausdrücklich als solche zu kennzeichnen. Bei
            Änderungen, die insbesondere im Hinblick auf Konzept, Briefing,
            Fläche, Laufzeit, Fertigstellungszeit oder Umfang des Auftrages vom
            Auftraggeber gewünscht werden oder außerhalb der Verantwortung von
            dan pearlman liegen, darf dan pearlman nachkalkulieren. Für
            Leistungen, die außerhalb der Verantwortung von dan pearlman liegen,
            darf dan pearlman im Falle von Änderungen auch nach der
            Angebotsannahme nachkalkulieren.
          </Text>
        </View>

        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>3.</Text>
            <Text style={styles.defaultTextBold}>
              Leistungs-, Rüstzeiten und Verzögerungen
            </Text>
          </View>
          <Text style={styles.defaultText}>
            Die Leistungszeiten und -termine richten sich nach den
            ausdrücklichen Vereinbarungen im Angebot/Vertrag. Für die
            strukturelle und personelle Projektorganisation und
            Ressourcenplanung gilt eine Rüstzeit von zwei Wochen ab
            Angebotsunterzeichnung als vereinbart. Vom Auftraggeber gewünschte
            oder zu vertretende Verzögerungen und Wartezeiten, z.B. bei
            fehlenden, verspäteten bzw. unvollständigen Mitwirkungshandlungen
            und Informations- und Unterlagenübermittlungen, sind in der
            vereinbarten Vergütung nicht enthalten und können als zusätzliche
            Kosten entsprechend den vereinbarten Tagessätzen in Rechnung
            gestellt werden; dies gilt ebenso für Aufwendungen aufgrund dieser
            Verzögerungen und Wartezeiten.
          </Text>
        </View>

        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>4.</Text>
            <Text style={styles.defaultTextBold}>Änderungsverlangen</Text>
          </View>
          <Text style={styles.defaultText}>
            Sofern der Aufraggeber eine Änderung an den geschuldeten Leistungen
            wünscht, richtet er das Änderungsverlangen (=Change Request/CR)
            schriftlich an dan pearlman. dan pearlman prüft die Auswirkungen des
            Änderungsverlangens auf den Leistungsgegenstand, insbesondere
            hin-sichtlich Vergütung und Terminen und teilt dem Auftraggeber
            schriftlich mit, ob das Änderungsverlangen zumutbar und unter
            welchen Bedingungen es umsetzbar ist. Der Auftraggeber entscheidet
            innerhalb der von dan pearlman benannten Frist, ob er das Angebot
            zur Umsetzung des Änderungsverlangens annimmt. Ohne Einigung gilt
            der ursprünglich vereinbarte Leistungsgegenstand. Eine mangelnde
            Einigung begründet keinen Verzug bei dan pearlman. Der Auftraggeber
            trägt die Kosten für die Prüfung des Änderungsverlangens, das
            Erstellen des Änderungsvorschlags und etwaige Wartezeiten
            entsprechend der vereinbarten Tagessätze.
          </Text>
        </View>

        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>5.</Text>
            <Text style={styles.defaultTextBold}>
              Mitwirkungspflichten und Abnahme
            </Text>
          </View>
          <Text style={styles.defaultText}>
            Der Auftraggeber ist verpflichtet, die für die Erbringung der
            vereinbarten Leistungen erforderlichen Mitwirkungshandlungen
            vorzunehmen, insbesondere dan pearlman die dafür notwendigen
            Informationen und Unterlagen zeitgerecht zur Verfügung zu stellen
            sowie Zwischenabnahmen und Freigaben dem Projektplan entsprechend
            vorzunehmen. Fehlerhafte, unvollständige oder verspätete
            Mitwirkungshandlungen gehen zu Lasten des Auftraggebers und
            begründen keine mangelhafte oder verzögerte Leistung auf Seiten von
            dan pearlman. Innerhalb der Korrekturstufe und vor Produktion hat
            der Auftraggeber alle produktionsrelevanten Unterlagen und
            elektronischen Dateien, z.B. Reinzeichnungen, Plan-Unterlagen und
            andere Maßzeichnungen, Modelle, Texte („Vorlagen“) auf inhaltliche,
            formale und sachliche Richtigkeit zu prüfen. Nach erfolgter Freigabe
            der Vorlagen durch den Auftraggeber, welche auch konkludent erfolgen
            kann, ist dan pearlman von der Verantwortung für die Richtigkeit der
            Vorlagen befreit und haftet, vorbehaltlich der Bestimmungen zur
            Haftung in diesen AGB, nicht für vom Auftraggeber übersehene Fehler.
            Soweit der Auftraggeber Unterlagen und Informationen („Material“)
            zur Verfügung stellt, trägt der Auftraggeber die Verantwortung für
            dieses Material und stellt dan pearlman dahingehend von allen
            Ansprüchen Dritter frei. Dies gilt unter anderem für die Richtigkeit
            und Mangelfreiheit sowie die rechtliche Zulässigkeit des Materials.
            dan pearlman hat dahingehend keine Prüfpflichten. Insbesondere ist
            der Auftraggeber verpflichtet, die Rechtesituation zu klären und die
            entsprechenden Lizenzen zu vergüten. Der Auftraggeber ist zur
            angemessenen Sicherung aller durch dan pearlman zur Verfügung
            gestellten elektronischen Daten und physischen Unterlagen
            verpflichtet. Der Auftraggeber ist verpflichtet, die erbrachte
            Leistung innerhalb einer angemessenen Frist abzunehmen, wenn dan
            pearlman ihm die im Wesentlichen vertragsgemäße Leistung zur
            Verfügung gestellt hat. Die Leistung gilt als abgenommen, wenn der
            Auftraggeber nicht innerhalb von 10 Werktagen nach Lieferung
            widerspricht.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>6.</Text>
            <Text style={styles.defaultTextBold}>Nutzungsrechte</Text>
          </View>
          <Text style={styles.defaultText}>
            Inhalt, Reichweite und Umfang der Einräumung von Nutzungsrechten an
            den Leistungsgegen-ständen und der Übertragung von gewerblichen
            Schutzrechten sowie etwaige Beschränkungen der Nutzungsrechte in
            zeitlicher und örtlicher Hinsicht bestimmen sich grundsätzlich nach
            dem Vertragszweck. Dem Auftraggeber werden stets nur diejenigen und
            solche Nutzungsrechte eingeräumt, die er benötigt, um die
            Leistungsgegenstände bestimmungsgemäß nutzen zu können. Eingeräumt
            oder übertragen wird jeweils nur das einfache, nicht ausschließliche
            Nutzungs- und Verwertungsrecht. Nutzungs- und Verwertungsrechte an
            den Konzepten, Vorentwürfen, Varianten und Studien des endgültigen
            Werks oder an urheberrechtsfähigen Werken, die vom Kunden abgelehnt
            wurden, werden grundsätzlich nicht eingeräumt oder übertragen. Die
            Einräumung oder Übertragung der Nutzungs- und Verwertungsrechte wird
            erst mit Zahlung der gesamten vertraglich geschuldeten Vergütung
            wirksam. Eine Einräumung oder Übertragung der Nutzungsrechte an
            Dritte sowie jede Nutzung und Verwertung über den vereinbarten
            zeitlichen, räumlichen und inhaltlichen Nutzungs- und
            Verwertungsumfang hinaus ist dem Auftraggeber nur nach schriftlicher
            Zustimmung durch dan pearlman gestattet. Es ist insbesondere
            untersagt, die Leistungsgegenstände Dritten, insbesondere
            Wettbewerbern von dan pearlman, zu überlassen oder diesen Zugriff
            auf die Leistungsgegenstände zu geben, damit diese sie für den
            Auftraggeber bearbeiten oder umgestalten. Zudem erstreckt sich auch
            ein im Einzelfall individuell eingeräumtes einfaches
            Bearbeitungsrecht nicht auf Leistungsgegenstände, zu deren
            Bearbeitung oder Umgestaltung Quellcodeanalysen oder Veränderungen
            von Quellcodes erforderlich sind, es sei denn, solche Handlungen
            sind ausdrücklich gestattet worden. Die Vergütung von Nutzungs- und
            Verwertungsrechten richtet sich nach dem im Angebot und/oder den
            vertraglichen Vereinbarungen getroffenen Regelungen sowie bei
            Architektenverträgen nach den Regelungen der HOAI bzw. bei Dienst-
            oder Werkverträgen nach den Richtlinien des AGD-Tarifvertrages für
            Designleistungen. dan pearlman behält es sich vor, bei Verstößen
            gegen die Bestimmungen zu den Nutzungs- und Verwertungsrechten eine
            Vertragsstrafe in Höhe der vereinbarten bzw. nach HOAI oder nach
            AGD-Tarifvertrag üblichen Vergütung für die erweiterte Nutzungbzw.
            Verwertung geltend zu machen. Die Vertragsstrafe lässt weitere
            Ansprüche von dan pearlman auf Zahlung der entsprechenden
            Lizenzgebühr und sonstige Schadensersatzansprüche unberührt. Für den
            Fall, dass die Parteien im Angebot/Vertrag Regelungen zu den
            Nutzungsrechten getroffen haben, hat bei einer Abweichung das
            Angebot/der Vertrag Vorrang oder die vorstehende AGB Regelung zu den
            Nutzungsrechten kommt abhängig von den Regelungen im Angebot/Vertrag
            ergänzend zur Anwendung.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>7.</Text>
            <Text style={styles.defaultTextBold}>Quellcode</Text>
          </View>
          <Text style={styles.defaultText}>
            Soweit nicht ausdrücklich schriftlich vereinbart, überlässt dan
            pearlman dem Auftraggeber keinen Quellcode, also keine offenen, für
            die Weiterverarbeitung zugänglichen Dateien. Für den Fall, dass eine
            Übergabe des Quellcodes als Leistungsgegenstand vertraglich
            vereinbart ist, finden auch hier die Vereinbarungen zu
            Nutzungsrechten Anwendung. dan pearlman räumt am Quellcode in keinem
            Fall mehr oder andere Rechte ein, als hinsichtlich der anderen
            Leistungsgegenstände eingeräumt wird. Ein Bearbeitungsrecht am
            Quellcode wird grundsätzlich nicht eingeräumt.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>8.</Text>
            <Text style={styles.defaultTextBold}>
              Rechtliche Zulässigkeit und Freiheit von Rechten Dritter
            </Text>
          </View>
          <Text style={styles.defaultText}>
            Das Risiko der rechtlichen Zulässigkeit der durch dan pearlman
            erarbeiteten und durchgeführten Maßnahmen, Leistungen und Werke wird
            vom Auftraggeber getragen. Das gilt insbesondere auch für die
            Vereinbarkeit der Leistungen mit dem Daten- oder
            Verbraucherschutzrecht. Darüber hinaus haftet dan pearlman nicht für
            die patent-, geschmacks-, gebrauchs-, markenrechtliche oder sonstige
            Schutz- oder Eintragungsfähigkeit der im Rahmen des Auftrages
            gelieferten Leistungen. Die Haftung von dan pearlman für die
            Freiheit der Leistungen von Rechten Dritter ist wie folgt
            eingeschränkt: dan pearlman erbringt nach bestem Wissen und Gewissen
            Leistungen frei von Rechten Dritter. Alle Leistungen, die mit der
            Erzielung des Vertragszweckes zusammenhängen, werden – soweit nicht
            als Recht Dritter gekennzeichnet oder dies den Umständen bei
            verständiger Betrachtung zu entnehmen ist - aufgrund eigener
            kreativer Leistung erbracht, wobei dan pearlman keine Gewährleistung
            dafür übernehmen kann, dass nicht anderweitig, sei es zeitlich voran
            oder zeitlich nachgehend, ähnliche oder gleiche Ergebnisse
            entwickelt werden und gegebenenfalls auch der Versuch gestartet
            wird, derartige Ergebnisse rechtlich zu schützen. dan pearlman ist
            grundsätzlich nicht verpflichtet, Schutzrechtsregister zu überprüfen
            oder sog. Clearance Searches vorzunehmen. Soweit zum Leistungsumfang
            die Entwicklung von Namen, Titeln oder Logos gehört, wird dan
            pearlman eine allgemeine Recherche in frei zugänglichen
            Suchmaschinen vornehmen, um die Identität mit bereits bestehenden
            Titeln und Logos einzuschätzen. Dabei handelt es sich jedoch um
            keine Überprüfung auf die rechtliche Zulässigkeit oder
            Eintragungsfähigkeit von Namen, Titeln oder Logos. Eine Überprüfung
            aller von dan pearlman erbrachten Leistungen auf Freiheit von
            Rechten Dritter liegt allein im Verantwortungs-bereich des
            Auftraggebers.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>9.</Text>
            <Text style={styles.defaultTextBold}>Nebenkosten</Text>
          </View>
          <Text style={styles.defaultText}>
            Die bei der Ausführung des Auftrags entstehenden Nebenkosten werden
            pauschal mit 8% auf das gesamte Netto-Agenturhonorar berechnet und
            an den Auftraggeber weitergegeben. Zu den Nebenkosten gehören
            insbesondere Kosten für Digitale Infrastruktur, Datenhandling,
            Datenübertragungen, Vervielfältigungen von Zeichnungen und
            schriftlichen Unterlagen bis einschließlich DIN A2 sowie maximal
            drei Booklets der Präsentationsunterlagen im Format DIN A4 sowie
            Versand. Nicht in der Nebenkostenpauschale enthalten sind Kuriere
            außerhalb Berlins, Bildrechte, Reinzeichnungen, Übersetzungs- und
            Lektoratskosten, Material- und Farbmuster, umfangreiche
            Projektdokumentationen sowie externe Druckkosten und
            Vervielfältigung größer als Format DIN A2. Diese werden nach Aufwand
            und Beleg gesondert in Rechnung gestellt. Dies gilt auch für
            Fachplanerleistungen (Akustik, Brandschutz, Licht, Medien, HLS
            etc.), die nicht Bestandteil des Angebotes sind.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>10.</Text>
            <Text style={styles.defaultTextBold}>Reisekosten</Text>
          </View>
          <Text style={styles.defaultText}>
            Notwendige Reisen werden gemäß Beleg zusätzlich abgerechnet.
            Reisezeiten werden zu 100 % als Leistungszeiten gemäß den
            vereinbarten Tagessätzen abgerechnet.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>11.</Text>
            <Text style={styles.defaultTextBold}>
              Kosten und Haftung für Zulieferungen/Fremdleistungen Dritter
            </Text>
          </View>
          <Text style={styles.defaultText}>
            Im Falle einer Beauftragung von Lieferanten für Leistungen im Namen
            und auf Rechnung von dan pearlman sowie bei Auslagen für Gebühren
            wird für die damit verbundenen Risiken und Aufwendungen ein üblicher
            Abwicklungsaufschlag in Höhe von 15% der entsprechenden
            Nettoauftragssumme berechnet. dan pearlman übernimmt keine Gewähr
            für die Verbindlichkeit eines Kostenvoranschlags oder die Sach- und
            Rechtsmängelfreiheit der Fremdleistungen Dritter. Der Auftraggeber
            erhält die Nutzungsrechte an den Fremdleistungen von dem Dritten. Im
            Gegenzug räumt der Auftraggeber dan pearlman die für die
            Vertragserfüllung erforderlichen Nutzungsrechte an den
            Fremdleistungen ein.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>12.</Text>
            <Text style={styles.defaultTextBold}>
              Vergütung und Zahlungsbedingungen
            </Text>
          </View>
          <Text style={styles.defaultText}>
            Vereinbart wird die Vergütung eines Festpreises oder des Aufwandes.
            Die Vergütung nach Aufwand erfolgt in Tagessätzen pro Personentag
            auf der Basis von acht Zeitstunden ohne Berücksichtigung notwendiger
            Pausen. Über 8 Zeitstunden hinausgehender Aufwand wird anteilig
            zusätzlich abgerechnet. Sonstige Kosten, z.B. Neben- und
            Reisekosten, sind mit Rechnungslegung fällig. Als Zahlungsziel
            gelten 14 Tage ab Rechnungsdatum als vereinbart. Rechnungen sind
            ohne Abzug oder Einbehalte zu begleichen.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>13.</Text>
            <Text style={styles.defaultTextBold}>Umsatzsteuer</Text>
          </View>
          <Text style={styles.defaultText}>
            Notwendige Reisen werden gemäß Beleg zusätzlich abgerechnet.
            Reisezeiten werden zu 100 % als Leistungszeiten gemäß den
            vereinbarten Tagessätzen abgerechnet.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>14.</Text>
            <Text style={styles.defaultTextBold}>Umkehr der Steuerschuld</Text>
          </View>
          <Text style={styles.defaultText}>
            Der Auftraggeber ist verantwortlich für die Einhaltung der für ihn
            geltenden Steuerrichtlinien.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>15.</Text>
            <Text style={styles.defaultTextBold}>Subunternehmer</Text>
          </View>
          <Text style={styles.defaultText}>
            dan pearlman ist der Einsatz von Subunternehmern und externen
            Dienstleistern einschließlich freier Mitarbeiter zur
            Leistungserbringung gestattet, ohne dass es einer Freigabe des
            Auftraggebers bedarf.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>16.</Text>
            <Text style={styles.defaultTextBold}>Abwerbeverbot</Text>
          </View>
          <Text style={styles.defaultText}>
            Während der jeweiligen Vertragslaufzeit und für einen Zeitraum von
            24 Monaten danach, versichert der Auftraggeber, dass er keine
            Bemühungen unternehmen wird, Mitarbeitende von dan pearlman –
            unabhängig davon, ob es sich um Arbeitnehmer*innen oder
            Freelancer*innen handelt – abzuwerben. Der Auftraggeber ist
            verpflichtet, für jeden Fall der Zuwiderhandlung gegen das
            Abwerbeverbot eine Vertragsstrafe in Höhe von Euro 25.000,- zu
            zahlen.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>17.</Text>
            <Text style={styles.defaultTextBold}>Abwerbeverbot</Text>
          </View>
          <Text style={styles.defaultText}>
            dan pearlman ist berechtigt, unabhängig vom Medium, die für den
            Auftraggeber zu erbringenden oder erbrachten Leistungen zur
            Eigendarstellung und -werbung einschließlich der Darstellung im
            Rahmen von Wettbewerben zu nutzen und dafür das Projekt, den Namen
            als auch das Logo des Kunden zu verwenden, vorausgesetzt, dass ggf.
            bestehende Pflichten zur Geheimhaltung eingehalten werden.
            Abweichend davon bedarf die Kommunikation gegenüber Presse- und
            Medienvertretern der vorherigen Zustimmung des Auftraggebers.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>18.</Text>
            <Text style={styles.defaultTextBold}>Haftung</Text>
          </View>
          <Text style={styles.defaultText}>
            Vorbehaltlich anderweitiger spezifischer Regelungen zur Haftung bzw.
            zum Haftungsausschluss in diesen Allgemeinen Geschäftsbedingungen
            gilt folgendes, unter Umständen ergänzend. Die Haftung von dan
            pearlman für Schäden durch und im Zusammenhang mit der Ausübung von
            Rechten und Pflichten aus dem Vertrag zwischen dan pearlman und dem
            Auftraggeber ist ausgeschlossen, außer die Haftung wurde in diesen
            AGB oder schriftlich zwischen dan pearlman und dem Auftraggeber
            vereinbart. Ein Haftungsausschluss gilt nicht für:
          </Text>
          <Text style={(styles.staticBulletText, styles.defaultText)}>
            • Schäden aus der Verletzung des Lebens, des Körpers oder der
            Gesundheit, die auf einer fahrlässigen Pflichtverletzung von dan
            pearlman oder eines gesetzlichen Vertreters oder Erfüllungsgehilfen
            von dan pearlman beruhen;
          </Text>
          <Text style={(styles.staticBulletText, styles.defaultText)}>
            • Schäden, die auf einer Pflichtverletzung von dan pearlman oder
            eines gesetzlichen Vertreters oder Erfüllungsgehilfen von dan
            pearlman bezüglich wesentlicher vertraglicher Rechte und Pflichten
            beruhen, die für die ordnungsgemäße Durchführung des Vertrages
            unabdingbar sind, und hierdurch die Erreichung des Vertragszwecks
            gefährdet ist (Kardinalpflichten), außer diese Allgemeinen
            Geschäftsbedingungen treffen ausdrücklich eine anderweitige Regelung
            zur Haftung;
          </Text>
          <Text style={(styles.staticBulletText, styles.defaultText)}>
            • Schäden, die auf einer vorsätzlichen oder grob fahrlässigen
            Pflichtverletzung von dan pearlman oder eines gesetzlichen
            Vertreters oder Erfüllungsgehilfen von dan pearlman beruhen;
          </Text>
          <Text style={(styles.staticBulletText, styles.defaultText)}>
            • die Haftung nach dem Produkthaftungsgesetz;
          </Text>
          <Text style={(styles.staticBulletText, styles.defaultText)}>
            • die Haftung im Falle der Übernahme einer Garantie.
          </Text>
          <Text style={styles.defaultText}>
            {" "}
            Für Schäden, die nicht in der Verletzung des Lebens, des Körpers
            oder der Gesundheit liegen und die auf einer fahrlässigen
            Pflichtverletzung von dan pearlman oder eines gesetzlichen
            Vertreters oder Erfüllungsgehilfen von dan pearlman beruhen, ist die
            Haftung von dan pearlman in jedem Falle auf vertragstypische und
            vorhersehbare Schäden und der Höhe nach maximal auf die von dan
            pearlman erhaltene Vergütung für das Projekt, welches Anlass für die
            Haftung ist, beschränkt. Der Haftungsausschluss und die
            Haftungsbeschränkungen von dan pearlman finden auch auf die
            gesetzlichen Vertreter und Erfüllungsgehilfen von dan pearlman
            Anwendung
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>19.</Text>
            <Text style={styles.defaultTextBold}>Höhere Gewalt</Text>
          </View>
          <Text style={styles.defaultText}>
            Schwerwiegende Ereignisse, wie insbesondere höhere Gewalt,
            Epidemien, Arbeitskämpfe, Unruhen, kriegerische oder terroristische
            Auseinandersetzungen, die unvorhersehbare Folgen für die
            Leistungsdurchführung nach sich ziehen, befreien die
            Vertragsparteien für die Dauer der Störung und im Umfang ihrer
            Wirkung von ihren Leistungspflichten, selbst wenn sie sich in Verzug
            befinden sollten. Eine automatische Vertragsauflösung ist damit
            nicht verbunden. Die Vertragsparteien sind verpflichtet, sich von
            einem solchen Hindernis zu benachrichtigen und ihre Verpflichtungen
            den veränderten Verhältnissen nach Treu und Glauben anzupassen.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>20.</Text>
            <Text style={styles.defaultTextBold}>Gerichtsstand</Text>
          </View>
          <Text style={styles.defaultText}>
            Für alle Streitigkeiten aus diesem Vertragsverhältnis wird der
            Gerichtsstand Berlin vereinbart. Es gilt ausschließlich das Recht
            der Bundesrepublik Deutschland.
          </Text>
        </View>
        <View style={styles.staticListItem}>
          <View style={styles.staticListTitleContainer}>
            <Text style={styles.defaultTextBold}>21.</Text>
            <Text style={styles.defaultTextBold}>Salvatorische Klausel</Text>
          </View>
          <Text style={styles.defaultText}>
            Sollte eine Bestimmung dieser AGB unwirksam sein bzw. werden oder
            die AGB eine Lücke enthalten, so bleibt die Rechtswirksamkeit der
            übrigen Bestimmungen unberührt. Anstelle der unwirksamen oder
            fehlenden Bestimmung gilt eine solche Bestimmung als vereinbart, die
            dem von den Parteien Gewollten wirtschaftlich am nächsten kommt.
          </Text>
        </View>
      </View>
      <Text
        style={[styles.pageNumber, styles.defaultText]}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>

  )

            };

export default PDFDocumentMain;
