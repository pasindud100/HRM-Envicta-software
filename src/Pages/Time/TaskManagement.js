import React, { useState } from "react";
import { Card, Nav, Tab } from "react-bootstrap";

import Taskallocation from "./TaskAllocation";

import TasklogTime from "./TaskLogTime";
import Taskreport from "./TaskReport";
import Taskalert from "./TaskAlert";
import TMAnalytics from "./TMAnalytics";

const TaskManagement = () => {
  const [activeKey, setActiveKey] = useState("TMAnalytics");

  return (
    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      <Card>
        <Card.Header>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="TMAnalytics">Analytics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Taskallocation">Task Allocation</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="TasklogTime">Log Time</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Taskreport">Task Report</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Taskalert">Task Alert</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey="TMAnalytics">
              <TMAnalytics setActiveKey={setActiveKey} />{" "}
              {/* Pass setActiveKey as a prop */}
            </Tab.Pane>
            <Tab.Pane eventKey="Taskallocation">
              <Taskallocation setActiveKey={setActiveKey} />{" "}
            </Tab.Pane>

            <Tab.Pane eventKey="TasklogTime">
              <TasklogTime setActiveKey={setActiveKey} />{" "}
            </Tab.Pane>
            <Tab.Pane eventKey="Taskreport">
              <Taskreport setActiveKey={setActiveKey} />{" "}
            </Tab.Pane>
            <Tab.Pane eventKey="Taskalert">
              <Taskalert setActiveKey={setActiveKey} />{" "}
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Card>
    </Tab.Container>
  );
};

export default TaskManagement;
