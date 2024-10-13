import React, { useState } from 'react';
import { Card, Nav, Tab, Breadcrumb, Alert, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import ValueForm from './ValueForm';  
import PaySlip from './PaySlip';  

const Payroll = () => {
    const [dateOfJoining, setDateOfJoining] = useState(''); // State for Date of Joining
    const [payPeriod, setPayPeriod] = useState('');         // State for Pay Period
    const [workDays, setWorkDays] = useState('');           // State for Work Days
    const [errorMessage, setErrorMessage] = useState('');

    const handleSave = () => {
        // Validate that all fields are filled
        if (!dateOfJoining || !payPeriod || !workDays) {
            setErrorMessage('Please fill in all fields');
            return;
        } else if (workDays < 0) {
            setErrorMessage('Work Days cannot be negative');
            return;
        } else {
            setErrorMessage('');
            alert("Data saved successfully.");
        }

        // Optional logging, restricted to development mode
        if (process.env.NODE_ENV === 'development') {
            console.log('Date of Joining:', dateOfJoining);
            console.log('Pay Period:', payPeriod);
            console.log('Work Days:', workDays);
        }
    };

    const handleCancel = () => {
        // Clear the form fields
        setDateOfJoining('');
        setPayPeriod('');
        setWorkDays('');
        setErrorMessage(''); // Clear error message when canceling
    };

    return (
        <Tab.Container defaultActiveKey="defaultPayrun">
            <Card>
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="defaultPayrun">Payrun</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="value">Value</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="payslip">Payslip</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        {/* Default Payrun Tab */}
                        <Tab.Pane eventKey="defaultPayrun">
                            <Breadcrumb>
                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
                                <Breadcrumb.Item active>Payrun</Breadcrumb.Item>
                            </Breadcrumb>

                            <Alert variant="info">
                                <Alert.Heading>How payrun works?</Alert.Heading>
                                <p>1. Pay run is applicable to generate pay slip for employees.</p>
                                <p>2. You can set pay run individually over the default from the <b>Employees</b> details.</p>
                            </Alert>

                            {/* Display error message if validation fails */}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                            <Form>
                                {/* Date of Joining Input */}
                                <Form.Group controlId="dateOfJoining">
                                    <Form.Label>Date of Joining</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={dateOfJoining}
                                        onChange={(e) => setDateOfJoining(e.target.value)}
                                    />
                                </Form.Group>

                                {/* Pay Period Input */}
                                <Form.Group controlId="payPeriod">
                                    <Form.Label>Pay Period</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={payPeriod}
                                        onChange={(e) => setPayPeriod(e.target.value)}
                                        placeholder="Enter Pay Period (e.g., Jan 2024)"
                                    />
                                </Form.Group>

                                {/* Work Days Input */}
                                <Form.Group controlId="workDays">
                                    <Form.Label>Work Days</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={workDays}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value >= 0) {
                                                setWorkDays(value);
                                            }
                                        }}
                                        placeholder="Enter number of Work Days"
                                    />
                                </Form.Group>

                                <div className="mt-4">
                                    <Button variant="primary" onClick={handleSave}>
                                        Save
                                    </Button>
                                    <Button variant="secondary" className="ms-2" onClick={handleCancel}>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Tab.Pane>

                        {/* Value Tab */}
                        <Tab.Pane eventKey="value">
                            {/* ValueForm component handles value-related settings */}
                            <ValueForm />
                        </Tab.Pane>

                        {/* Payslip Tab */}
                        <Tab.Pane eventKey="payslip">
                            {/* PaySlip component handles payslip generation */}
                            <PaySlip />
                        </Tab.Pane>

                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Payroll;