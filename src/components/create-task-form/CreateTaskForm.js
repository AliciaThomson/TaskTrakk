import React from "react";
import "./CreateTaskForm.scss";

export default class CreateTaskForm extends React.Component {
  state = {
    id: '',
    label: '',
    description: '',
    project: '',
    milestone: '',
    assignee: '',
    severity:''
  }

  getHandler = (key) => (val) => {
    this.setState({ [key]: val });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="rightPanel">
        <h2>Create New Task</h2>
        <form onSubmit={this.handleSubmit}>
          <label for="label">
            Label
            <input type="text" name="label" onChange={this.getHandler('label')}/>
          </label>
          <label for="description">
            Description
            <textarea name="description"></textarea>
          </label>
          <label for="project">
            Project
            <select name="project">
              <option value=""></option>
            </select>
          </label>
          <label for="milestone">
            Milestone
            <select name="milestone">
              <option value=""></option>
            </select>
          </label>
          <label for="assignee">
            Assign to
            <select name="assignee">
              <option value=""></option>
            </select>
          </label>
          <label for="severity">
            Severity
            <select name="severity">
              <option value="enhancement">enhancement</option>
              <option value="normal">Normal</option>
              <option value="critical">Critical</option>
            </select>
          </label>
          <button type="button" className="button">Add New</button>
        </form>
      </div>
    )
  }
}