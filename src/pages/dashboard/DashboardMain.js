import React, { useState } from "react";
import SellerMainSidebar from "../../components/dashboard/SellerMainSidebar";
const DashboardMain = ({ element, buyer, navbar, toggle }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="dashboard">
      {navbar}
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
          </div>
          {element}
        </div>
        {buyer ? null : <SellerMainSidebar />}
      </div>
    </div>
  );
};

export default DashboardMain;
