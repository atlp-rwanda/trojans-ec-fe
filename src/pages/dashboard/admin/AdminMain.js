import React, { useState } from "react";
import MainNavbar from "../../../components/dashboard/MainNavbar";
import AdminLinks from "../../../components/dashboard/AdminLinks";
import AdminSidebar from "../../../components/dashboard/AdminSidebar";
import Notification from "../../../components/notification/notification";
const AdminMain = ({ element }) => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="dashboard">
      <MainNavbar
        active={active}
        setActive={setActive}
        links={<AdminLinks />}
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
            </span>
            <span className="mt-5 mr-14 ">
              <Notification position={`lg:right-0 -ml-14`}/>
            </span>
          </div>
          {element}
        </div>
        <AdminSidebar />
      </div>
    </div>
  );
};

export default AdminMain;
