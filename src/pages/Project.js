import React from "react";
import TaskListTable from "../components/taskListTable/TaskListTable";

export default function Dashboard() {
  return (
    <div className="mainContainer">
      <h1>Project</h1>
      <TaskListTable />
    </div>
  );
}