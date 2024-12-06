import React, { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "../myComponents/SideBar";
import TopNavbar from "../myComponents/TopBar";
import RealTime from "../myComponents/RealTime";
import Breadcrumb from "../myComponents/Breadcrumb";

const Layout =()=> {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return(
        <div className="flex bg-gray-100 relative md:static">
            <SideBar sideBarStatus={sideBarOpen} toggleSideBar={setSideBarOpen} />
            <div className="flex-1 h-screen overflow-y-auto">
            <TopNavbar sideBarStatus={sideBarOpen} toggleSideBar={setSideBarOpen} />
                <div>
                <div className="h-screen ">
			<div className="p-4">
				<nav className="flex justify-between items-center">
                <Breadcrumb />
					<div className="hidden sm:flex flex-col items-end">
						<h1 className="font-bold"><RealTime/></h1>
						<p className="opacity-40 flex items-center">
							<span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
							Axcel Rutagarama
						</p>
					</div>
				</nav>
                
			</div>
                <Outlet/>
                </div>
                </div>
            </div>
           
        </div>
    )
}

export default Layout