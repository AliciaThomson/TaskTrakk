import React from "react";
import TaskListTable from "../components/task-list-table/TaskListTable";

export default function Dashboard() {
  return (
    <div className="mainContainer">
      <h1>Project</h1>
      <TaskListTable />
    </div>
  );
}