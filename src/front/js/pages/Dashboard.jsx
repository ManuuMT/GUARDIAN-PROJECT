import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NavBar from "../component/Header/Navbar/Navbar.jsx";
import DashboardUser from "../component/DashboardUser/dashboardUser.jsx";



export const Dashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<NavBar/>
            <DashboardUser/>
	    </>
	);
};