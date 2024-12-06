import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Program from './pages/Program';
import AdminDashboard from './pages/AdminDashboard';
import Stock from './pages/Stock';
import Users from './pages/AllUser';
import ProfilePage from './pages/ProfilePage';
import ProfileForm from './myComponents/ProfileForm';

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/Programs', element: <Program /> },
		    {path: "/AdminDashboard", element: <AdminDashboard/>},
			{path: "Stocks", element: <Stock/>},
			{path: "Users", element: <Users/>}
		],

	},
	{
		path: '/',
		element: <ProfilePage/>,
		children: [
			{ path: 'Profile/', element: <ProfileForm /> },
		],

	},
];
const router = (
	<BrowserRouter>
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element}>
					{route.children.map((child) => (
						<Route key={child.path} path={child.path} element={child.element} />
					))}
				</Route>
			))}
		</Routes>
	</BrowserRouter>
);
const App = () => {
	return router;
};

export default App;
