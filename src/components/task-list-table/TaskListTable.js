import React from "react";
import { tasks, users } from '../../services/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp, faArrowDown, faInfo,
  faExclamationTriangle, faExclamation
} from '@fortawesome/free-solid-svg-icons';
import './TaskListTable.scss';


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
          <th></th>
          <th>Assignee</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      {tasks.map((task) => (
        <tr>
          <td>
            {task.severity === 'enhancement' && <div className="severity severity-enhancement"><FontAwesomeIcon icon={faInfo} /></div>}
            {task.severity === 'normal' && <div className="severity severity-normal"><FontAwesomeIcon icon={faExclamationTriangle} /></div>}
            {task.severity === 'critical' && <div className="severity severity-critical"><FontAwesomeIcon icon={faExclamation} /></div>}
          </td>
          <td>
            <h4>{task.label}</h4>
            <p>Created by {getUser(task.author, users)}</p>
          </td>
          <td>
            <h4>{getUser(task.assignee, users)}</h4>
          </td>
          <td>
            <h4>{task.status}</h4>
          </td>
          <td>
            <FontAwesomeIcon icon={faArrowUp} />
            <FontAwesomeIcon icon={faArrowDown} />
          </td>
         </tr>
      ))}
    </table>
  )
}