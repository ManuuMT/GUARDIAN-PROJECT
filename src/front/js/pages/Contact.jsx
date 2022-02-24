import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Navbar from "../component/Header/Navbar/Navbar.jsx"
import ContactView from "../component/Contact/ContactView.jsx";
import InfoContact from "../component/Footer/InfoContact/InfoContact.jsx";
import Copyright from "../component/Footer/Copyright/Copyright.jsx";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
  			<Navbar/>
			<ContactView/>
			<InfoContact/>
			<Copyright/>
	  </>
	);
};
