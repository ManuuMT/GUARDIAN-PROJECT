import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Navbar from "../component/Header/Navbar/Navbar.jsx"

export const Map = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Navbar/>
	   </>
	);
};