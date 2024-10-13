import React from 'react';
import { Card, Table, Button, Form, Dropdown, Pagination } from 'react-bootstrap';

const Request = () => {
    // Sample table data
    const tableData = [
        { profile: 'Jeremy Neigh', punchIn: '9/23/16', punchOut: 'Design', totalHours: '15h 40m', status: 'Success' },
        { profile: 'Annette Black', punchIn: '7/27/13', punchOut: 'Product', totalHours: '11h 45m', status: 'Busy' },
        { profile: 'Theresa Webb', punchIn: '11/7/16', punchOut: 'Marketing', totalHours: '10h 25m', status: 'Ready' },
        { profile: 'Kathryn Murphy', punchIn: '6/19/14', punchOut: 'Support', totalHours: '16h 55m', status: 'Loop' },
        { profile: 'Courtney Henry', punchIn: '7/11/19', punchOut: 'Operations', totalHours: '15h 45m', status: 'No actions performed' },
        { profile: 'Jane Cooper', punchIn: '8/2/19', punchOut: 'HR', totalHours: '10h 45m', status: 'Config change' },
    ];

    return (
        <Card className="p-4">
            {/* Header with title and action buttons */}
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>Request</h5>
                <Button variant="primary">99 Req Attendance</Button>
            </Card.Header>

            <Card.Body>
                {/* Filters Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="btn-group" role="group">
                        <Button variant="outline-primary" className="me-2">Apply between</Button>
                        <Button variant="outline-primary" className="me-2">Department</Button>
                        <Button variant="outline-primary" className="me-2">Work shift</Button>
                        <Button variant="outline-primary" className="me-2">Rejected</Button>
                        <Button variant="outline-primary">Duration</Button>
                    </div>
                    <Form className="d-flex" style={{ width: '300px' }}>
                        <Form.Control type="search" placeholder="Search" className="me-2" />
                    </Form>
                </div>

                {/* Request Table */}
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Employee Names</th>
                            <th>Punch In</th>
                            <th>Punched Out</th>
                            <th>Type</th>
                            <th>Total hours</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.profile}</td>
                                <td>{row.punchIn}</td>
                                <td>{row.punchOut}</td>
                                <td>{row.punchOut}</td>
                                <td>{row.totalHours}</td>
                                <td>{row.status}</td>
                                <td className="text-center">
                                    {/* Dropdown Menu for Actions */}
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="text-dark">
                                            <i className="bi bi-three-dots"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Changelog</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Approve</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className="text-danger">Reject</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Pagination */}
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
                        <Form.Control as="select" defaultValue="10" style={{ width: 'auto' }}>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Request;
