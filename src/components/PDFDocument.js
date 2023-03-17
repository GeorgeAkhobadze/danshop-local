import React from "react";
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
import logo from "../assets/logo-black.svg";
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
  },
  defaultTextBold: {
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
    paddingBottom: 25,
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
});

const PDFDocument = ({ data }) => (
  <Document>
    {console.log(data, "resultData")}
    <Page id="hell" size="A4" style={styles.page}>
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
            <Text style={styles.zipText}>{data?.companyZip}</Text>
          </View>
          <View>
            <Text style={styles.companyDate}>{data?.date}</Text>
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
            <Text style={styles.defaultText}>dma_lac_21001-A</Text>
          </View>
        </View>
      </View>
      <View>
        {data?.introtext?.length > 0 && (
          <View style={styles.serviceDefaultContainer}>
            <Text style={styles.defaultText}>{data?.introText}</Text>
          </View>
        )}
        {console.log(data?.projektbeschreibung.length, "ITS LOGGING ME")}
        <View style={styles.serviceDefaultContainer}>
          {!!data?.projektbeschreibung && data.projektbeschreibung > 0 && (
            <>
              <Text style={styles.defaultTextBold}>Projektbeschreibung</Text>
              <Text style={styles.defaultText}>
                {data?.projektbeschreibung}
              </Text>
            </>
          )}
        </View>

        <View style={styles.serviceDefaultContainer}>
          <Text style={styles.defaultTextBold}>Angebotsgrundlagen </Text>
          <View style={styles.bulletPoint}>
            <View>
              <Text style={styles.bulletPointText}>{"\u2022" + " "}</Text>
            </View>
            <Text style={styles.defaultText}>Projektprozess</Text>
          </View>
          <View style={styles.bulletPoint}>
            <View>
              <Text style={styles.bulletPointText}>{"\u2022" + " "}</Text>
            </View>
            <Text style={styles.defaultText}>
              Markenschärfungs-Workshop vom 11.01.2023 inkl. Ergebnisse
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <View>
              <Text style={styles.bulletPointText}>{"\u2022" + " "}</Text>
            </View>
            <Text style={styles.defaultText}>
              Bestehende Unterlagen zur Marke inkl. Purpose/Mission/Vision
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <View>
              <Text style={styles.bulletPointText}>{"\u2022" + " "}</Text>
            </View>
            <Text style={styles.defaultText}>
              Aktuelles Corporate Design der Marke SENS
            </Text>
          </View>
        </View>
        <View style={styles.serviceDefaultContainer}>
          <Text style={styles.defaultTextBold}>Timing</Text>
          <View style={styles.bulletPoint}>
            <View>
              <Text style={styles.bulletPointText}>{"\u2022" + " "}</Text>
            </View>
            <Text style={styles.defaultText}>
              Ausarbeitung Markenstrategie: KW 4 – KW 8
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.serviceDefaultContainer}>
        <Text style={styles.defaultTextBold}>Product List</Text>
        {data?.products?.map((product, i) => {
          return (
            <View style={styles.productWrapper}>
              <View
                style={styles.productTitleContainer}
                key={`${product}-${i}`}
              >
                <Text style={styles.defaultTextBold}>{i + 1}.</Text>
                <Text style={styles.defaultTextBold}>{product.name}</Text>
              </View>
              <View style={styles.productListWrapper}>
                {product?.modules?.map((modules) => {
                  return (
                    <>
                      <Text style={styles.defaultTextBold}>
                        {modules?.title}
                      </Text>
                      <View>
                        {modules?.module?.map((moduleItem) => {
                          if (moduleItem?.checkbox != false) {
                            return (
                              <View style={styles.bulletPoint}>
                                <View>
                                  <Text style={styles.bulletPointText}>
                                    {"\u2022" + " "}
                                  </Text>
                                </View>
                                <Text style={styles.defaultText}>
                                  {moduleItem?.name}
                                </Text>
                              </View>
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
        })}
      </View>
      <View style={styles.serviceDefaultContainer}>
        <Text style={styles.defaultTextBold}>Honorarzusammenfassung</Text>
        <View style={styles.serviceDefaultContainer}>
          {data?.products?.map((product, i) => {
            return (
              <View style={styles.productPricesMapped}>
                <Text style={styles.defaultText}>
                  {i + 1} {product?.name}
                </Text>
                <Text style={styles.defaultText}>
                  {i + 1} {product?.priceAmount} €
                </Text>
              </View>
            );
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
        <Text>
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
            <Text style={styles.defaultText}>Nico Tanfal</Text>
            <Text style={styles.defaultText}>Project Manager</Text>
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
      <Text
        style={[styles.pageNumber, styles.defaultText]}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

export default PDFDocument;
