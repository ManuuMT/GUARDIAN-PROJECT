import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Navbar from "../component/Header/Navbar/Navbar.jsx"
import Footer from "../component/Footer/Footer.jsx";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
  			<Navbar/>
            <Footer/>
	  </>
	);
};
