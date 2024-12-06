import React from "react";
import { Outlet } from "react-router";
import TopNavbar from "../myComponents/TopBar";


const ProfilePage=()=>{
    return(
       <div className="bg-gray-100 h-screen overflow-y-auto">
           <TopNavbar/>
           <h1 className="text-center text-2xl mt-4 font-bold">Profile Details</h1>
          <Outlet/>
       </div>
    )
}

export default ProfilePage;