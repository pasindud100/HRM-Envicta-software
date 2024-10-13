import React from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";

const TMAnalytics = ({ setActiveKey }) => {
  const taskStatisticsData = {
    // Dummy data
    todayActivity: "20h 45m",
    weeklyActivity: "120h 30m",
    monthlyActivity: "300h 15m",
    activeEmployees: 15,
  };

  // ongoing tasks adata
  const ongoingTasks = [
    {
      id: "001",
      name: "UI Design",
      assignedTo: "Kamal Perera",
      assignedBy: "Jayasinghe",
      priority: "High",
      estimatedTime: "4h",
      deadline: "2024/10/15",
      status: "In Progress",
    },
    {
      id: "002",
      name: "API Development",
      assignedTo: "Nimal Fernando",
      assignedBy: "Jayasinghe",
      priority: "Medium",
      estimatedTime: "6h",
      deadline: "2024/10/20",
      status: "In Progress",
    },
    {
      id: "003",
      name: "Database Setup",
      assignedTo: "Sunil Silva",
      assignedBy: "Fernando",
      priority: "Low",
      estimatedTime: "2h",
      deadline: "2024/10/18",
      status: "In Progress",
    },
    {
      id: "004",
      name: "Frontend Development",
      assignedTo: "Saman Weerasinghe",
      assignedBy: "Jayawardena",
      priority: "High",
      estimatedTime: "8h",
      deadline: "2024/10/25",
      status: "In Progress",
    },
  ];

  const viewAllTasks = () => {
    setActiveKey("Taskdetails"); // to navigate to TD tab**
  };

  return (
    <div>
      {/* analytics part */}
      <Card className="p-4 mt-4">
        <Row
          className="text-center mb-4 bg-light "
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <Col style={{ borderRight: "1px solid #ddd" }}>
            <div className="rounded p-3 text-$indigo-200">
              <h5>Today's Activity</h5>
              <p>{taskStatisticsData.todayActivity}</p>
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid #ddd" }}>
            <div className="rounded p-3">
              <h5>Weekly Activity</h5>
              <p>{taskStatisticsData.weeklyActivity}</p>
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid #ddd" }}>
            <div className="rounded p-3">
              <h5>Monthly Activity</h5>
              <p>{taskStatisticsData.monthlyActivity}</p>
            </div>
          </Col>
          <Col>
            <div className="rounded p-3">
              <h5>Active Employees</h5>
              <p>{taskStatisticsData.activeEmployees}</p>
            </div>
          </Col>
        </Row>

        {/* ongoing tasks display     table */}
        <h5>Ongoing Tasks</h5>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Assigned To</th>
              <th>Assigned By</th>
              <th>Priority</th>
              <th>Estimated </th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ongoingTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.assignedTo}</td>
                <td>{task.assignedBy}</td>
                <td>{task.priority}</td>
                <td>{task.estimatedTime}</td>
                <td>{task.deadline}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/*this btn to go all task tab */}
        <div className="d-flex justify-content-end mt-2">
          <Button variant="primary" onClick={viewAllTasks}>
            View All Tasks
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TMAnalytics;
