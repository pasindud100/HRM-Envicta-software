import React, { useState, useRef } from 'react';
import { Card, Button, Table, Form, Pagination, Dropdown, Alert } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
} from 'chart.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
);

const Summary = () => {
    const data = {
        labels: ['Regular Days', 'Early Days', 'Late Days'],
        datasets: [
            {
                data: [12, 12, 12],
                backgroundColor: ['#845EC2', '#FF9671', '#FF6F91'],
                hoverBackgroundColor: ['#6C63FF', '#FF756B', '#FF5A7C'],
                borderWidth: 0,
            }
        ]
    };

    const initialTableData = [
        { employeenames: 'Jeremy Neigh', punchIn: new Date('10/08/2024'), punchOut: '5:00 PM', totalHours: '15h 40m', status: 'Success', approved: false },
        { employeenames: 'Annette Black', punchIn: new Date('10/08/2024'), punchOut: '4:30 PM', totalHours: '11h 45m', status: 'Some errors', approved: false },
        { employeenames: 'Theresa Webb', punchIn: new Date('10/08/2024'), punchOut: '3:45 PM', totalHours: '10h 25m', status: 'Aborted', approved: false },
        { employeenames: 'Kathryn Murphy', punchIn: new Date('10/08/2024'), punchOut: '6:00 PM', totalHours: '16h 55m', status: 'Loop', approved: false },
        { employeenames: 'Courtney Henry', punchIn: new Date('10/08/2024'), punchOut: '2:30 PM', totalHours: '15h 45m', status: 'No actions performed', approved: false },
        { employeenames: 'Jane Cooper', punchIn: new Date('10/08/2024'), punchOut: '1:15 PM', totalHours: '10h 45m', status: 'Config change', approved: false },
    ];

    const [searchInput, setSearchInput] = useState('');
    const [tableData, setTableData] = useState(initialTableData);
    const [editingIndex, setEditingIndex] = useState(null);
    const [requestedAttendanceCount, setRequestedAttendanceCount] = useState(99);
    const tableRef = useRef(); // Create a ref to refer to the table

    const handleChangeLog = (index) => {
        setEditingIndex(editingIndex === index ? null : index);
    };

    const handleApprove = (index) => {
        const newData = [...tableData];
        newData[index].approved = !newData[index].approved;
        setTableData(newData);
    };

    const handleDelete = (index) => {
        const newData = tableData.filter((_, i) => i !== index);
        setTableData(newData);
    };

    const filteredData = tableData.filter(row =>
        row.employeenames.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Function to export the table to PDF
    const exportToPDF = () => {
        const pdf = new jsPDF();
        const date = new Date();
        const dateString = date.toLocaleString();

        html2canvas(tableRef.current).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190; // Set width
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 30; // Start position for the image, leaving space for the title

            // Add summary title first, then the image
            pdf.setFontSize(16); // Set font size for title
            pdf.text("Summary", 10, 10);

            // Set font size to 8 for export date
            pdf.setFontSize(8);
            pdf.text(`Exported on: ${dateString}`, 10, 20);

            // Add the image after the title
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // If the image is larger than one page, continue to the next page
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Add page numbers to each page
            const totalPages = pdf.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setFontSize(10);
                pdf.text(`Page ${i} of ${totalPages}`, 14, pageHeight - 10); // Page number at the bottom
            }

            // Save the PDF with the correct alignment
            pdf.save('attendance_summary.pdf');
        });
    };


    return (
        <Card className="no-border">
            <Card.Header className="d-flex justify-content-between align-items-center mx-3">
                <h5>Summary</h5>
                <div className="d-flex align-items-center">
                    <Form className="d-flex me-2" style={{ width: '400px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </Form>
                    <Button variant="outline-primary" onClick={exportToPDF}>
                        <i className="bi bi-file-earmark-arrow-up"></i> Export
                    </Button>
                </div>
            </Card.Header>

            <Card.Body className='no-border'>
                <div className="d-flex align-items-start mb-4">
                    <div className="me-5" style={{ width: '200px' }}>
                        <Doughnut data={data} />
                    </div>

                    <div className="d-flex flex-wrap justify-content-start">
                        <Card className="p-3 me-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Total Schedule Hour</h6>
                            <p className="h4">12</p>
                        </Card>
                        <Card className="p-3 me-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Leave Hour</h6>
                            <p className="h4">45 hr</p>
                        </Card>
                        <Card className="p-3 me-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Total Work</h6>
                            <p className="h4">890 hrs</p>
                        </Card>
                        <Card className="p-3 mb-3 text-center" style={{ minWidth: '140px' }}>
                            <h6>Total Active</h6>
                            <p className="h4">312 days</p>
                        </Card>
                    </div>
                </div>

                <div ref={tableRef}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Employee Names</th>
                                <th>Punch In</th>
                                <th>Punch Out</th>
                                <th>Total hours</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        {editingIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                defaultValue={row.employeenames}
                                                onChange={(e) => {
                                                    const newData = [...tableData];
                                                    newData[index].employeenames = e.target.value;
                                                    setTableData(newData);
                                                }}
                                            />
                                        ) : (
                                            <>
                                                {row.employeenames}
                                                {row.approved && <span className="text-success ms-2">&#10003;</span>}
                                            </>
                                        )}
                                    </td>
                                    <td>
                                        {editingIndex === index ? (
                                            <DatePicker
                                                selected={row.punchIn}
                                                onChange={(date) => {
                                                    const newData = [...tableData];
                                                    newData[index].punchIn = date;
                                                    setTableData(newData);
                                                }}
                                                dateFormat="MM/dd/yyyy"
                                            />
                                        ) : row.punchIn.toLocaleDateString()}
                                    </td>
                                    <td>
                                        {editingIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                defaultValue={row.punchOut}
                                                onChange={(e) => {
                                                    const newData = [...tableData];
                                                    newData[index].punchOut = e.target.value;
                                                    setTableData(newData);
                                                }}
                                            />
                                        ) : row.punchOut}
                                    </td>
                                    <td>
                                        {editingIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                defaultValue={row.totalHours}
                                                onChange={(e) => {
                                                    const newData = [...tableData];
                                                    newData[index].totalHours = e.target.value;
                                                    setTableData(newData);
                                                }}
                                            />
                                        ) : row.totalHours}
                                    </td>
                                    <td>
                                        {editingIndex === index ? (
                                            <Form.Select
                                                defaultValue={row.status}
                                                onChange={(e) => {
                                                    const newData = [...tableData];
                                                    newData[index].status = e.target.value;
                                                    setTableData(newData);
                                                }}
                                            >
                                                <option value="Success">Success</option>
                                                <option value="Some errors">Some errors</option>
                                                <option value="Aborted">Aborted</option>
                                                <option value="Loop">Loop</option>
                                                <option value="No actions performed">No actions performed</option>
                                                <option value="Config change">Config change</option>
                                            </Form.Select>
                                        ) : (
                                            row.status
                                        )}
                                    </td>
                                    <td className="text-center">
                                        {/* <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                             
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleChangeLog(index)}>
                                                    {editingIndex === index ? 'Save' : 'Edit'}
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleApprove(index)}>
                                                    Approve
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleDelete(index)} className="text-danger">
                                                    Delete
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> */}

                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                <i className="bi bi-three-dots-vertical"></i> {/* Icon for dropdown toggle */}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleChangeLog(index)}>
                                                    <i className="bi bi-pencil-fill me-2"></i> {/* Edit icon */}
                                                    {editingIndex === index ? 'Save' : 'Edit'}
                                                </Dropdown.Item>

                                                <Dropdown.Item onClick={() => handleApprove(index)}>
                                                    <i className={`bi ${row.approved ? 'bi-x-square me-2' : 'bi-check-square me-2'}`}></i> {/* Toggle between Unapprove/Approve icons */}
                                                    {row.approved ? "Unapprove" : "Approve"}
                                                </Dropdown.Item>

                                                <Dropdown.Item onClick={() => handleDelete(index)} className="text-danger">
                                                    <i className="bi bi-trash-fill me-2"></i> {/* Delete icon */}
                                                    Delete
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>



                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>

                    <Form.Group controlId="formPageSize" className="d-flex align-items-center">
                        <Form.Label className="me-2 mb-0">Page:</Form.Label>
                        <Form.Control as="select" defaultValue="1" style={{ width: 'auto' }}>
                            <option>1</option>
                            <option>10</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Summary;
