import React from "react";
import AdminMain from "./AdminMain";
import ProfileUpdate from "../../profileUpdate";
const AdminProfile = () => {
  return (
    <div>
      <AdminMain element={<ProfileUpdate />} />
    </div>
  );
};

export default AdminProfile;
