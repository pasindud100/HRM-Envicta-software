import React, { useState } from 'react';
import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PaySlip = ({ 
  payrunPeriod, 
  payrunType, 
  basicSalary, 
  allowance, 
  bonus, 
  overtime, 
  pensionContributions, 
  welfareContributions, 
  dateOfJoining, 
  workDays 
}) => {
  const [employeeID, setEmployeeID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDesignation, setEmployeeDesignation] = useState('');
  const [employeeDepartment, setEmployeeDepartment] = useState('');
  const [employeeBankDetails, setEmployeeBankDetails] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGeneratePaySlip = () => {
    // Validate the form fields
    if (!employeeID || !employeeName || !employeeDesignation || !employeeDepartment || !employeeBankDetails) {
      setErrorMessage('Please fill all fields.');
      return;
    }

    // Clear error message
    setErrorMessage('');

    // Generate Payslip as PDF
    const doc = new jsPDF();
    
    doc.text('PaySlip', 105, 10, null, null, 'center');
    
    // Payrun details
    doc.text(`Payrun Period: ${payrunPeriod}`, 10, 30);
    doc.text(`Payrun Type: ${payrunType}`, 10, 40);
    doc.text(`Date of Joining: ${dateOfJoining}`, 10, 50);
    doc.text(`Work Days: ${workDays}`, 10, 60);

    // Employee details
    doc.text('Employee Details:', 10, 80);
    doc.text(`Employee ID: ${employeeID}`, 10, 90);
    doc.text(`Employee Name: ${employeeName}`, 10, 100);
    doc.text(`Designation: ${employeeDesignation}`, 10, 110);
    doc.text(`Department: ${employeeDepartment}`, 10, 120);
    doc.text(`Bank Details: ${employeeBankDetails}`, 10, 130);

    // Salary and earnings details
    doc.text('Earnings:', 10, 150);
    doc.text(`Basic Salary: ${basicSalary}`, 10, 160);
    doc.text(`Allowance: ${allowance}`, 10, 170);
    doc.text(`Bonus: ${bonus}`, 10, 180);
    doc.text(`Overtime: ${overtime}`, 10, 190);

    // Deductions
    doc.text('Deductions:', 10, 210);
    doc.text(`Pension Scheme Contributions: ${pensionContributions}`, 10, 220);
    doc.text(`Welfare Fund Contributions: ${welfareContributions}`, 10, 230);

    // Save the PDF
    doc.save('payslip.pdf');
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
        <Breadcrumb.Item active>Payslip</Breadcrumb.Item>
      </Breadcrumb>

      <Alert variant="info">
                <Alert.Heading>Payslip Information</Alert.Heading>
                <p>Enter the employee details to generate the pay slip.</p>
            </Alert>

      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Form>
        <Form.Group controlId="employeeID">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control type="text" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} placeholder="Enter Employee ID" />
        </Form.Group>

        <Form.Group controlId="employeeName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Enter Employee Name" />
        </Form.Group>

        <Form.Group controlId="employeeDesignation">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" value={employeeDesignation} onChange={(e) => setEmployeeDesignation(e.target.value)} placeholder="Enter Employee Designation" />
        </Form.Group>

        <Form.Group controlId="employeeDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" value={employeeDepartment} onChange={(e) => setEmployeeDepartment(e.target.value)} placeholder="Enter Employee Department" />
        </Form.Group>

        <Form.Group controlId="employeeBankDetails">
          <Form.Label>Bank Details</Form.Label>
          <Form.Control type="text" value={employeeBankDetails} onChange={(e) => setEmployeeBankDetails(e.target.value)} placeholder="Enter Bank Details" />
        </Form.Group>

        <Button variant="primary" className="mt-4" onClick={handleGeneratePaySlip}>
          Generate PaySlip
        </Button>
      </Form>
    </div>
  );
};

export default PaySlip;