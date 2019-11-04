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
    <div className="dataTableWrapper">
      <div className="filterOptions">
        <button type="button" className="button button--transparent button--selected">All</button>
        <button type="button" className="button button--transparent">My Tasks</button>
        <label>Filter by</label>
        <select>
          <option defaultValue disabled>Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="To Be Tested">To Be Tested</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="dataTable taskListTable">
        <table>
          <thead>
            <tr>
              <th colSpan="2">{tasks.length} Issues</th>
              <th>Assignee</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.ID} className="task">
                <td>
                  {task.severity === 'enhancement' && <div className="task__severity task__severity--enhancement"><FontAwesomeIcon icon={faInfo} /></div>}
                  {task.severity === 'normal' && <div className="task__severity task__severity--normal"><FontAwesomeIcon icon={faExclamationTriangle} /></div>}
                  {task.severity === 'critical' && <div className="task__severity task__severity--critical"><FontAwesomeIcon icon={faExclamation} /></div>}
                </td>
                <td>
                  <h4>{task.label}</h4>
                  <p>Created by {getUser(task.author, users)}</p>
                </td>
                <td>
                  <h4>{getUser(task.assignee, users)}</h4>
                </td>
                <td>
                  <h4 className="task__status">{task.status}</h4>
                </td>
                <td>
                  <div className="task__controls">
                    <FontAwesomeIcon className="task__controls__arrow" icon={faArrowUp} />
                    <FontAwesomeIcon className="task__controls__arrow" icon={faArrowDown} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}