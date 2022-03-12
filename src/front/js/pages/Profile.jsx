import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NavBar from "../component/Header/Navbar/Navbar.jsx";
import HeaderProfile from "../component/HeaderProfile/HeaderProfile.jsx";



export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<NavBar/>
            <HeaderProfile/>
	    </>
	);
};