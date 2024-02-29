import React from "react";
import adminstyle from "../pages/Admin.module.css";
import { NavLink } from "react-router-dom";
const AdminNav = () => {
  return (
    <nav className={adminstyle.adminnav}>
      <NavLink key="configpets" to="admin/configpets">
        Подопечные
      </NavLink>
      <NavLink key="configqwe" to="admin/configpets">
        sdfsfd
      </NavLink>
      <NavLink key="configp" to="admin/configpets">
        sdfsfd
      </NavLink>
      <NavLink key="configpe" to="admin/configpets">
        sdfsfd
      </NavLink>
      <NavLink key="configpet" to="admin/configpets">
        sdfsfd
      </NavLink>
    </nav>
  );
};

export default AdminNav;
