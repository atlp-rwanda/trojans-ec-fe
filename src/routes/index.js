import React from "react";
import {Route, Routes} from "react-router-dom"
import Homepage from "../pages/homepage";
import  Login from "../pages/login";
import NotFound from "../pages/notFound";
const AppRoutes=()=>{
  return(
        <Routes>

          <Route path="/" element={<Homepage />} ></Route>

          <Route exact  path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} ></Route>
   

        </Routes>

  )

}

export default AppRoutes