import React from 'react';
import {
	IoMenu,
	IoPersonOutline,
} from 'react-icons/io5';


const TopNavbar = ({ toggleSideBar, sideBarStatus }) => {
	return (
		<nav className="flex items-center justify-between bg-white p-2 py-4 dark:bg-gray-800 dark:text-gray-100">
			<div className="sm:hidden">
				<button onClick={() => toggleSideBar(!sideBarStatus)} aria-label="Menu">
					<IoMenu className="text-2xl" />
				</button>
			</div>

			<div className="flex-grow mx-6 max-w-md  p-2 rounded-lg">
				{' '}
				<div className="flex items-center  relative  ">
				</div>
			</div>
			<div className="flex relative items-center space-x-4">
				<button aria-label="Profile">
					<IoPersonOutline className="text-xl" />
				</button>
			</div>
		</nav>
	);
};

export default TopNavbar;
