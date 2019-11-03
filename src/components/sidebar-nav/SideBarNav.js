import React from "react";
import {
  Link
} from "react-router-dom";

export default function SideBarNav(props) {
  const { mainNav } = props;
  return (
      <div className="sidebar">
        <ul className="navigation">
          {mainNav.map((navLink, index) => (
            <li key={navLink.path}><Link to={navLink.path}>{navLink.text}</Link></li>
          ))}
        </ul>
      </div>
  );
}