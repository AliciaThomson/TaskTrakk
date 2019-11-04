import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideBarNav from './components/sidebar-nav/SideBarNav';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import "./styles/base/base.scss";
import "./styles/base/typography.scss";
import AddRecipeForm from "./components/create-task-form/CreateTaskForm";
import TaskDetails from "./components/task-details/TaskDetails";

export default class App extends React.Component {
  state = {
    toggleTask: false
  }
  render() {
    return (
      <Router>
        <SideBarNav />
        <Switch>
          <Route key="dashboard" exact path="/">
            <Dashboard />
          </Route>
          <Route key="project" path="/project">
            <Project />
          </Route>
        </Switch>
        {this.state.toggleTask ? (
          <TaskDetails />
        ) : (
            <AddRecipeForm />
          )}
      </Router>
    );
  }
}
