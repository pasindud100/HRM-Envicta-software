import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import DailyLog from './Att_DailyLog';
import AttendanceDetails from './AttendanceDetails';
import RequestPage from './Request';
import Summary from './Summary';

const Attendance = () => {
    return (
        <Tab.Container defaultActiveKey="Att_DailyLog"> {/* Set defaultActiveKey to "Att_DailyLog" */}
            <Card>
                {/* Horizontal Navbar in Card.Header */}
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="Att_DailyLog">Daily Log</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="Request">Request</Nav.Link>
                        </Nav.Item> */} 
                        <Nav.Item>
                            <Nav.Link eventKey="AttendanceDetails">Attendance Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Summary">Summary</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        {/* Daily Log Content */}
                        <Tab.Pane eventKey="Att_DailyLog">
                            <DailyLog />
                        </Tab.Pane>

                        {/* Request Content */}
                        {/* <Tab.Pane eventKey="Request">
                            <RequestPage /> 
                        </Tab.Pane> */}

                          {/* Attendance Details Content */}
                          <Tab.Pane eventKey="AttendanceDetails">
                            <AttendanceDetails /> {/* Include the Attendance Details Page component */}
                        </Tab.Pane>

                        {/* Summary Content */}
                        <Tab.Pane eventKey="Summary">
                            <Summary />  {/* Include the Summary component */}
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Attendance;
