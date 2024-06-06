import { Form, Button } from "react-bootstrap";

function Scenario() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTargetID">
          <Form.Label>Target ID</Form.Label>
          <Form.Control type="text" placeholder="Enter Target ID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCoordinates">
          <Form.Label>Target Coordinates</Form.Label>
          <Form.Control type="text" placeholder="Enter coordinates" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Target Name</Form.Label>
          <Form.Control type="text" placeholder="Enter target name" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => {
          e.preventDefault();
          location.href = "/report";
        }}>
          Submit
        </Button>
      </Form>
    );
}

export default Scenario;
