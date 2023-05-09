import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import Logout from "../logOut";
const BuyerLinks = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const lastPath = paths[paths.length - 1];
  return (
    <>
      <li
        className={`${lastPath === "wishlist" ? "hovered" : ""} dash-nav-link`}
      >
        <NavLink to={"/products/wishlist"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="book-outline"></ion-icon>
            </span>
            <span className="title">Wishes</span>
          </a>
        </NavLink>
      </li>
      <li className={`${lastPath === "orders" ? "hovered" : ""} dash-nav-link`}>
        <NavLink to={"/dashboard/buyer/orders"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="bag-outline"></ion-icon>
            </span>
            <span className="title">Orders</span>
          </a>
        </NavLink>
      </li>
      <li
        className={`${
          lastPath === "notifications" ? "hovered" : ""
        } dash-nav-link`}
      >
        <NavLink to={"/dashboard/buyer/notifications"}>
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
        <Logout />
      </li>
    </>
  );
};

export default BuyerLinks;
