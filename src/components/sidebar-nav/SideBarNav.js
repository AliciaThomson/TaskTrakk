import React from "react";
import {
  Link
} from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

export default function SideBarNav(props) {
  
  const mainNav = [
    {
      text: 'Dashboard',
      icon: '',
      path: '/'
    },
    {
      text: 'First Project',
      icon: '',
      path: '/project-1'
    },
    {
      text: 'Second Project',
      icon: '',
      path: '/project-2'
    },
    {
      text: 'Milestones',
      icon: '',
      path: '/milestones'
    },
    {
      text: 'Settings',
      iconClass: '',
      path: '/settings'
    },
  ]
  
  return (
    <div className="sidebar">
      <img className="logo" alt="TrakTime Logo" src={Logo}/>
      <ul className="navigation">
        {mainNav.map((navLink) => (
          <li key={navLink.path}>
            <Link to={navLink.path}>
              <i className={navLink.iconClass}></i>
              {navLink.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}