import React from "react";
import { useLocation, NavLink } from "react-router-dom";
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
        className={`${
          lastPath === "notifications" ? "hovered" : ""
        } dash-nav-link`}
      >
        <NavLink to={"/dashboard/admin/notifications"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="notifications-outline"></ion-icon>
            </span>
            <span className="title">Notifications</span>
          </a>
        </NavLink>
      </li>

      <li className="dash-nav-link">
        <NavLink to={"/user/profile"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="title">Profile</span>
          </a>
        </NavLink>
      </li>
      <li className="dash-nav-link">
        <NavLink to={"/login"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="title">Logout</span>
          </a>
        </NavLink>
      </li>
    </>
  );
};

export default AdminLinks;
