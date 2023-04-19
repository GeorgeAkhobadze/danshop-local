const temp = () => {
  return (
    <Formik
      initialValues={{
        introText: "",
        companyAddress: "",
        ansprechspartner: "",
        clientAddress: "",
        zipAndCity: "",
        country: "",
        ortDate: "",
        angebot: "",
        stuff: "",
        danMaker: "",
        projektbeschreibung: "",
        angebotsgrundlagen: "",
        timing: "",
      }}
      onSubmit={(values) => {
        handleButton1Click();
      }}
      validationSchema={Yup.object({
        companyAddress: Yup.string().required("Company Address is required"),
        introText: Yup.string().required("Field is required"),
        ansprechspartner: Yup.string().required("Field is required"),
        clientAddress: Yup.string().required("Client Address is required"),
        zipAndCity: Yup.string().required("Zip and City are required"),
        country: Yup.string().required("Country is required"),
        ortDate: Yup.string().required("Ort/Date is required"),
        angebot: Yup.string().required("Angebot # is required"),
        stuff: Yup.string().required("Kunde | Projekt | Leistung is required"),
        danMaker: Yup.string().required("DanMaker Number is required"),
        projektbeschreibung: Yup.string().required(
          "Projektbeschreibung is required"
        ),
        angebotsgrundlagen: Yup.string().required(
          "Angebotsgrundlagen is required"
        ),
        timing: Yup.string().required("Timing is required"),
      })}
    >
      {(formik) => (
        <>
          <Header />
          <div className="pdf-container">
            <Form>
              <div className="company-details">
                <div className="client-details">
                  <div className="client-details-inputs">
                    <div className="danshop-location">
                      dan pearlman Markenarchitektur | Kiefholzstraße 1 | 12435
                      Berlin
                    </div>
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Company Name"
                      name="companyAddress"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="companyAddress"
                    />
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Ansprechspartner"
                      name="ansprechspartner"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="ansprechspartner"
                    />
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Client Address"
                      name="clientAddress"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="clientAddress"
                    />
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Zip and City"
                      name="zipAndCity"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="zipAndCity"
                    />
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Country"
                      name="country"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="country"
                    />
                  </div>
                  <div className="client-details-inputs">
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Ort/Date"
                      name="ortDate"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="ortDate"
                    />
                  </div>
                  <div className="client-details-inputs">
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Angebot #"
                      name="angebot"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="angebot"
                    />
                    <Field
                      className="danmaker-input"
                      type="text"
                      placeholder="Kunde | Projekt | Leistung"
                      name="stuff"
                    />
                    <ErrorMessage
                      className="error-msg"
                      component="div"
                      name="stuff"
                    />
                  </div>
                </div>
                <div className="danshop-details">
                  <p>
                    dan pearlman Markenarchitektur Gesellschaft von Architekten
                    und Innenarchitekten mbH
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

                  <Field
                    className="danmaker-input"
                    type="text"
                    placeholder="DanMaker Nr"
                    name="danMaker"
                  />
                  <ErrorMessage
                    className="error-msg"
                    component="div"
                    name="danMaker"
                  />
                </div>
              </div>

              <div className="default-text-container">
                <p className="default-text-title">Intro Text:</p>
                <Field
                  className="default-text-input"
                  type="text"
                  name="introText"
                  as="textarea"
                />
                <ErrorMessage
                  className="error-msg"
                  component="div"
                  name="introText"
                />
              </div>

              <div className="default-text-container">
                <p className="default-text-title">Projektbeschreibung:</p>
                <Field
                  className="default-text-input"
                  type="text"
                  name="projektbeschreibung"
                  as="textarea"
                />
                <ErrorMessage
                  className="error-msg"
                  component="div"
                  name="projektbeschreibung"
                />
              </div>

              <div className="default-text-container">
                <p className="default-text-title">Angebotsgrundlagen:</p>
                <Field
                  className="default-text-input"
                  type="text"
                  name="angebotsgrundlagen"
                  as="textarea"
                />
                <ErrorMessage
                  className="error-msg"
                  component="div"
                  name="angebotsgrundlagen"
                />
              </div>

              <div className="default-text-container">
                <p className="default-text-title">Timing:</p>
                <Field
                  className="default-text-input"
                  type="text"
                  name="timing"
                  as="textarea"
                />
                <ErrorMessage
                  className="error-msg"
                  component="div"
                  name="timing"
                />
              </div>
              {/* <button type="submit">Submit</button> */}
            </Form>
            <PDFDownloadLink
              disabled={!isButton1Clicked}
              onClick={() => setIsButton2Clicked(true)}
              className="generate-pdf-btn"
              document={<PDFDocumentMain data={data} />}
              fileName="somename.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Generate PDF"
              }
            </PDFDownloadLink>
          </div>
        </>
      )}
    </Formik>
  );
};
