import { Container } from "react-bootstrap";
import PDFsheet from "./Reports/ReportGen.jsx";

function Report() {
    return (
        <Container className="reportContainer">
            <PDFsheet sections={["ROE: Authorized to use deadly force on any personel that interferes with operation to locate and neutralize target", "TEA: Target Engagement Authority for this target is Mongol Actual", "SPINS: Be sure to use route Beetlejuice", "IDP: friendlies are marked green, allies are marked blue, enemies are marked red:"]} />
        </Container>

    );
}

export default Report;
