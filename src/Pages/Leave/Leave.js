import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apply from './Apply'
import Pending from './Pending'
import Approve from './Approve'
import Main from './Main'
import AddEmployee from './AddEmployee'
import View from './View'

const Leave = () => {


    return (
        <div>
            <h6><span className='opacity-50'>Dashboard/</span>Leave management</h6>
            <Tab.Container defaultActiveKey="Main">
                <Card>
                    <Card.Header>
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="Main">Main</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="Pending">Pendings</Nav.Link>
                            </Nav.Item> 

                            <Nav.Item>
                                <Nav.Link eventKey="Approve">Approved leaves</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="Add_Employee">Add Employee</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="View_Employee">View Employee</Nav.Link>
                            </Nav.Item>   
                                                    
                            <Nav.Item>
                                <Nav.Link eventKey="Apply">Apply leave</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>

                    <Card.Body>
                        <Tab.Content>

                            <Tab.Pane eventKey="Main">
                                <Main />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Pending">
                                 <Pending />
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="Approve">
                                <Approve />
                            </Tab.Pane>

                            <Tab.Pane eventKey="Add_Employee">
                                <AddEmployee />
                            </Tab.Pane>

                            <Tab.Pane eventKey="View_Employee">
                                <View />
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="Apply">
                                <Apply />
                            </Tab.Pane>

                            
                           

                        </Tab.Content>
                    </Card.Body>
                </Card>
            </Tab.Container>
        </div>
    );
};

export default Leave;
