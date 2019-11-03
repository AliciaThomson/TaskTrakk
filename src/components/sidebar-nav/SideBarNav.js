import React from "react";
import {
  Link
} from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import "../../assets/fonts/icon-font.css";
import "./SideBarNav.scss";

export default function SideBarNav() {
  
  const mainNav = [
    {
      text: 'Dashboard',
      iconClass: 'icon-dashboard',
      path: '/'
    },
    {
      text: 'First Project',
      iconClass: 'icon-folder',
      path: '/project-1'
    },
    {
      text: 'Second Project',
      iconClass: 'icon-folder',
      path: '/project-2'
    },
    {
      text: 'Milestones',
      iconClass: 'icon-milestones',
      path: '/milestones'
    },
    {
      text: 'Settings',
      iconClass: 'icon-settings',
      path: '/settings'
    },
  ]
  
  return (
    <div className="sidebar">
      <img className="sidebar__logo" alt="TrakTime Logo" src={Logo}/>
      <ul className="sidebar__navigation">
        {mainNav.map((navLink) => (
          <li className="sidebar__navigation__li" key={navLink.path}>
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