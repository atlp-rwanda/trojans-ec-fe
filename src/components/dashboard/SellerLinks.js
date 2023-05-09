import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import Logout from "../logOut";

const SellerLinks = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const lastPath = paths[paths.length - 1];
  return (
    <>
      <li className={`${lastPath === "seller" ? "hovered" : ""} dash-nav-link`}>
        <NavLink to={"/dashboard/seller"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </NavLink>
      </li>

      <li
        data-testid="products-link"
        className={`${
          lastPath === "products" || paths.includes("products") ? "hovered" : ""
        } dash-nav-link`}
      >
        <NavLink to={"/dashboard/seller/products"}>
          <a href="#">
            <span className="icon">
              <ion-icon name="bag-outline"></ion-icon>
            </span>
            <span className="title">Products</span>
          </a>
        </NavLink>
      </li>
      {/* <li
          className={`${lastPath === "orders" ? "hovered" : ""} dash-nav-link`}
        >
          <NavLink to={"/dashboard/seller/orders"}>
            <a href="#">
              <span className="icon">
                <ion-icon name="cart-outline"></ion-icon>
              </span>
              <span className="title">Orders</span>
            </a>
          </NavLink>
        </li> */}
      <li
        className={`${
          lastPath === "notifications" ? "hovered" : ""
        } dash-nav-link`}
      >
        <NavLink to={"/dashboard/seller/notifications"}>
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

export default SellerLinks;
