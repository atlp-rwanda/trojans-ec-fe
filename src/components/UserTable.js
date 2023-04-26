import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import BackButton from "./BackButton";
import TbBody from "./TbBody";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../redux/features/actions/user";
import { getUsers } from "../redux/features/slices/getUsers";

import TbHeader from "./TbHeader";
import { ToastContainer } from "react-toastify";

const UserTable = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { users, loading, error } = useSelector(getUsers);
  const usersPerPage = 5;

  const lastUsersIndex = currentPage * usersPerPage;
  const firstUsersIndex = lastUsersIndex - usersPerPage;
  const currentUsers = users.slice(firstUsersIndex, lastUsersIndex);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const totalUsers = Math.ceil(users.length / usersPerPage);

  const nextPage = () => {
    if (currentPage !== totalUsers) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {!loading && !error && (
        <div className="allUsers box-border w-[100%] min-h-[80vh] bg-white px-8 py-4 rounded-2xl relative lg:w-full">
          <ToastContainer />
          <div className="w-full">
            {/* <BackButton /> */}
            <h1 className="text-center font-bold text-purple-900 py-4">
              All Users
            </h1>
            <div className="container mx-auto userTable overflow-x-auto  ">
              <table className="w-full table" data-testid="table">
                <thead>
                  <TbHeader />
                </thead>
                <tbody>
                  <TbBody currentUsers={currentUsers} />
                </tbody>
              </table>
            </div>

            <div className="container mx-auto pagination my-4 flex outside">
              <button
                className="bg-gray-300 rounded px-2 py-[1px] hover:bg-gray-400 font-semibold"
                onClick={prevPage}
              >
                Prev
              </button>
              <Pagination
                totalUsers={users.length}
                usersPerPage={usersPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
              <button
                className="bg-gray-300 rounded px-2 py-[1px] hover:bg-gray-400 font-semibold"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
