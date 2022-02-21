import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NavBar from "../component/Header/Navbar/Navbar.jsx"
import HeaderAbout from "../component/HeaderAbout/HeaderAbout.jsx";
import IconsAbout from "../component/IconsAbout/IconsAbout.jsx";
import InfoAbout from "../component/InfoAbout/InfoAbout.jsx";

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<NavBar/>
			<HeaderAbout/> 
			<IconsAbout/>
			<InfoAbout/>
	    </>
	);
};
