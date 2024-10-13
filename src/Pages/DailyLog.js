import React, { useState } from 'react';
import { Table, Dropdown, Button, Pagination, Form } from 'react-bootstrap';

const DailyLog = () => {
    const [logs, setLogs] = useState([
        { profile: 'Jeremy Neigh', date: '9/23/16', hours: '15h 40m', department: 'Design', behavior: 'DebitNoteMckee.jpg', status: 'Busy' },
        { profile: 'Annette Black', date: '7/27/13', hours: '11h 45m', department: 'Product', behavior: 'debitnote_0310.xlsx', status: 'Busy' },
        { profile: 'Theresa Webb', date: '11/7/16', hours: '10h 25m', department: 'Marketing', behavior: 'McKeeDebit01.pdf', status: 'Ready' },
        { profile: 'Kathryn Murphy', date: '6/19/14', hours: '16h 55m', department: 'Support', behavior: 'dealsheet2020.pdf', status: 'Busy' },
        { profile: 'Courtney Henry', date: '7/11/19', hours: '15h 45m', department: 'Operations', behavior: 'debitnote_march.pdf', status: 'Ready' },
        { profile: 'Jane Cooper', date: '8/2/19', hours: '10h 45m', department: 'HR', behavior: 'dealsheet_march.xlsx', status: 'Busy' }
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 100;

    // Function to handle dropdown actions (Edit, Approve)
    const handleAction = (action, log) => {
        console.log(`${action} selected for`, log);
    };

    return (
        <div>
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <Button variant="primary">Add Attendance</Button>
                    <Button variant="outline-primary">Import</Button>
                    <Button variant="outline-primary">Export</Button>
                </div>
                <Button variant="outline-secondary">Setting</Button>
            </div>

            <div className="mb-3 d-flex">
                {/* Filter buttons */}
                <Button variant="outline-primary" className="mr-2">Apply Between</Button>
                <Button variant="outline-primary" className="mr-2">Department</Button>
                <Button variant="outline-primary" className="mr-2">Work Shift</Button>
                <Button variant="outline-primary" className="mr-2">Rejected</Button>
                <Button variant="outline-primary">Duration</Button>
            </div>

            {/* Search Bar */}
            <Form.Group controlId="search" className="mb-4">
                <Form.Control type="text" placeholder="Search" />
            </Form.Group>

            {/* Daily Log Table */}
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Punch In</th>
                        <th>Geolocation</th>
                        <th>Punched Out</th>
                        <th>Behavior</th>
                        <th>Total Hours</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={index}>
                            <td>{log.profile}</td>
                            <td>{log.date}</td>
                            <td>{log.hours}</td>
                            <td>{log.department}</td>
                            <td>{log.behavior}</td>
                            <td>{log.status}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="link" id="dropdown-basic">...</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleAction('Edit', log)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleAction('Approve', log)}>Approve</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination */}
            <Pagination>
                <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
                <Pagination.Item>{`Page ${currentPage} of ${totalPages}`}</Pagination.Item>
                <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
    );
};

export default DailyLog;