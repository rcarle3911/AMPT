import PDFsheet from "./Reports/ReportGen.jsx";

function Report() {
    return (
        <PDFsheet sections={[1, 2, 3, 4]} />
    );
}

export default Report;
