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
    path: '/dashboard',
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
        {mainNav.map((navLink, index) => (
          <Route key={navLink.path} path={navLink.path}>
            {navLink.view}
          </Route>
        ))}
        </Switch>
    </Router>
  );
}

export default App;
