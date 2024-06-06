import { Container } from "react-bootstrap";
import PDFsheet from "./Reports/ReportGen.jsx";

function Report() {
    return (
        <Container className="reportContainer">
            <PDFsheet sections={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </Container>

    );
}

export default Report;
