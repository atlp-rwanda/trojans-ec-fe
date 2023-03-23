import React from "react";
import {Route, Routes} from "react-router-dom"
import Landing from "./pages/landing";
import  Login from "./pages/login";
import NotFound from "./pages/notFound";
const AppRoutes=()=>{
  return(
        <Routes>

          <Route path="" element={<Landing />} ></Route>

          <Route exact  path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} ></Route>
   

        </Routes>

  )

}

export default AppRoutes