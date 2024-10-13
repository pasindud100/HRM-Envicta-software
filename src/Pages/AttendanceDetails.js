import React, { useState } from 'react'; 
import { Card, Table, Button, Form, Pagination } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const AttendanceDetails = () => {
    const initialData = [
        { profile: 'Jeremy Neigh', january: '15.30', february: '10.30', march: '20.00', april: '08.00', may: '12.30', june: '16.00', july: '20.00', august: '14.00', september: '12.00', october: '18.30', november: '11.00', december: '15.00' },
        { profile: 'Annette Black', january: '14.30', february: '08.30', march: '13.30', april: '08.30', may: '14.00', june: '14.00', july: '20.00', august: '13.00', september: '09.00', october: '18.00', november: '11.00', december: '16.00' },
        { profile: 'Theresa Webb', january: '08.00', february: '08.00', march: '18.30', april: '16.00', may: '19.00', june: '15.30', july: '19.00', august: '14.30', september: '12.30', october: '17.30', november: '10.00', december: '20.00' },
        { profile: 'Kathryn Murphy', january: '17.00', february: '09.30', march: '20.30', april: '09.30', may: '17.00', june: '19.00', july: '20.00', august: '15.00', september: '13.30', october: '18.30', november: '12.00', december: '15.00' },
        { profile: 'Courtney Henry', january: '20.30', february: '18.30', march: '15.30', april: '10.30', may: '10.00', june: '16.30', july: '14.30', august: '15.30', september: '12.00', october: '17.00', november: '11.30', december: '19.00' },
        { profile: 'Jane Cooper', january: '09.00', february: '16.30', march: '12.30', april: '08.30', may: '17.00', june: '14.00', july: '20.00', august: '15.00', september: '10.30', october: '16.30', november: '12.00', december: '18.00' }
    ];

    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Number of records to show per page

    // Filter data based on search term
    const filteredData = data.filter(item =>
        item.profile.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Get current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const exportToPDF = () => {
        const input = document.getElementById('attendance-table'); // Get the table element
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190; // Adjust image width for A4 page size
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
    
            let position = 40; // Leave space for title and date
    
            // Add title and export date
            pdf.setFontSize(18);
            pdf.text("Attendance Details", 14, 20); // Title
            pdf.setFontSize(8);
            pdf.text(`Exported on: ${new Date().toLocaleString()}`, 14, 30); // Export date below the title
    
            // Add the table image to the PDF
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
    
            // Handle multi-page content if the table image exceeds one page
            while (heightLeft > 0) {
                pdf.addPage();
                position = heightLeft - imgHeight;
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
    
            // Save the generated PDF file
            pdf.save("attendance-details.pdf");
        });
    };
    

    return (
        <Card className='no-border'>
            <Card.Header className="d-flex justify-content-between align-items-center mx-3">
                <h5>Attendance Details</h5>
                <div className="d-flex align-items-center"> {/* Added flex for alignment */}
                    <Form className="d-flex me-2" style={{ width: '400px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                        />
                    </Form>
                    <Button variant="outline-primary" onClick={exportToPDF}>
                        <i className="bi bi-file-earmark-arrow-up"></i> Export
                    </Button>
                </div>
            </Card.Header>

            <Card.Body>
                {/* Table */}
                <div id="attendance-table">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Employee Names</th>
                                <th style={{ textAlign: 'center' }}>January</th>
                                <th style={{ textAlign: 'center' }}>February</th>
                                <th style={{ textAlign: 'center' }}>March</th>
                                <th style={{ textAlign: 'center' }}>April</th>
                                <th style={{ textAlign: 'center' }}>May</th>
                                <th style={{ textAlign: 'center' }}>June</th>
                                <th style={{ textAlign: 'center' }}>July</th>
                                <th style={{ textAlign: 'center' }}>August</th>
                                <th style={{ textAlign: 'center' }}>September</th>
                                <th style={{ textAlign: 'center' }}>October</th>
                                <th style={{ textAlign: 'center' }}>November</th>
                                <th style={{ textAlign: 'center' }}>December</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.profile}</td>
                                    <td>{row.january}</td>
                                    <td>{row.february}</td>
                                    <td>{row.march}</td>
                                    <td>{row.april}</td>
                                    <td>{row.may}</td>
                                    <td>{row.june}</td>
                                    <td>{row.july}</td>
                                    <td>{row.august}</td>
                                    <td>{row.september}</td>
                                    <td>{row.october}</td>
                                    <td>{row.november}</td>
                                    <td>{row.december}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="d-flex justify-content-between align-items-center">
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                        />
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Pagination.Item
                                key={i}
                                active={i + 1 === currentPage}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)}
                        />
                    </Pagination>
                    <Form.Group controlId="formPageSize" className="d-flex align-items-center">
                        <Form.Label className="me-2 mb-0">Page:</Form.Label>
                        <Form.Control as="select" defaultValue="5" style={{ width: 'auto' }}>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AttendanceDetails;
