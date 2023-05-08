import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../../../redux/features/slices/user';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(setUser());
        return navigate("/login");
      }
    return (
        <div data-testid="admin-dashboard">
            <h1>Welcome to the admin dashboard!</h1>
            <button
            onClick={handleLogout}
            data-testid="logout-btn"
            className="button border py-2 px-4 rounded-xl text-white "
          >
            Log out
          </button>
        </div>
    );
}

export default AdminDashboard;