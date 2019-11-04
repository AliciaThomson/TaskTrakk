import React from "react";
import { tasks, users, projects, milestones } from '../../services/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle, faExclamation, faInfo
} from '@fortawesome/free-solid-svg-icons';
import "./TaskDetails.scss";
import { formatDate, getUser, getProject, getMilestone } from '../../utils';

export default function TaskDetails() {
  const task = tasks[0];

  return (
    <div className="rightPanel taskDetails">
      <div className="taskDetails__severityStatus">
        {task.severity === 'enhancement' && <div className="taskDetails__severity severity-enhancement"><FontAwesomeIcon icon={faInfo} /></div>}
        {task.severity === 'normal' && <div className="taskDetails__severity severity-normal"><FontAwesomeIcon icon={faExclamationTriangle} /></div>}
        {task.severity === 'critical' && <div className="taskDetails__severity severity-critical"><FontAwesomeIcon icon={faExclamation} /></div>}
        <select className="taskDetails__status" name="status">
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Completed</option>
        </select>
      </div>
      <h3>{task.label}</h3>
      <span className="taskDetails__created">{formatDate(task.created)}</span>
      <span className="taskDetails__author">{getUser(task.author, users)}</span>
      <p className="taskDetails__description">{task.description}</p>
      <div className="row">
        <div className="column-half taskDetails__project">
          <p className="detailLabel">Project:</p>
          <h4>{getProject(task.project, projects)}</h4>
        </div>
        <div className="column-half taskDetails__milestone">
          <p className="detailLabel">Milestone:</p>
          <h4>{getMilestone(task.miletone, milestones)}</h4>
        </div>
      </div>
      <form>
        <label>
          Comments
          <textarea name="comments"></textarea>
          <div className="alignRight">
            <button type="button" className="button button--secondary">Submit</button>
            <button type="button" className="button">Submit as Solved</button>
          </div>
        </label>
      </form>
    </div>
  )
}