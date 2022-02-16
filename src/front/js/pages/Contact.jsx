import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Footer from "../component/Footer/Footer.jsx";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
  			<Footer/>
	  </>
	);
};
