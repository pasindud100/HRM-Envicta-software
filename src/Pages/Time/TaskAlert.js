
import React from "react";
import { Card } from "react-bootstrap";

const TaskAlert = () => {
  return (
    <div className="d-flex justify-content-center" style={{ minHeight: "100vh", paddingTop: "20px" }}>
      <Card style={{ width: '30rem', height: '300px', textAlign: 'center' }} className="shadow-lg">
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title>No Alerts Yet</Card.Title>
          <Card.Text>
            It looks like you have no notifications at the moment...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaskAlert;
