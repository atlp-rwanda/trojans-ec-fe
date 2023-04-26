import React, { useState } from "react";
import MainNavbar from "../../../components/dashboard/MainNavbar";
import SellerLinks from "../../../components/dashboard/SellerLinks";
import SellerMainSidebar from "../../../components/dashboard/SellerMainSidebar";
const SellerMain = ({ error, element, buyer }) => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="dashboard">
      <MainNavbar
        active={active}
        setActive={setActive}
        links={<SellerLinks />}
      />
      <div className="main">
        <div className={`${active ? "active" : ""} middle`}>
          <div className="topbar">
            <div onClick={toggle} className="toggle lg:hidden">
              {active ? (
                <ion-icon name="close-outline" className=""></ion-icon>
              ) : (
                <ion-icon name="menu-outline" className=""></ion-icon>
              )}
            </div>
            <div
              onClick={toggle}
              className="toggle hidden lg:flex justify-center items-center "
            >
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <span className="mt-5 mr-14">
              <ion-icon name="notifications-outline"></ion-icon>
            </span>
          </div>
          {element}
        </div>
        {buyer ? null : <SellerMainSidebar />}
      </div>
    </div>
  );
};

export default SellerMain;
