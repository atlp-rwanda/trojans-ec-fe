import React, { useEffect } from "react";
import "../../../../styles/users.scss";
import UserTable from "../../../../components/UserTable";
import { getUsers } from "../../../../redux/features/slices/getUsers";
import { useNavigate } from "react-router";
import Spinner from "../../../../components/products/viewProducts/spinner";
import { useSelector } from "react-redux";
import parseJwt from "../../../../helpers/parseJwt";
import ErrorHandler from "../../../../components/shared/ErrorHandler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminMain from "../AdminMain";

const AllUsers = () => {
  const { getLoading, error } = useSelector(getUsers);

  useEffect(() => {
    if (error.message === "Role already assigned") {
      toast.error("Role already assigned");
    }
  }, [error]);
  return (
    <div>
      <ToastContainer />
      {getLoading && (
        <div data-testid="loading-spinner">
          <Spinner />
        </div>
      )}
      {error.status && <ErrorHandler loading={getLoading} error={error} />}
      <AdminMain element={<UserTable />} />
    </div>
  );
};

export default AllUsers;
