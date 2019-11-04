import React from "react";
import TaskListTable from "../components/task-list-table/TaskListTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Project extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="pageHeader">
          <h1>Project</h1>
          <button className="iconButton">
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </button>
        </div>
        <TaskListTable />
      </div>
    );
  }
}