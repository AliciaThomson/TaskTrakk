import React from "react";
import TaskListTable from "../components/task-list-table/TaskListTable";

export default class Project extends React.Component {
  render() {
    return (
        <div className="mainContainer">
          <h1>Project</h1>
          <TaskListTable />
        </div>
    );
  }
}