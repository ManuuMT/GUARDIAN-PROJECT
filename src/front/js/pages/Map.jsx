import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Navbar from "../component/Header/Navbar/Navbar.jsx"
import Footer from "../component/Footer/Footer.jsx";

export const Map = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Navbar/>
			{/* Colocar aquí Map component */}
			<Footer/>
	   </>
	);
};