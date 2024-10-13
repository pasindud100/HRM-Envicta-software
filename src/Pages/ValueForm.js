import React, { useState } from "react";
import { Breadcrumb, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const ValueForm = () => {
  const [basicSalary, setBasicSalary] = useState("");
  const [allowance, setAllowance] = useState("");
  const [bonus, setBonus] = useState("");
  const [overtime, setOvertime] = useState("");
  const [pensionContributions, setPensionContributions] = useState("");
  const [welfareContributions, setWelfareContributions] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Save button handler
  const handleSave = () => {
    // Check if all fields are filled
    if (!basicSalary || !allowance || !bonus || !overtime || !pensionContributions || !welfareContributions) {
      setErrorMessage('Please fill all fields.');
    } else {
      setErrorMessage(''); // Clear error message on success
      alert("Data saved successfully.");

      // Optional: Logging data in development mode only
      if (process.env.NODE_ENV === 'development') {
        console.log("Basic Salary:", basicSalary);
        console.log("Allowance:", allowance);
        console.log("Bonus:", bonus);
        console.log("Overtime:", overtime);
        console.log("Pension Contributions:", pensionContributions);
        console.log("Welfare Fund Contributions:", welfareContributions);
      }
    }
  };

  // Cancel button handler - resets all input fields
  const handleCancel = () => {
    setBasicSalary("");
    setAllowance("");
    setBonus("");
    setOvertime("");
    setPensionContributions("");
    setWelfareContributions("");
    setErrorMessage(''); // Clear any error message on cancel
  };

  return (
    <div className="container mt-4 value-form">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/default-payrun" }}>Default Payrun</Breadcrumb.Item>
        <Breadcrumb.Item active>Value</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payslip" }}>Payslip</Breadcrumb.Item>
      </Breadcrumb>

      <Alert variant="info">
        <Alert.Heading>How Value Works?</Alert.Heading>
        <p>1. Enter the Basic Salary.</p>
        <p>2. Enter the Allowance, Bonus, Overtime to calculate Earnings.</p>
        <p>3. Enter the Pension Scheme Contributions, Welfare Fund Contributions to calculate Deductions.</p>
        <p>4. Finally, you can calculate the Net Salary by generating the PaySlip.</p>
      </Alert>

      {/* Display error message if validation fails */}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Form>
        {/* Basic Salary */}
        <Form.Group controlId="basicSalary">
          <Form.Label>Basic Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Basic Salary"
            value={basicSalary}
            onChange={(e) => {
                const value = e.target.value;
                if (value >= 0) {
                    setBasicSalary(value);
                }
            }}
            min="0"
          />
        </Form.Group>

        {/* Earnings Section */}
        <h5 className="mt-4">Earnings</h5>
        <div style={{ marginLeft: "20px" }}>
          <Form.Group controlId="allowance">
            <Form.Label>1. Allowance</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Allowance"
              value={allowance}
              onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 0) {
                      setAllowance(value);
                  }
              }}
              min="0"
            />
          </Form.Group>
          <Form.Group controlId="bonus">
            <Form.Label>2. Bonus</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Bonus"
              value={bonus}
              onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 0) {
                      setBonus(value);
                  }
              }}
              min="0"
            />
          </Form.Group>
          <Form.Group controlId="overtime">
            <Form.Label>3. Overtime</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Overtime"
              value={overtime}
              onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 0) {
                      setOvertime(value);
                  }
              }}
              min="0"
            />
          </Form.Group>
        </div>

        {/* Deductions Section */}
        <h5 className="mt-4">Deductions</h5>
        <Row>
          <Col md={6}>
            <Form.Group controlId="pensionContributions">
              <Form.Label>1. Pension Scheme Contributions</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Pension Scheme Contributions"
                value={pensionContributions}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value >= 0) {
                        setPensionContributions(value);
                    }
                }}
                min="0"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="welfareContributions">
              <Form.Label>2. Welfare Fund Contributions</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Welfare Fund Contributions"
                value={welfareContributions}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value >= 0) {
                        setWelfareContributions(value);
                    }
                }}
                min="0"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Buttons */}
        <div className="mt-4">
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" className="ms-2" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ValueForm;