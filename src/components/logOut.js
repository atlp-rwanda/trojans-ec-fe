import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutThunk } from "../redux/features/actions/logout";
import Spinner from "./products/viewProducts/spinner";


function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, response } = useSelector((state) => state.logout);
  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  useEffect(() => {
    if (Object.keys(response).length > 0) {
      if (response.status === 200) {
        navigate("/login");
      }
    }
  }, [response]);

  return (
    <a onClick={handleLogOut}>
      <span className="icon">
        <ion-icon name="log-out-outline"></ion-icon>
      </span>
      {isLoading ? <Spinner withoutText={true}  black={true}  />:  <span className="title">Logout</span>}
    </a>
  );
}

export default Logout;
