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

function App() {
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
    </Router>
  );
}

export default App;
