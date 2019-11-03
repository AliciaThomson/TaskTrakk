import React from "react";
import { tasks, users } from '../../services/data.json';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function getUser(id, users) {
  const user = users.filter(_user => _user.ID === id)
  return user[0].firstname + " " + user[0].lastname
}

export default function TaskListTable() {
  return (
    <table className="taskListTable">
      <thead>
        <tr>
          <th></th>
          <th>Assignee</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      {tasks.map((task) => (
        <tr>
          <td>
            {task.severity === 'enhancement' && <i className="fas fa-info"></i>}
            {task.severity === 'normal' && <i className="fas fa-exclamation-triangle"></i>}
            {task.severity === 'critical' && <i className="fas fa-exclamation"></i>}
          </td>
          <td>
            <h4>{task.label}</h4>
            <p>Created by {getUser(task.author, users)}</p>
          </td>
          <td>
            <h4>{getUser(task.assignee, users)}</h4>
          </td>
          <td>
            <i className="fas fa-arrow-up"></i>
            <FontAwesomeIcon icon={faArrowUp} />
            <i className="fas fa-arrow-down"></i>
          </td>
         </tr>
      ))}
    </table>
  )
}