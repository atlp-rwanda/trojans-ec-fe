import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import Logout from "../logOut";
const AdminLinks = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const lastPath = paths[paths.length - 1];
  return (
    <>
      <li className={`${lastPath === "users" ? "hovered" : ""} dash-nav-link`}>
        <NavLink to={"/dashboard/admin/users"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Users</span>
          </a>
        </NavLink>
      </li>
      <li
        className={`${lastPath === "profile" ? "hovered" : ""} dash-nav-link`}
      >
        <NavLink to={"/dashboard/admin/profile"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="title">Profile</span>
          </a>
        </NavLink>
      </li>
      <li className="dash-nav-link">
        <Logout />
      </li>
    </>
  );
};

export default AdminLinks;
