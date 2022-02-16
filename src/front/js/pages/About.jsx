import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Navbar from "../component/Header/Navbar/Navbar.jsx"
import Main from "../component/Main/Main.jsx"

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<>

            <Navbar/>
			<Main/>

	    </>
	);
};
