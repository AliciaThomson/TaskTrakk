import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideBarNav from './components/sidebar-nav/SideBarNav';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';

const mainNav = [
  {
    text: 'Dashboard',
    path: '/',
    view: <Dashboard />
  },
  {
    text: 'Project',
    path: '/project',
    view: <Project />
  },
]

function App() {
  return (
    <Router>
      <SideBarNav mainNav={mainNav} />
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
