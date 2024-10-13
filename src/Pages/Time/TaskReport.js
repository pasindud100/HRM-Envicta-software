import React from "react";
import { Table, Button, Pagination, Card } from "react-bootstrap";

const TaskReport = () => {
  const tasks = [
    {
      id: "001",
      name: "UI Design",
      submittedBy: "Kamal Perera",
      estimatedTime: "4h",
      spentTime: "3h 50m",
      difference: "10m",
      efficiency: "Enough",
    },
    
  ];

  //this to convert table data to CSV ..download
  const handleDownload = () => {
    const csvRows = [];

    // Add table headers in changing nature
    const headers = ["Task ID", "Task Name", "Submitted By", "Estimated Time", "Spent Time", "Difference", "Efficiency"];
    csvRows.push(headers.join(","));

    // Ading table rows
    tasks.forEach((task) => {
      const row = [task.id, task.name, task.submittedBy, task.estimatedTime, task.spentTime, task.difference, task.efficiency];
      csvRows.push(row.join(","));
    });

    // Convert rows to CSV format
    const csvString = csvRows.join("\n");

  
    const blob = new Blob([csvString], { type: "text/csv" });

    // this is download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "task_report.csv"; // file name to download

    //this click to start the download
    link.click();
  };

  return (
    <div>
      <h4>Manage Efficiency</h4>
      <Card className="p-4 mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Completed Tasks</h5>
        </div>

        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Submitted By</th>
              <th>Estimated Time</th>
              <th>Spent Time</th>
              <th>Difference</th>
              <th>Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.submittedBy}</td>
                <td>{task.estimatedTime}</td>
                <td>{task.spentTime}</td>
                <td>{task.difference}</td>
                <td>{task.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-end align-items-center mt-3">
          

          <Button variant="primary" onClick={handleDownload}>
            Download Report
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TaskReport;
