import { Document } from "@react-pdf/renderer";
import PDFDocumentMain from "./PDFDocumentMain"
import PDFTerms from "./PDFTerms"

const MergedPDF = () => {
    return(
        <>
        <Document>
        <PDFDocumentMain/>
        <PDFTerms/>   
        </Document>

        </>
    )
}

export default MergedPDF;